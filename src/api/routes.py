"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,Student,Teacher
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


@api.route('/users', methods=['GET'])
def get_all_users():
    users = User.get_all()
    user_dic = []
    for user in users:
        user_dic.append(user.serialize())
    return jsonify(user_dic),200


@api.route('/users', methods = ['POST'])
def create_user():
    full_name = request.json.get('full_name', None)
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    is_active = request.json.get('is_active', None)
    is_student = request.json.get('student', None)
    promo = request.json.get('promo', None)

    if not (email and promo and is_active and password and student or teacher):
        return {'error': 'Missing info'}, 400

    user = User.get_by_email(email)
    if user : 
        return jsonify ({"error" : " email  already used"})
    
    new_user = User(
        email=email,
        password = password,
        is_active = is_active,
        promo= promo,
        is_student = is_student
    )
    create_user = new_user.create()
    
    # if user and not user.is_active:
    #     user.reactive_account(email,student or teacher, password)
    #     return jsonify(user), 200

    if is_student == True : 
        new_student = Student(
            full_name = full_name,
            user_id = create_user.id
        )
        create_student = new_student.create()

        return jsonify({"user": create_user,"student" : create_student})
    else : 
        new_teacher = Teacher(
            full_name = full_name,
            user_id = create_user.id
        )
    create_teacher = new_teacher.create()

    return jsonify({"user": create_user,"teacher" : create_teacher})




    




    