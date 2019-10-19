from flask_restful import Resource
from flask import request
from app import api, jwt
from app.models.device import DeviceSchema, DeviceModel
from flask_jwt_extended import (create_access_token,
                                create_refresh_token,
                                jwt_refresh_token_required,
                                get_jwt_identity,
                                get_jwt_claims,
                                jwt_required,
                                get_raw_jwt
                                )

device_schema = DeviceSchema()
device_schema_list = DeviceSchema(many=True)


class RegisterDevice(Resource):
    def post(self):
        try:
            data = request.get_json(silent=True)

            device = device_schema.load(data)
            device.save_to_db()

            return {"device": device_schema.dump(device)}, 200
        except:
            return {"message": "something went wrong"}, 400


api.add_resource(RegisterDevice, '/api/device/register')


@jwt.user_claims_loader
def add_claims_to_access_token(device):
    device = DeviceModel.find_by_uuid(device)
    return {
        'robot_uuid': device.robot_uuid,
        'device_uuid': device.uuid
    }


class LoginDevice(Resource):
    def post(self):
        data = request.get_json(silent=True)

        try:
            device = DeviceModel.find_by_uuid(data["device_uuid"])

            if device:
                if device.check_password(data["password"]):
                    token = create_access_token(
                        identity=device.uuid, fresh=True)

                    return {"token": token}, 200

                return {"message": "Wrong password"}, 401

            return {"message": "No device found"}, 401

        except:
            return {"message": "Cannot write Data"}, 500


api.add_resource(LoginDevice, '/api/device/auth')


class ConnectDevice(Resource):
    def put(self, uuid):
        data = request.get_json(silent=True)

        try:
            device = DeviceModel.find_by_uuid(uuid)
            device.robot_uuid = data["robot_uuid"]
            device.save_to_db()
        except:
            return {"message": "no device found"}

        return {"device": f'device connected to robot_uuid {data["robot_uuid"]}'}, 200


api.add_resource(ConnectDevice, '/api/device/connect/<uuid>')


class DisonnectDevice(Resource):
    def put(self, uuid):
        try:
            device = DeviceModel.find_by_uuid(uuid)
            device.robot_uuid = None
            device.save_to_db()
        except:
            return {"message": "no device found"}, 400

        return {"device": 'device disconnected!'}, 200


api.add_resource(DisonnectDevice, '/api/device/disconnect/<uuid>')
