from app import db, ma
from app.models.robot import *
from datetime import datetime

class RobotcommandModel(db.Model):
    __tablename__ = 'robotcommand_model'
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True)
    commandId = db.Column(db.Integer, index=True)
    commandDescription = db.Column(db.String(64), index=True)
    commandName = db.Column(db.String(64), index=True)
    value = db.Column(db.Integer, index=True)
    robot_uuid = db.Column(db.String(64), index=True)
    created_command = db.Column(db.DateTime, default=datetime.utcnow, load_only = True)

    def __init__(self, commandId, commandDescription, commandName, value, robot_uuid):
        self.commandId = commandId
        self.commandDescription = commandDescription
        self.commandName = commandName
        self.value = value
        self.robot_uuid = robot_uuid

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()


class RobotcommandSchema(ma.ModelSchema):

    class Meta:
        model = RobotcommandModel
        # dumpy_only = ("commandId", "commandDescription", "commandName", "robot_uuid",)        
        # fields = ('name',)
