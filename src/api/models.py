from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from sqlalchemy.dialects.postgresql import VARCHAR, ARRAY
from sqlalchemy.ext.hybrid import hybrid_property
from werkzeug.security import generate_password_hash

db = SQLAlchemy()


class BaseModel():
    @classmethod
    def get_all(cls):
        return cls.query.all()


    @classmethod
    def get_by_email(cls, email):
        user = cls.query.filter_by(email=email).one_or_none()

    @classmethod
    def get_one_by_id(cls,model_id):
        return cls.query.filter_by(id = model_id).first()


    @classmethod 
    def delete_all(cls):
        return cls.query.delete()


class Student(db.Model,BaseModel):
    __tablename__ = 'student'
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), unique=False, nullable=False)
    email =db.Column(db.String(120), nullable=False)
    password =db.Column(db.String(50), nullable=False)
    img =  db.Column(db.String(250), nullable=True)
    is_logged=db.Column(db.Boolean, default=False, nullable=False)
    promo=db.Column(db.Boolean, default=False, nullable=False)
    # schools = db.relationship('School', backref='student', lazy=True)


    def __repr__(self):
        return '<Student %r>' % self.full_name

    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            "is_logged": self.is_logged,
            "promo" : self.promo
            # "schools": list(map(lambda x: x.serialize(), self.schools))
            
        }

    def create(self):
        db.session.add(self)
        db.session.commit()

    def db_delete(self):
        db.session.delete(self)
        db.session.commit()

    def set_with_json(self,json):
        self.full_name = json["full_name"]
        self.email = json["email"]
        self.is_logged = json["is_logged"]
        self.promo = json["promo"]
        self.password = json ["password"]
        self.img = json ["img"]
        # self.schools = json["schools"]

    def put_with_json(self,json):
        if json["full_name"]:
            self.name = json["full_name"]
        if json["password"]:
            self.eye_color = json["password"]
        if json["img"]:
            self.eye_color = json["img"]
        
        

class Teacher(db.Model,BaseModel):
    __tablename__ = 'teacher'
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), unique=False, nullable=False)
    email =db.Column(db.String(120), nullable=False)
    password =db.Column(db.String(50), nullable=False)
    linkedin = db.Column(db.String(120), unique=False, nullable=True)
    type_of_teacher = db.Column(db.String(120), unique=False, nullable=False)
    is_logged=db.Column(db.Boolean, default=False, nullable=False)
    promo=db.Column(db.Boolean, default=False, nullable=False)
    # schools = db.relationship('School', backref='teacher', lazy=True)


    def __repr__(self):
        return '<Teacher %r>' % self.full_name

    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "user_id": self.user_id
            # "schools": list(map(lambda x: x.serialize(), self.schools))
        }
    
    def create(self):
        db.session.add(self)
        db.session.commit()
    
    def db_delete(self):
        db.session.delete(self)
        db.session.commit()


class School(db.Model,BaseModel):
    __tablename__ = 'school'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    img = db.Column(db.String(250), unique=False, nullable=False)
    # students = db.Column(db.Integer, db.ForeignKey('student.id'))
    # teachers = db.Column(db.Integer, db.ForeignKey('teacher.id'))


    def __repr__(self):
        return '<Teacher %r>' % self.full_name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
            # "students": list(map(lambda x: x.serialize(), self.students)),
            # "teachers": list(map(lambda x: x.serialize(), self.teachers))
        }

# class School_Student(db.Model,BaseModel):
#     __tablename__ = 'school'
#     id = db.Column(db.Integer, primary_key=True)
#     student_id = db.Column(db.String(120), unique=False, nullable=False)
#     img= db.Column(db.String(250), unique=False, nullable=False)

#     def __repr__(self):
#         return '<Favorite_Planets %r>' % self.id

#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#             "planet_id":self.planet_id,
#             }

# class School_Teacher(db.Model,BaseModel):
#     __tablename__ = 'school'
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(120), unique=False, nullable=False)
#     img= db.Column(db.String(250), unique=False, nullable=False)
    


#     def __repr__(self):
#         return '<School %r>' % self.name

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "img_url": self.img_url
#         }
# class School_Student(db.Model):
#     __tablename__ = 'school_user'
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'),primary_key=True)
#     school_id = db.Column(db.Integer, db.ForeignKey('school.id'),primary_key=True)
#     user = db.relationship("User")
#     school = db.relationship("School")
    
#     def __repr__(self):
#         return '<School_User %r>' % self.id

#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#             "school_id": self.school_id
#         }

# class Review_teacher(db.Model):
#     __tablename__ = 'review_teacher'
#     id = db.Column(db.Integer, primary_key=True)
#     dynamsim = db.Column(db.Integer())
#     pasion = db.Column(db.Integer())
#     practises_example = db.Column(db.Integer())
#     near = db.Column(db.Integer())
#     date_teacher = db.Column(db.Date(), unique=False, nullable=False)
#     more_info = db.Column(db.String(500), unique=False, nullable=True)
#     gif = db.Column(db.String(50), unique=False, nullable=True)

    # FALTABA MORE_INFO Y GIF(STRING????)
    # DYNAMSIM, PASION, NEAR... COMO SON VOTADOS PONEMOS TIPO Integer???



    # def __repr__(self):
    #     return '<User %r>' % self.id

    # def serialize(self):
    #     return {
    #         "id": self.id,
    #         "dynamsim": self.dynamsim,
    #         "pasion": self.pasion,
    #         "practises_example": self.practises_example,
    #         "near": self.near,
    #         "date_teacher": self.date_teacher,
    #         "more_info": self.more_info,
    #         "gif": self.gif,
    #         # do not serialize the password, its a security breach
    #     }

