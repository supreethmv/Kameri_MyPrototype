from flask_restful import Resource
from flask import request
from app import api
from flask_jwt_extended import (
    get_jwt_identity,
    get_jwt_claims,
    jwt_required,
    get_raw_jwt
)
from app.models.user import UserSchema, UserModel
from app.models.organisation import OrganisationModel, OrganisationSchema

user_schema = UserSchema()
user_schema_list = UserSchema(many=True)


class User(Resource):
    @jwt_required
    def get(self, uuid):
        user = UserModel.find_by_uuid(uuid)

        if user:
            return {"user": user_schema.dump(user)}, 200

        return {"message": "No user found"}, 404

    @jwt_required
    def put(self, uuid):
        user = UserModel.find_by_uuid(uuid)

        if user:
            return {"user": user_schema.dump(user)}, 200

        return {"message": "No user found"}, 404

    @jwt_required
    def delete(self, uuid):
        user = UserModel.find_by_uuid(uuid)

        if user:
            return {"user": user_schema.dump(user)}, 200

        return {"message": "No user found"}, 404


api.add_resource(User, '/api/auth/user/<uuid>')


class Users(Resource):
    @jwt_required    
    def get(self):
        return {"users": user_schema_list.dump(UserModel.find_all_users())}


api.add_resource(Users, '/api/auth/users')
