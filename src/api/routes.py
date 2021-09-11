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


@api.route('/login', methods=['POST'])
def login():
    payload =(request.get_json(force=True))
    email = payload.get('email', None)
    password = payload.get('_password', None)
    print(password)

    if not (email and password):
        return {'error': 'Missing info'}, 400
    
    user = User.get_by_email(email)
    # password_hashed = generate_password_hash(password, method='pbkdf2:sha256', salt_length=8)
    # print(user._password,password)
    valid_password = check_password_hash(user._password,password) 
    
    # TODO:check password using check_password_hash(user.password, password)
    if valid_password:
        token = create_access_token(identity=user.id, expires_delta=timedelta(minutes=100))
        print(token)
        return {'token': token, 'user':user.serialize()}, 200

    else:
        return {'error': 'Email o contraseña incorrecta.'}, 400


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

#TODO creating endpoint to schools
@api.route('/user', methods=['POST','PUT'])
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
    

    
@api.route("/user_put",methods=['PUT'])
@jwt_required()
def update_one_user():
    identity = get_jwt_identity()
    json = request.get_json()
    user = User.get_by_id(identity)
    print(user)
    user.put_with_json(json)
    print(user)
    db.session.commit()
    return jsonify(user.serialize()) ,201






    
@api.route('/user', methods=['GET'])
@jwt_required()
def get_user():
    identity = get_jwt_identity()
    user = User.get_by_id(identity)
    user_student = User_student.get_by_user_id(user.id)
    user_teacher = User_teacher.get_by_user_id(user.id)
    if user.is_student:


        return jsonify(user_student.serialize()), 200

    if user.is_student == False:


        return jsonify(user_teacher.serialize()), 200
    return "User didn't exist", 400

    

@api.route('/user', methods=['DELETE']) 
@jwt_required()
def delete_one_user():
    identity = get_jwt_identity()
    user_target = User.query.get(identity)
    user_target = User.delete(identity)
    return jsonify(user_target.serialize(),"Your profile has been deleted"), 202

@api.route('/users', methods=['GET'])
@jwt_required()
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




# schools
@api.route('/schools',methods=['GET'])
def get_all_schools():
    # user = User.get_by_id
    schools = School.get_all()
    school_dic = []
    for school in schools:
        school_dic.append(school.serialize())
    return jsonify(school_dic), 200


#to find all the schools of this user 

@api.route('/user/schools',methods=['GET'])
@jwt_required()
def get_all_schools_of_user():
    identity = get_jwt_identity()
    user = User.get_by_id(identity)
    if user.school is None:
        return "this user didn't have school" , 400
    schools = user.school
    school_dic = []
    for school in schools:
        school_dic.append(school.serialize())
    return jsonify(school_dic), 200

#to find all the schools of this teacher 

# @api.route('/user/schools',methods=['GET'])
# @jwt_required()
# def get_all_schools_of_user():
#     identity = get_jwt_identity()
#     user = User.get_by_id(identity)
#     if user.school is None:
#         return "this user didn't have school" , 400
#     schools = user.school
#     school_dic = []
#     for school in schools:
#         school_dic.append(school.serialize())
#     return jsonify(school_dic), 200

# #to find all the schools of this teacher 




@api.route('/users/<int:id>/schools',methods=['GET'])
def get_all_user_schools(id):
    user = User.get_by_id(id)
    if user.is_student:
        return "Isn't a teacher" , 400
    schools = user.school
    school_dic = []
    for school in schools:
        school_dic.append(school.serialize())
    return jsonify(school_dic), 200


@api.route('/school/<int:id>', methods=['GET'])
def get_one_school(id):
    school = School.get_by_id(id)
    return jsonify( school.serialize()) , 200

@api.route('/teacher/<int:id>', methods=['GET'])
def get_one_teacher(id):
    teacher = User_teacher.get_by_id(id)
    return jsonify( teacher.serialize()) , 200
    
@api.route('/school', methods=['POST'])
def add_school():

    body = request.get_json()
    school = School()
    school.set_with_json(body)
    school.db_post()
    return jsonify(school.serialize()),201



@api.route('/user/schools', methods=['POST'])
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

# 

@api.route('/review', methods=['POST'])
@jwt_required()
def add_review_to_teacher():
    id = get_jwt_identity()    
    body = request.get_json()
    teacher_id = body.get("teacher_id", None),
    dynamsim = body.get("dynamsim", None),
    pasion = body.get("pasion", None),
    practises_example = body.get("practises_example", None),
    near = body.get("near", None),
    date_teacher = body.get("date_teacher", None),
    more_info = body.get("more_info", None)
    mySchool = User_school.get_by_user_id(id) 
    print(mySchool.school_id)
    school_users = User_school.get_users_by_school_id(mySchool.school_id)
    print(school_users)
    teachers = list(map(lambda x:User.query.filter_by(id = x.user_id).first(), school_users))
    print("this",teachers)
    user_teacher = list(map(lambda x : x.is_student == False,teachers))
    print("a", user_teacher)
    # pepito = School.query.filter_by(id = mySchool.school_id).filter_by(id = teacher_id)
    # if pepito  :
    #     review = Review_teacher( teacher_id=teacher_id, dynamsim=dynamsim, pasion=pasion, practises_example=practises_example, near=near, date_teacher=date_teacher, more_info=more_info)
    #     review.add()
    #     return jsonify(review.serialize()),201
    # return "Missing info" ,400.
    
 
    

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
    review_dic = []
    for review in reviews:
        review_dic.append(review.serialize())
    return jsonify(review_dic), 200

# user_teacher
@api.route('/user_teachers',methods=['GET'])
def get_all_teachers():
    teachers = User_teacher.get_all()
    teacher_dic = []
    for teacher in teachers:
        teacher_dic.append(teacher.serialize())
    return jsonify(teacher_dic), 200

    


# image 

@api.route('/profilepicture', methods=['POST'])
@jwt_required()
def update_profile_picture():
    print(request.files,"FILES")
    if 'profile_picture' in request.files:
        print("hola")
        # upload file to uploadcare
        identity = get_jwt_identity()
        result = cloudinary.uploader.upload(request.files['profile_picture'])
        # fetch for the user
        user = User.get_by_id(identity)
        # update the user with the given cloudinary image URL
        user.img = result['secure_url']
        print(result['secure_url'], "RESULT")
        # db.session.add(user)
        db.session.commit()
        
        return jsonify(user.img), 200
    else:
        raise APIException('Missing profile_image on the FormData')
   


#user_school


# @api.route('/user_schools',methods=['GET'])
# def get_all_user_schools():
#     teachers = User_school.query.all()
#     teacher_dic = []
#     for teacher in teachers:
#         teacher_dic.append(teacher.serialize())
#     return jsonify(teacher_dic), 200
