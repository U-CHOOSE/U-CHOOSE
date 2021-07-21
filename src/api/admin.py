  
import os
from flask_admin import Admin
from .models import db,User,User_teacher,User_student,School,User_school
# , Review_teacher
from flask_admin.contrib.sqla import ModelView
# User_student_school,User_teacher_school
def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    # admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(School, db.session))
    admin.add_view(ModelView(User_school, db.session))
    admin.add_view(ModelView(User_student, db.session))
    admin.add_view(ModelView(User_teacher, db.session))
    admin.add_view(ModelView(User, db.session))
    # admin.add_view(ModelView(Review_teacher, db.session))
    # admin.add_view(ModelView(User_teacher_school, db.session))
    # admin.add_view(ModelView(User_student_school, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))