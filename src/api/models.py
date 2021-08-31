from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Table, Column, Integer, ForeignKey, String, DateTime, Date, Time, Float
db = SQLAlchemy()



db = SQLAlchemy()

class BaseModel():
    @classmethod
    def get_all(cls):
        return cls.query.all()
        

    @classmethod
    def get_one_by_id(cls,model_id):
        return cls.query.filter_by(id = model_id).first()

    @classmethod
    def get_one_by_id(cls,model_id):
        return cls.query.filter_by(id = model_id).first()


    @classmethod 
    def delete_all(cls):
        return cls.query.delete()

    @classmethod 
    def add(self):
        db.session.add(self)
        db.session.commit()


class User(db.Model,BaseModel):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.VARCHAR, unique=True)
    last_name = db.Column(db.VARCHAR, unique=True)
    email = db.Column(db.VARCHAR, unique=True)
    _password = db.Column(db.VARCHAR)
    img = db.Column(db.VARCHAR,nullable=True,default="https://res.cloudinary.com/braulg/image/upload/v1624454265/airfaohxepd3ncf5tnlf.png")
    promo = db.Column(db.Boolean, default=False)
    student = db.relationship("Student", back_populates="user")
    teacher = db.relationship("Teacher", back_populates="user")

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):

        return {
            "id": self.id,
            "first_name":self.first_name,
            "last_name":self.last_name,
            "email": self.email,
            "img":self.img,
        }
            
        
    def put_with_json(self,json):

        print(json)
        user_teacher = User_teacher.get_by_user_id(self.id)
        if json["full_name"]:
            self.full_name = json["full_name"]
        if json["email"]:
            self.email = json["email"]
        if json["_password"]:
            self._password = json["_password"]
        if "type_of_teacher" in json:
            user_teacher.type_of_teacher = json["type_of_teacher"]
        if "linkedin" in json :
            user_teacher.linkedin = json["linkedin"]





    @classmethod
    def add_img(self):
        db.session.add(self)
        db.session.commit()


    @classmethod
    def get_by_id(cls, id):
        user = cls.query.filter_by(id = id).first()
        return user


    @classmethod
    def get_by_email(cls, email):
        user = cls.query.filter_by(email = email).first()
        return user


    @classmethod
    def get_all(cls):
        users = cls.query.all()
        return users

    @classmethod
    def update_single_user(cls, user_data, id):
        user= cls.query.filter_by(id = id).first()
        for key, value in user_data.items():
            setattr(user, key, value)
        db.session.commit()
        return user
    
    
    @classmethod
    def delete(cls, id):
        target = cls.query.filter_by(id = id).first()    
        target.is_active=False     
        db.session.commit()
        return target
        
# tags = db.Table('tags',
#     db.Column('tag_id', db.Integer, db.ForeignKey('tag.id'), primary_key=True),
#     db.Column('page_id', db.Integer, db.ForeignKey('page.id'), primary_key=True)
# )

# class Page(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     tags = db.relationship('Tag', secondary=tags, lazy='subquery',
#         backref=db.backref('pages', lazy=True))

# class Tag(db.Model):
#     id = db.Column(db.Integer, primary_key=True)        
class Teacher(db.Model):
    __tablename__ = 'user_teacher'
    id = db.Column(db.Integer, primary_key=True)
    type_of_teacher = db.Column(db.VARCHAR)
    linkedin = db.Column(db.VARCHAR)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    review_teacher = db.relationship("Review_teacher")

    # school_teacher = db.relationship("User_teacher_school",back_populates = "user_teacher")
            
    def __repr__(self):
        return '<Teacher %r>' % self.id

    def serialize(self):
        user = User.get_by_id(self.user_id)
        return {
            "id": self.id,
            "user_id":self.user_id,
            "type_of_teacher": self.type_of_teacher,
            "linkedin": self.linkedin,
            "sign_completed": user.sign_completed,
            "img":user.img,
            "is_student": user.is_student,
            "email": user.email,
            "full_name": user.full_name,
            "promo": user.promo
        }

    def add(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_by_user_id(cls, user):
        user_company = cls.query.filter_by(user_id=user).first()
        return user_company

    @classmethod
    def get_by_id(cls, id):
        user = cls.query.filter_by(id = id).first()
        return user

    @classmethod    
    def update_teacher_user(cls, user_data, id):
        user= cls.query.filter_by(user_id = id).first()
        user.company_teacher= user_data["teacher_id"]
        db.session.commit()  
        return user 

    def put_with_json_teacher(self,json):
        if json["linkedin"]:
            self.linkedin = json["linkedin"]
        if json["type_of_teacher"]:
            self.type_of_teacher = json["type_of_teacher"]
        

    @classmethod
    def get_all(cls):
        users = cls.query.all()
        return users

class Student(db.Model):
    __tablename__ = 'student'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
            
    def __repr__(self):
        return '<User_teacher %r>' % self.id

    def serialize(self):
        user = User.get_by_id(self.user_id)
        return {
            "id": self.id,
            "user_id":self.user_id,
            "is_student": user.is_student,
            "email": user.email,
            "full_name": user.full_name,
            "promo": user.promo,
            "img" : user.img
        }

    def add(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_by_user_id(cls, user):
        user_company = cls.query.filter_by(user_id=user).first()
        return user_company

    @classmethod
    def get_by_id(cls, id):
        user = cls.query.filter_by(id = id).first_or_404()
        return user

    @classmethod    
    def update_teacher_student(cls, user_data, id):
        user= cls.query.filter_by(user_id = id).first()
        user.company_teacher= user_data["student_id"]
        db.session.commit()  
        return user

class School(db.Model):
    __tablename__ = 'school'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    img = db.Column(db.String, unique=False, nullable=False)
    location = db.Column(db.String, unique=False, nullable=False)
    user = db.relationship("User", secondary="user_school")


    def __repr__(self):
        return '<School %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "img": self.img
        }

    @classmethod
    def get_by_id(cls, id):
        user = cls.query.filter_by(id = id).first()
        return user
        
    @classmethod
    def get_all(cls):
        schools = cls.query.all()
        return schools

    def set_with_json(self,json):
        self.name = json["name"]
        self.img = json["img"]
    
    def add(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_id_from_name(cls, school_name):
        school = cls.query.filter_by(name=school_name).first()
        return school.id
        
class User_school(db.Model):
    __tablename__ = 'user_school'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    school_id = db.Column(db.Integer, db.ForeignKey('school.id'))
    school = db.relationship('School', backref=db.backref("user_school", cascade="all, delete-orphan"))
    user = db.relationship("User", backref=db.backref("user_school", cascade="all, delete-orphan"))


#   user = relationship(User, backref=backref("orders", cascade="all, delete-orphan"))
#     product = relationship(Product, backref=backref("orders", cascade="all, delete-orphan"))

    def __repr__(self):
        return '<User_school %r>' % self.school_id

    def serialize(self):
        user = User.get_by_id(self.user_id)
        school = School.get_by_id(self.school_id)
        return {
            "id": self.id,
            "school_id": self.school_id,
            "user_id": self.user_id,
            # "full_name": user.full_name,
            # "name":school.name

        }

    def add(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_by_user_id(cls, user):
        user_company = cls.query.filter_by(user_id=user).first()
        return user_company


class Review_teacher(db.Model):
    __tablename__ = 'review_teacher'
    id = db.Column(db.Integer, primary_key=True)
    dynamsim = db.Column(db.Integer())
    pasion = db.Column(db.Integer())
    practises_example = db.Column(db.Integer())
    near = db.Column(db.Integer())
    date_teacher = db.Column(db.Integer(), unique=False, nullable=False)
    more_info = db.Column(db.String(500), unique=False, nullable=True)
    teacher_id = db.Column(db.Integer, db.ForeignKey('user_teacher.id'))
    user_teacher = db.relationship("User_teacher")

    def __repr__(self):
        return '<Review_teacher %r>' % self.id
    
    def serialize(self):
        return {
            "teacher_id": self.teacher_id,
            "dynamsim": self.dynamsim,
            "pasion": self.pasion,
            "practises_example": self.practises_example,
            "near": self.near,
            "date_teacher": self.date_teacher,
            "more_info": self.more_info,
            # "user_teacher": list(map(lambda x: x.serialize(), self.user_teacher))
            # si quiero traer el nombre de teacher??
        }
        
    def add(self):
        db.session.add(self)
        db.session.commit()
    
    @classmethod
    def get_all(cls):
        review_teachers = cls.query.all()
        return review_teachers

    @classmethod
    def get_by_id(cls,model_id):
        return cls.query.filter_by(id = model_id).first()
    
    @classmethod
    def get_by_id(cls, id):
        reviews = cls.query.filter_by(id = id).first_or_404()
        return reviews