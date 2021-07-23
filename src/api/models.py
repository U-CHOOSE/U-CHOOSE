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
    # is_active = db.Column(db.Boolean, default=True)
    image = db.Column(db.VARCHAR)
    promo = db.Column(db.Boolean, default=False)
    is_student = db.Column(db.Boolean)
    user_student = db.relationship('User_student', cascade="all, delete", lazy=True)
    user_teacher = db.relationship("User_teacher", cascade="all, delete", lazy=True)
    user_school = db.relationship("User_school", cascade="all, delete", lazy=True)


    def __repr__(self):
        return '<User %r>' % self.email

    

    def serialize(self):
        return {
            "id": self.id,
            "full_name":self.full_name,
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
    img = db.Column(db.String, unique=False, nullable=False)


    def __repr__(self):
        return '<School %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }


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
    school = db.relationship('School', cascade="all, delete", lazy=True)
    # user = db.relationship("User", cascade="all, delete", lazy=True)



    def __repr__(self):
        return '<User_school %r>' % self.school_id

    def serialize(self):
        user = User.get_by_id(self.user_id)
        school = School.get_by_id(self.school_id)
        return {
            "id": self.id,
            "school_id": self.school_id,
            "user_id": self.user_id,
            "full_name": user.full_name,
            "name":school.name

        }

    def add(self):
        db.session.add(self)
        db.session.commit()


class Review_teacher(db.Model):
    __tablename__ = 'review_teacher'
    id = db.Column(db.Integer, primary_key=True)
    dynamsim = db.Column(db.Integer())
    pasion = db.Column(db.Integer())
    practises_example = db.Column(db.Integer())
    near = db.Column(db.Integer())
    date_teacher = db.Column(db.Date(), unique=False, nullable=False)
    more_info = db.Column(db.String(500), unique=False, nullable=True)
    teacher_id = db.Column(db.Integer, db.ForeignKey('user_teacher.id'))
    user_teacher = db.relationship(User_teacher)

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
            # si quiero traer el nombre de teacher??
        }
        
    def add(self):
        db.session.add(self)
        db.session.commit()
    
    @classmethod
    def get_all(cls):
        review_teachers = cls.query.all()
        return review_teachers

     