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


class Robot(Resource):
    # @jwt_required
    def get(self, uuid):
        robot = RobotModel.find_by_uuid(uuid)

        if robot:
            return {"robot": robot_schema.dump(robot)}, 200

        return {"message": f'No robot with robot_uuid {uuid} found'}, 404

    @jwt_required
    def delete(self, uuid):
        robot = RobotModel.find_by_uuid(uuid)

        if robot:
            return {"robot": robot_schema.dump(robot)}, 200

        return {"message": f'No robot with robot_uuid {uuid} found'}, 404


api.add_resource(Robot, '/api/robot/<uuid>')


class Robots(Resource):
    # @jwt_required
    def get(self):
        return {"robots": robot_schema_list.dump(RobotModel.find_all_robots())}, 200


api.add_resource(Robots, '/api/robot/robots')
