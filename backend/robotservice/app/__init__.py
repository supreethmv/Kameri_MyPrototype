from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_jwt_extended import JWTManager
from flask_mqtt import Mqtt
import time


mqtt = Mqtt()
api = Api()
db = SQLAlchemy()
ma = Marshmallow()
jwt = JWTManager()

def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config.DevelopmentConfig)

    db.init_app(app)
    mqtt.init_app(app)
    api.init_app(app)
    ma.init_app(app)
    jwt.init_app(app)

    time.sleep(10)
    thread1 = AmqpConsumer()
    thread1.daemon = True
    thread1.start()

    return app

from app.routes import robot, robot_command, robot_auth, test_routes
from app.models import robot, robot_command
from app.amqpclient.amqp_consumer import AmqpConsumer
from app.mqttclient import mqtt_producer
