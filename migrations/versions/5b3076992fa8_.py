"""empty message

Revision ID: 5b3076992fa8
Revises: 
Create Date: 2021-09-13 20:28:30.335086

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5b3076992fa8'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('school',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('img', sa.String(), nullable=False),
    sa.Column('location', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.VARCHAR(), nullable=True),
    sa.Column('email', sa.VARCHAR(), nullable=True),
    sa.Column('_password', sa.VARCHAR(), nullable=True),
    sa.Column('img', sa.VARCHAR(), nullable=True),
    sa.Column('promo', sa.Boolean(), nullable=True),
    sa.Column('is_student', sa.Boolean(), nullable=True),
    sa.Column('sign_completed', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('full_name')
    )
    op.create_table('user_school',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('school_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['school_id'], ['school.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_student',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_teacher',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type_of_teacher', sa.VARCHAR(), nullable=True),
    sa.Column('linkedin', sa.VARCHAR(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('review_teacher',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('dynamsim', sa.Integer(), nullable=True),
    sa.Column('pasion', sa.Integer(), nullable=True),
    sa.Column('practises_example', sa.Integer(), nullable=True),
    sa.Column('near', sa.Integer(), nullable=True),
    sa.Column('date_teacher', sa.Integer(), nullable=False),
    sa.Column('more_info', sa.String(length=500), nullable=True),
    sa.Column('anonymous', sa.Boolean(), nullable=True),
    sa.Column('teacher_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['teacher_id'], ['user_teacher.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('review_teacher')
    op.drop_table('user_teacher')
    op.drop_table('user_student')
    op.drop_table('user_school')
    op.drop_table('user')
    op.drop_table('school')
    # ### end Alembic commands ###
