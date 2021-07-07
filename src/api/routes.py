"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

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
        return {'error': 'Some parameter is wrong'}, 400


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200