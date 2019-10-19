from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_jwt_extended import JWTManager


api = Api()
db = SQLAlchemy()
ma = Marshmallow()
jwt = JWTManager()

def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config.DevelopmentConfig)

    db.init_app(app)
    api.init_app(app)
    ma.init_app(app)
    jwt.init_app(app)

    return app

from app.routes import auth, user
from app.models import user, organisation