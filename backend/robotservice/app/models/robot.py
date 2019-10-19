from app import db, ma
import uuid
from app.models.robot_command import *


class RobotModel(db.Model):
    __tablename__ = 'robot_model'
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True)
    uuid = db.Column(db.String, index=True)
    description = db.Column(db.String(64), index=True)

    def __init__(self, description):
        self.uuid = uuid.uuid4().hex
        self.description = description

    @classmethod
    def find_by_uuid(cls, uuid):
        return cls.query.filter_by(uuid=uuid).first()

    @classmethod
    def find_all_robots(cls):
        return cls.query.all()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()


class RobotSchema(ma.ModelSchema):
    class Meta:
        model = RobotModel
        # fields = ('uuid', 'first_name', 'last_name', 'email', 'organisation', )
