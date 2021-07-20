"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db,User,User_teacher,User_student,School,User_school
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import check_password_hash
from datetime import timedelta

api = Blueprint('api', __name__)

# TODO: Register using User.create_password_hash(password)
@api.route('/login', methods=['POST'])
def login():
    payload =(request.get_json(force=True))
    email = payload.get('email', None)
    password = payload.get('password', None)

    if not (email and password):
        return {'error': 'Missing info'}, 400
    user = User.get_by_email(email)
   
    # TODO:check password using check_password_hash(user.password, password)
    if user and (user.password == password) and user.is_active:
        token = create_access_token(identity=user.id, expires_delta=timedelta(minutes=100))
        print(token)
        return {'token': token}, 200

    else:
        return {'error': 'Email o contraseña incorrecta.'}, 400


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


@api.route('/user', methods=['POST'])
def add_user():
    body = request.get_json()
    print(body)
    full_name = body.get("full_name", None)
    email = body.get("email", None)
    _password = body.get("_password", None)
    is_student = body.get("is_student", None)
    promo = body.get("promo", None)

    if not email or not _password or is_student is None:
        return "Missing info", 400

    password_hashed = generate_password_hash( _password, method='pbkdf2:sha256', salt_length=8)
    user_id = User.add(
        email, 
        password_hashed, 
        is_student, 
        promo,
        full_name,
    )

    if is_student:
        student =  User_student(
            user_id=user_id
        )
        student.add()
        return jsonify(student.serialize()), 201

    teacher =  User_teacher(
        linkedin = body.get("linkedin"),
        type_of_teacher = body.get("type_of_teacher"),
        user_id = user_id
    )
    teacher.add()

    school = School(
        name = body.get("name"),
        user_id = user_id,
        img = ("img")
    )

    school.add()
    return jsonify(teacher.serialize(),school.serialize()), 201

@api.route('/user/<int:id>', methods=['GET'])
# @jwt_required()
def get_user(id):
    
    user = User.get_by_id(id)
    user_student = User_student.get_by_user_id(user.id)
    user_teacher = User_teacher.get_by_user_id(user.id)
    if user.is_active and user.is_student:

        return jsonify(user_student.serialize()), 200

    if user.is_active and user.is_student == False:

        return jsonify(user_teacher.serialize()), 200


    return "User didn't exist", 400


@api.route('/user/<int:id>', methods=['DELETE']) 
#@jwt_required()
def delete_one_user(id):
    user_target = User.query.get(id)
    user_target = User.delete(id)
    return jsonify(user_target.serialize(),"Your profile has been deleted"), 202

@api.route('/users', methods=['GET'])
# @jwt_required()
def get_all_users():
    users = User.get_all()
    users_dic = []

    for user in users :
        if user.is_active:
            if user.is_student :
                user_student = User_student.get_by_user_id(user.id)
                if user_student:
                    users_dic.append(user_student.serialize()) 

            else:
                user_teacher = User_teacher.get_by_user_id(user.id)
                if user_teacher: 
                    users_dic.append(user_teacher.serialize())

    return jsonify(users_dic),200


@api.route('/user/<int:id>', methods=['PUT'])
# @jwt_required()
def update_users(id):
    body = request.get_json()
    user = User.update_single_user(body, id)
    if user.is_active and user.is_student:
        user_true = User_student.update_psychologist_user(body, id)
        return jsonify(user_true.serialize)  
    if user.is_active and user.is_psychologist == False:
        user_comp = User_company.update_company_user(body, id)
        print(user_comp)
        return jsonify(user_comp.to_dict())

# schools
@api.route('/schools',methods=['GET'])
def get_all_schools():
    schools = School.get_all()
    print(schools)
    school_dic = []
    for school in schools:
        school_dic.append(school.serialize())
    return jsonify(school_dic), 200

@api.route('/school', methods=['POST'])
def add_school():

    body = request.get_json()
    school = School()
    school.set_with_json(body)
    school.db_post()
    return jsonify(school.serialize()),201




    




    