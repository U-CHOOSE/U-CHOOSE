"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
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
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    is_active = request.json.get('is_active', None)
    student = request.json.get('student', None)
    teacher = request.json.get('teacher', None)
    promo = request.json.get('promo', None)

    if not (email and promo and is_active and password and student or teacher):
    return {'error': 'Missing info'}, 400

    user = User.get_by_email(email)
    if user and not user.is_active:
        user.reactive_account(email,student or teacher, password)
        return jsonify(user), 200


    new_user = User(
        email=email,
        password = password,
        is_active = is_active,
        promo= promo,
        teacher = teacher,
        student = student,
    )

    try : 
        new.user.create()
        return jsonify(new_user), 201




    