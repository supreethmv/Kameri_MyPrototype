from flask_restful import Resource
from flask import request
from app import api
from app.models.user import UserSchema, UserModel
from app.models.organisation import OrganisationModel, OrganisationSchema
from flask_jwt_extended import (create_access_token,
                                create_refresh_token,
                                jwt_refresh_token_required,
                                get_jwt_identity,
                                get_jwt_claims,
                                jwt_required,
                                get_raw_jwt
                                )

user_schema = UserSchema()
user_schema_list = UserSchema(many=True)


class Register(Resource):
    def post(self):
        data = request.get_json(silent=True)

        try:
            user = user_schema.load(data)
            user.save_to_db()

        except:
            return {"message": "Cannot write Data"}, 500

        return {"user": user_schema.dump(user)}, 200


api.add_resource(Register, '/api/auth/register')


class Login(Resource):
    def post(self):
        data = request.get_json(silent=True)

        try:
            user = UserModel.find_by_email(data["email"])

            if user:
                if user.check_password(data["password"]):
                    token = create_access_token(identity=user.uuid, fresh=True)

                    return {"token": token, "uuid": user.uuid}, 200

                return {"message": "Wrong password"}, 401

            return {"message": "No user found"}, 401

        except:
            return {"message": "Cannot write Data"}, 500


api.add_resource(Login, '/api/auth/login')
