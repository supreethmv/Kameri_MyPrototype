from app import db, ma
from datetime import datetime
import uuid
from werkzeug.security import generate_password_hash, check_password_hash


class DeviceModel(db.Model):
    __tablename__ = 'device_model'
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(128))
    uuid = db.Column(db.String, index=True)
    description = db.Column(db.String(64), index=True)
    robot_uuid = db.Column(db.String(64), index=True)
    orga_uuid = db.Column(db.String(64), index=True)

    def __init__(self, password, description, robot_uuid=None, orga_uuid=None):
        self.uuid = uuid.uuid4().hex
        self.password = generate_password_hash(password)
        self.description = description
        self.robot_uuid = robot_uuid or None
        self.orga_uuid = orga_uuid or None

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_uuid(cls, uuid):
        return cls.query.filter_by(uuid=uuid).first()

    @classmethod
    def find_all_devices(cls):
        return cls.query.all()


class DeviceSchema(ma.ModelSchema):

    class Meta:
        model = DeviceModel
        # dumpy_only = ("commandId", "commandDescription", "commandName", "robot_uuid",)
        # fields = ('name',)
