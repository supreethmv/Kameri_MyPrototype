from flask_restful import Resource
from flask import request
from app import api
from app.models.device import DeviceSchema, DeviceModel
from flask_jwt_extended import (create_access_token,
                                create_refresh_token,
                                jwt_refresh_token_required,
                                jwt_required,
                                )

device_schema = DeviceSchema()
device_schema_list = DeviceSchema(many=True)


class Device(Resource):
    # @jwt_required
    def get(self, uuid):
        device = DeviceModel.find_by_uuid(uuid)

        if device:
            return {"device": device_schema.dump(device)}, 200

        return {"message": "No device found"}, 404

    # @jwt_required
    def put(self, uuid):
        device = DeviceModel.find_by_uuid(uuid)

        if device:
            return {"device": device_schema.dump(device)}, 200

        return {"message": "No device found"}, 404

    # @jwt_required
    def delete(self, uuid):
        device = DeviceModel.find_by_uuid(uuid)

        if device:
            return {"device": device_schema.dump(device)}, 200

        return {"message": "No device found"}, 404


api.add_resource(Device, '/api/device/<uuid>')


class DeviceList(Resource):
    # @jwt_required
    def get(self):
        return {"users": device_schema_list.dump(DeviceModel.find_all_devices())}


api.add_resource(DeviceList, '/api/device/devices')
