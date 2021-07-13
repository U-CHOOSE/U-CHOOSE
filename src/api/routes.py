"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db,Student,Teacher,School
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


# @api.route('/student', methods = ['POST'])
# def create_student():
#     full_name = request.json.get('full_name', None)
#     email = request.json.get('email', None)
#     password = request.json.get('password', None)
#     is_active = request.json.get('is_active', None)
#     promo = request.json.get('promo', None)
#     schools = request.json.get('schools', None)

#     if (full_name is None or email is None or password is None or promo is None):
#         return {"error":"Missing info "}, 400 

#     # if user : 
#     #     return jsonify ({"error" : " email  already used"}),400

#         new_student = Student(
#             full_name =full_name,
#             email= email,
#             password= password,
#             is_active= is_active,
#             promo = promo,
#             schools = schools
#         )

#         create_student = new_student.create()

#         return jsonify(create_student),201



@api.route('/student', methods=['POST'])
def create_student():
    json = request.get_json()

    if json is None :
        return ("error missing info "),400

    student = Student()
    student.set_with_json(json)
    student.create()

    return jsonify(student.serialize()),201

@api.route("/student/<int:id>",methods=['PUT'])
def update_one_student (id):
    json = request.get_json()
    student = Student.get_one_by_id(id)

    # if student ["is_logged"] = False : 
    #     return ("You can't change your info if you doesn't have account") , 401
    
    student.put_with_json(json)
    db.session.commit()
    return jsonify(student.serialize()), 201

@api.route('/student', methods=['GET'])
def get_all_students():
    students = Student.get_all()
    student_dic = []
    for student in students:
        student_dic.append(student.serialize())
    return jsonify(student_dic),200

@api.route("/student/<int:id>", methods=['GET'])
def get_one_student(id):
    student = Student.get_one_by_id(id)
    return jsonify(student.serialize()),200 


# @api.route('/users', methods = ['POST'])
# def create_user():
#     full_name = request.json.get('full_name', None)
#     email = request.json.get('email', None)
#     password = request.json.get('password', None)
#     is_active = request.json.get('is_active', None)
#     is_student = request.json.get('is_student', None)
#     promo = request.json.get('promo', None)

#     if (email is None or promo is None or  is_active is None or password is None or is_student is None ):
#         return {'error': 'Missing info'}, 400

#     user = User.get_by_email(email)
#     if user : 
#         return jsonify ({"error" : " email  already used"})
    
#     new_user = User(
#         email=email,
#         password = password,
#         is_active = is_active,
#         promo= promo,
#         is_student = is_student
#     )
#     create_user = new_user.create()
    
#     # if user and not user.is_active:
#     #     user.reactive_account(email,student or teacher, password)
#     #     return jsonify(user), 200

#     if is_student == True : 
#         new_student = Student(
#             full_name = full_name,
#             user_id = create_user.id
#         )
#         create_student = new_student.create()

#         return jsonify({"user": create_user,"student" : create_student})
#     else : 
#         new_teacher = Teacher(
#             full_name = full_name,
#             user_id = create_user.id
#         )
#     create_teacher = new_teacher.create()

#     return jsonify({"user": create_user,"teacher" : create_teacher})




    




    