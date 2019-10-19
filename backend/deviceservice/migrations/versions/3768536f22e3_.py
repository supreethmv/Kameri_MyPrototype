"""empty message

Revision ID: 3768536f22e3
Revises: 870f34372f6f
Create Date: 2019-10-06 11:41:46.084677

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3768536f22e3'
down_revision = '870f34372f6f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('device_model',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('password', sa.String(length=128), nullable=True),
    sa.Column('uuid', sa.String(), nullable=True),
    sa.Column('description', sa.String(length=64), nullable=True),
    sa.Column('robot_uuid', sa.String(length=64), nullable=True),
    sa.Column('orga_uuid', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_device_model_description'), 'device_model', ['description'], unique=False)
    op.create_index(op.f('ix_device_model_orga_uuid'), 'device_model', ['orga_uuid'], unique=False)
    op.create_index(op.f('ix_device_model_robot_uuid'), 'device_model', ['robot_uuid'], unique=False)
    op.create_index(op.f('ix_device_model_uuid'), 'device_model', ['uuid'], unique=False)
    op.drop_index('ix_robotcommand_model_description', table_name='robotcommand_model')
    op.drop_index('ix_robotcommand_model_orga_uuid', table_name='robotcommand_model')
    op.drop_index('ix_robotcommand_model_robot_uuid', table_name='robotcommand_model')
    op.drop_index('ix_robotcommand_model_uuid', table_name='robotcommand_model')
    op.drop_table('robotcommand_model')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('robotcommand_model',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('uuid', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('description', sa.VARCHAR(length=64), autoincrement=False, nullable=True),
    sa.Column('robot_uuid', sa.VARCHAR(length=64), autoincrement=False, nullable=True),
    sa.Column('orga_uuid', sa.VARCHAR(length=64), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='robotcommand_model_pkey')
    )
    op.create_index('ix_robotcommand_model_uuid', 'robotcommand_model', ['uuid'], unique=False)
    op.create_index('ix_robotcommand_model_robot_uuid', 'robotcommand_model', ['robot_uuid'], unique=False)
    op.create_index('ix_robotcommand_model_orga_uuid', 'robotcommand_model', ['orga_uuid'], unique=False)
    op.create_index('ix_robotcommand_model_description', 'robotcommand_model', ['description'], unique=False)
    op.drop_index(op.f('ix_device_model_uuid'), table_name='device_model')
    op.drop_index(op.f('ix_device_model_robot_uuid'), table_name='device_model')
    op.drop_index(op.f('ix_device_model_orga_uuid'), table_name='device_model')
    op.drop_index(op.f('ix_device_model_description'), table_name='device_model')
    op.drop_table('device_model')
    # ### end Alembic commands ###