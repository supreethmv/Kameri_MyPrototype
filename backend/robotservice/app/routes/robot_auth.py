from flask_restful import Resource
from flask import request
from app import api
from flask_jwt_extended import (create_access_token,
                                create_refresh_token,
                                jwt_refresh_token_required,
                                get_jwt_identity,
                                get_jwt_claims,
                                jwt_required,
                                get_raw_jwt
                                )
from app.models.robot import RobotSchema, RobotModel
from app.models.robot_command import RobotcommandModel, RobotcommandSchema

robot_schema = RobotSchema()
robot_schema_list = RobotSchema(many=True)


class RegisterRobot(Resource):
    @jwt_required
    def post(self):
        json_data = request.get_json(silent=True)

        try:
            robot = robot_schema.load(json_data)
            robot.save_to_db()

            return {"robot": robot_schema.dump(robot)}, 200

        except:
            return {"message": "Server Error"}, 500


api.add_resource(RegisterRobot, '/api/robot/register')


class AuthRobot(Resource):
    def post(self):
        json_data = request.get_json(silent=True)

        try:
            robot = RobotModel.find_by_uuid(json_data["robot_uuid"])

            if robot:
                token = create_access_token(identity=robot.uuid, fresh=True)

                return {"token": token}, 200

            return {"message": f'No robot with wobot_uuid {json_data["robot_uuid"]} found'}, 400

        except:
            return {"message": "Cannot write Data"}, 500


api.add_resource(AuthRobot, '/api/robot/auth')
