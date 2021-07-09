"""empty message

Revision ID: e6496157c396
Revises: 
Create Date: 2021-07-09 17:40:38.647397

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e6496157c396'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('student',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=50), nullable=False),
    sa.Column('img', sa.String(length=250), nullable=False),
    sa.Column('is_logged', sa.Boolean(), nullable=False),
    sa.Column('promo', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('teacher',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=50), nullable=False),
    sa.Column('linkedin', sa.String(length=120), nullable=True),
    sa.Column('type_of_teacher', sa.String(length=120), nullable=False),
    sa.Column('is_logged', sa.Boolean(), nullable=False),
    sa.Column('promo', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('school',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('img', sa.String(length=250), nullable=False),
    sa.Column('students', sa.Integer(), nullable=True),
    sa.Column('teachers', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['students'], ['student.id'], ),
    sa.ForeignKeyConstraint(['teachers'], ['teacher.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('school')
    op.drop_table('teacher')
    op.drop_table('student')
    # ### end Alembic commands ###
