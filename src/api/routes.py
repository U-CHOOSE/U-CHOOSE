"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db,User,User_teacher,User_student,School,User_school,Review_teacher
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from datetime import timedelta, date

import cloudinary
import cloudinary.uploader
import cloudinary.api

api = Blueprint('api', __name__)

# TODO: Register using User.create_password_hash(password)
@api.route('/login', methods=['POST'])
def login():
    payload =(request.get_json(force=True))
    email = payload.get('email', None)
    password = payload.get('_password', None)
    print(password)

    if not (email and password):
        return {'error': 'Missing info'}, 400
    
    user = User.get_by_email(email)
    password_hashed = generate_password_hash(password, method='pbkdf2:sha256', salt_length=8)
    valid_password = check_password_hash(user._password,password_hashed) 
    print(user._password,valid_password)
    # TODO:check password using check_password_hash(user.password, password)
    if valid_password:
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


@api.route('/user', methods=['POST' , 'PUT'])
def add_user():
    
    if request.method == 'POST':
        body = request.get_json()
        print(body)
        full_name = body.get("full_name", None)
        email = body.get("email", None)
        _password = body.get("_password", None)
        is_student = body.get("is_student", None)
        promo = body.get("promo", None)
        sign_completed = body.get("sign_completed", None)


        if not email or not _password or is_student is None:
            return "Missing info", 400

        password_hashed = generate_password_hash( _password, method='pbkdf2:sha256', salt_length=8)
        user_id = User.add(
            email, 
            password_hashed, 
            is_student, 
            promo,
            full_name,
            sign_completed
        )

        if is_student:
            student =  User_student(
                user_id=user_id
            )
            student.add()
            return jsonify({"body": student.serialize()}), 201

        teacher =  User_teacher(
            linkedin = body.get("linkedin"),
            type_of_teacher = body.get("type_of_teacher"),
            user_id = user_id
        )
        teacher.add()
        return jsonify({"teacher": teacher.serialize()}), 201

    elif request.method == 'PUT':
        body = request.get_json()
        img = body.get("img", None)
        school_id = body.get("school_id", None)
        user_id = body.get("user_id", None)
        
        user_school =  User_school(
            school_id = school_id,
            user_id = user_id
        )
        user_school.add()

    
        return jsonify({"school": user_school.serialize()}), 201
    

    
@api.route("/user/<int:id>",methods=['PUT'])
# @jwt_required()
def update_one_user(id):
    json = request.get_json()
    user = User.get_by_id(id)
    print(user)
    user.put_with_json(json)
    db.session.commit()
    return jsonify(user.serialize()) ,201

    
@api.route('/user/<int:id>', methods=['GET'])
# @jwt_required()
def get_user(id):
    
    user = User.get_by_id(id)
    user_student = User_student.get_by_user_id(user.id)
    user_teacher = User_teacher.get_by_user_id(user.id)
    if user.is_student:


        return jsonify(user_student.serialize()), 200

    if user.is_student == False:


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



@api.route('/user/school', methods=['POST'])
def add_school_to_user():
    body = request.get_json()
    print(body)
    user_id = body.get("user_id", None)
    school_id = body.get("school_id", None)
    
    # if user_id or school_id is None : 
    #     return jsonify("Do not have a school or user"),400
    

    user_school = User_school(
       user_id = user_id,
       school_id = school_id
    )
    print("schhol" , user_school)
    user_add = user_school.add()
    print("add" , user_add)
    return jsonify(user_add.serialize()),201


# @api.route('/school/<int:user_id>', methods=['GET'])
# def get_school_to_user(user_id):
#     school = School.get_by_id(user_id)
#     return jsonify(school.serialize()), 200


@api.route('/review', methods=['POST'])
def add_review_to_teacher():
    body = request.get_json()
    print(body)

    
    teacher_id = body.get("teacher_id", None),
    dynamsim = body.get("dynamsim", None),
    pasion = body.get("pasion", None),
    practises_example = body.get("practises_example", None),
    near = body.get("near", None),
    date_teacher = body.get("date_teacher", None),
    more_info = body.get("more_info", None)
    
    review = Review_teacher( teacher_id=teacher_id, dynamsim=dynamsim, pasion=pasion, practises_example=practises_example, near=near, date_teacher=date_teacher, more_info=more_info)

    review.add()
   
 
    return jsonify(review.serialize()),201

@api.route('/reviews', methods=['GET'])
def get_all_review_to_teacher():
    
    
    reviews = Review_teacher.get_all()
    review_dic = []
    for review in reviews:
        review_dic.append(review.serialize())
    return jsonify(review_dic), 200
    

@api.route('/review/<int:teacher_id>', methods=['GET'])
def get_review_to_teacher(teacher_id):
    
    reviews = Review_teacher.get_by_id(teacher_id)
    return jsonify(reviews.serialize()), 200

# user_teacher
@api.route('/user_teachers',methods=['GET'])
def get_all_teachers():
    teachers = User_teacher.get_all()
    teacher_dic = []
    for teacher in teachers:
        teacher_dic.append(teacher.serialize())
    return jsonify(teacher_dic), 200

    


# image 

@api.route('/profilepicture/<int:id>', methods=['POST'])
def update_profile_picture(id):
    print(request.files,"FILES")
    if 'profile_picture' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['profile_picture'])
        # fetch for the user
        user = User.get_by_id(id)
        # update the user with the given cloudinary image URL
        user.img = result['secure_url']
        print(result['secure_url'], "RESULT")
        db.session.add(user)
        db.session.commit()
        return jsonify(user.serialize()), 200
    else:
        raise APIException('Missing profile_image on the FormData')



