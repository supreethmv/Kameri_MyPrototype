"""empty message

Revision ID: 870f34372f6f
Revises: 
Create Date: 2019-10-04 10:29:17.050728

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '870f34372f6f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('robotcommand_model',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('uuid', sa.String(), nullable=True),
    sa.Column('description', sa.String(length=64), nullable=True),
    sa.Column('robot_uuid', sa.String(length=64), nullable=True),
    sa.Column('orga_uuid', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_robotcommand_model_description'), 'robotcommand_model', ['description'], unique=False)
    op.create_index(op.f('ix_robotcommand_model_orga_uuid'), 'robotcommand_model', ['orga_uuid'], unique=False)
    op.create_index(op.f('ix_robotcommand_model_robot_uuid'), 'robotcommand_model', ['robot_uuid'], unique=False)
    op.create_index(op.f('ix_robotcommand_model_uuid'), 'robotcommand_model', ['uuid'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_robotcommand_model_uuid'), table_name='robotcommand_model')
    op.drop_index(op.f('ix_robotcommand_model_robot_uuid'), table_name='robotcommand_model')
    op.drop_index(op.f('ix_robotcommand_model_orga_uuid'), table_name='robotcommand_model')
    op.drop_index(op.f('ix_robotcommand_model_description'), table_name='robotcommand_model')
    op.drop_table('robotcommand_model')
    # ### end Alembic commands ###
