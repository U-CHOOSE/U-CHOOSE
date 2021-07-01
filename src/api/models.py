from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from sqlalchemy.dialects.postgresql import VARCHAR, ARRAY
from sqlalchemy.ext.hybrid import hybrid_property
from werkzeug.security import generate_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    is_student = db.Column(db.Boolean(), unique=False, nullable=False)
    promo = db.Column(db.Boolean(), unique=False, nullable=False)



    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_active": self.is_active,
            "student": self.student,
            "teacher": self.teacher,
            "promo": self.promo
            # do not serialize the password, its a security breach
        }

    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def password(self, password):
        self._password = generate_password_hash(
                password, 
                method='pbkdf2:sha256', 
                salt_length=16
            )

    @classmethod
    def get_all(cls):
        users = cls.query.all()

        return users

    @classmethod
    def get_by_email(cls, email):
        user = cls.query.filter_by(email=email).one_or_none()
        
        return user

    @classmethod
    def get_by_id(cls, id):
        user = cls.query.get(id)
        
        return user

    @classmethod 
    def delete_all(cls):
        return cls.query.delete()


    def create(self):
        db.session.add(self)
        db.session.commit()
        
        return self

    def delete(self):
        db.session.delete(self)
        db.session.commit()


    

class Student(db.Model):
    __tablename__ = 'student'
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship(User)


    def __repr__(self):
        return '<Student %r>' % self.full_name

    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "user_id": self.user_id
        }

    

class Teacher(db.Model):
    __tablename__ = 'teacher'
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), unique=False, nullable=False)
    linkedin = db.Column(db.String(120), unique=True, nullable=True)
    type_of_teacher = db.Column(db.String(120), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship(User)
    


    def __repr__(self):
        return '<Teacher %r>' % self.full_name

    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "user_id": self.user_id
        }

class School(db.Model):
    __tablename__ = 'school'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    img_url = db.Column(db.String(120), unique=False, nullable=False)
    


    def __repr__(self):
        return '<School %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "img_url": self.img_url
        }
class School_User(db.Model):
    __tablename__ = 'school_user'
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),primary_key=True)
    school_id = db.Column(db.Integer, db.ForeignKey('school.id'),primary_key=True)
    user = db.relationship(User)
    school = db.relationship(School)
    
    def __repr__(self):
        return '<School_User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "school_id": self.school_id
        }

class Review_teacher(db.Model):
    __tablename__ = 'review_teacher'
    id = db.Column(db.Integer, primary_key=True)
    dynamsim = db.Column(db.Integer())
    pasion = db.Column(db.Integer())
    practises_example = db.Column(db.Integer())
    near = db.Column(db.Integer())
    date_teacher = db.Column(db.Date(), unique=False, nullable=False)
    more_info = db.Column(db.String(500), unique=False, nullable=True)
    gif = db.Column(db.String(50), unique=False, nullable=True)

    # FALTABA MORE_INFO Y GIF(STRING????)
    # DYNAMSIM, PASION, NEAR... COMO SON VOTADOS PONEMOS TIPO Integer???



    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "dynamsim": self.dynamsim,
            "pasion": self.pasion,
            "practises_example": self.practises_example,
            "near": self.near,
            "date_teacher": self.date_teacher,
            "more_info": self.more_info,
            "gif": self.gif,
            # do not serialize the password, its a security breach
        }

