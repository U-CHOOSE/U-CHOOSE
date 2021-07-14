from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Table, Column, Integer, ForeignKey, String, DateTime, Date, Time, Float
db = SQLAlchemy()


db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.VARCHAR, unique=True)
    email = db.Column(db.VARCHAR, unique=True)
    _password = db.Column(db.VARCHAR)
    is_active = db.Column(db.Boolean, default=True)
    image = db.Column(db.VARCHAR)
    promo = db.Column(db.Boolean, default=True)
    is_student = db.Column(db.Boolean)
    user_student = db.relationship('User_student', cascade="all, delete", lazy=True)
    user_teacher = db.relationship("User_teacher", cascade="all, delete", lazy=True)


    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "full_name":self.full_name,
            "is_active": self.is_active,
            "email": self.email,
            "is_student":self.is_student
            
        }

    @classmethod
    def add(cls,email,_password,is_student,promo,full_name):
        user = cls(
            email=email, 
            _password=_password,
            is_student=is_student,
            promo=promo,
            full_name = full_name, 
            
        )
        db.session.add(user)
        db.session.commit()
        return user.id

    @classmethod
    def get_by_id(cls, id):
        user = cls.query.filter_by(id = id).first()
        return user
    

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
        
        
class User_teacher(db.Model):
    __tablename__ = 'user_teacher'
    id = db.Column(db.Integer, primary_key=True)
    type_of_teacher = db.Column(db.VARCHAR)
    linkedin = db.Column(db.VARCHAR)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    # school_teacher = db.relationship("User_teacher_school",back_populates = "user_teacher")
            
    def __repr__(self):
        return '<User_teacher %r>' % self.id

    def serialize(self):
        user = User.get_by_id(self.user_id)
        return {
            "id": self.id,
            "user_id":self.user_id,
            "type_of_teacher": self.type_of_teacher,
            "linkedin": self.linkedin,
            "is_student": user.is_student,
            "email": user.email,
            "full_name": user.full_name,
            "is_active": user.is_active,
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
        user = cls.query.filter_by(id = id).first_or_404()
        return user

    @classmethod    
    def update_teacher_user(cls, user_data, id):
        user= cls.query.filter_by(user_id = id).first()
        user.company_teacher= user_data["teacher_id"]
        db.session.commit()  
        return user 

class User_student(db.Model):
    __tablename__ = 'user_student'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    # school = db.relationship('User_student_school', back_populates="user_student")
            
    def __repr__(self):
        return '<User_teacher %r>' % self.id

    def serialize(self):
        user = User.get_by_id(self.user_id)
        return {
            "id": self.id,
            "user_id":self.id,
            "is_student": user.is_student,
            "email": user.email,
            "full_name": user.full_name,
            "is_active": user.is_active,
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
    img = db.Column(db.String(250), unique=False, nullable=False)


    def __repr__(self):
        return '<Teacher %r>' % self.full_name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }

class User_school(db.Model):
    __tablename__ = 'user_school'
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),primary_key=True)
    school_id = db.Column(db.Integer, db.ForeignKey('school.id'),primary_key=True)
    school = db.relationship('School', cascade="all, delete", lazy=True)
    user = db.relationship("User", cascade="all, delete", lazy=True)



# class User_teacher_school(db.Model):
#     __tablename__ = 'user_teacher_school'
#     id = db.Column(db.Integer, primary_key=True)
#     user_teacher_id = db.Column(db.Integer, db.ForeignKey('User_teacher.id'))
#     user_teacher = db.relationship("User_student", back_populates="school_teacher")



# class Teacher(db.Model,BaseModel):
#     __tablename__ = 'teacher'
#     id = db.Column(db.Integer, primary_key=True)
#     full_name = db.Column(db.String(120), unique=False, nullable=False)
#     email =db.Column(db.String(120), nullable=False)
#     password =db.Column(db.String(50), nullable=False)
#     linkedin = db.Column(db.String(120), unique=False, nullable=True)
#     type_of_teacher = db.Column(db.String(120), unique=False, nullable=False)
#     is_logged=db.Column(db.Boolean, default=False, nullable=False)
#     promo=db.Column(db.Boolean, default=False, nullable=False)
#     schools = db.relationship('School', backref='teacher', lazy=True)


#     def __repr__(self):
#         return '<Teacher %r>' % self.full_name

#     def serialize(self):
#         return {
#             "id": self.id,
#             "full_name": self.full_name,
#             "email": self.email,
#             "linkedin": self.linkedin,
#             "type_of_teacher": self.type_of_teacher,
#             "promo": self.promo,
#             "schools": list(map(lambda x: x.serialize(), self.schools))
#         }
    
#     def create(self):
#         db.session.add(self)
#         db.session.commit()
    
#     def db_delete(self):
#         db.session.delete(self)
#         db.session.commit()


# class School(db.Model,BaseModel):
#     __tablename__ = 'school'
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(120), unique=False, nullable=False)
#     img = db.Column(db.String(250), unique=False, nullable=False)
#     students = db.Column(db.Integer, db.ForeignKey('student.id'))
#     teachers = db.Column(db.Integer, db.ForeignKey('teacher.id'))


#     def __repr__(self):
#         return '<Teacher %r>' % self.full_name

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "students": list(map(lambda x: x.serialize(), self.students)),
#             "teachers": list(map(lambda x: x.serialize(), self.teachers))
#         }

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

