from flask_restful import Resource
from flask import request
from app import api
from flask_jwt_extended import (
    get_jwt_identity,
    get_jwt_claims,
    jwt_required,
    get_raw_jwt
)
from app.models.robot import RobotSchema, RobotModel
from app.models.robot_command import RobotcommandModel, RobotcommandSchema

robot_schema = RobotSchema()
robot_schema_list = RobotSchema(many=True)

robotcommand_schema = RobotcommandSchema()
robotcommand_schema_list = RobotcommandSchema(many=True)


class RobotCommand(Resource):
    # @jwt_required
    def post(self):
        json_data = request.get_json()

        if not RobotModel.find_by_uuid(json_data["robot_uuid"]):
            return {"message": f'No robot with robot_uuid {json_data["robot_uuid"]} exist'}, 400

        try:
            robot_command = robotcommand_schema.load(json_data)
            robot_command.save_to_db()

            return {"command": robotcommand_schema.dump(robot_command)}, 200
        except:
            return {"message": "Error while creating robot_command"}, 500


api.add_resource(RobotCommand, '/api/robot/command')
