"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db,User,User_teacher,User_student,School
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)


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

    # if not email or not _password or is_student is None:
    #     return "Missing info", 400

    password_hashed = generate_password_hash( _password, method='pbkdf2:sha256', salt_length=8)
    user_id = User.add(
        # email, 
        # password_hashed, 
        # is_student, 
        # promo,
        # full_name,
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
    return jsonify(teacher.serialize()), 201














































# # @api.route('/student', methods = ['POST'])
# # def create_student():
# #     full_name = request.json.get('full_name', None)
# #     email = request.json.get('email', None)
# #     password = request.json.get('password', None)
# #     is_active = request.json.get('is_active', None)
# #     promo = request.json.get('promo', None)
# #     schools = request.json.get('schools', None)

# #     if (full_name is None or email is None or password is None or promo is None):
# #         return {"error":"Missing info "}, 400 

# #     # if user : 
# #     #     return jsonify ({"error" : " email  already used"}),400

# #         new_student = Student(
# #             full_name =full_name,
# #             email= email,
# #             password= password,
# #             is_active= is_active,
# #             promo = promo,
# #             schools = schools
# #         )

# #         create_student = new_student.create()

# #         return jsonify(create_student),201



# @api.route('/student', methods=['POST'])
# def create_student():
#     json = request.get_json()

#     if json is None :
#         return ("error missing info "),400

#     student = Student()
#     student.set_with_json(json)
#     student.create()

#     return jsonify(student.serialize()),201

# @api.route("/student/<int:id>",methods=['PUT'])
# def update_one_student (id):
#     json = request.get_json()
#     student = Student.get_one_by_id(id)

#     # if student ["is_logged"] = False : 
#     #     return ("You can't change your info if you doesn't have account") , 401
    
#     student.put_with_json(json)
#     db.session.commit()
#     return jsonify(student.serialize()), 201

# @api.route('/student', methods=['GET'])
# def get_all_students():
#     students = Student.get_all()
#     student_dic = []
#     for student in students:
#         student_dic.append(student.serialize())
#     return jsonify(student_dic),200

# @api.route("/student/<int:id>", methods=['GET'])
# def get_one_student(id):
#     student = Student.get_one_by_id(id)
#     return jsonify(student.serialize()),200 

# @api.route("/student/<int:id>", methods=['DELETE'])
# def delte_one_student(id):
#     json = request.get_json()
#     student = Student.get_one_by_id(id)
#     db.session.delete(student)
#     db.session.commit()
#     return jsonify(student.serialize(), "msg: Student  deleted"), 201







    




    