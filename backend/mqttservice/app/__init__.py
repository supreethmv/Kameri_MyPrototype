from flask import Flask
from flask_restful import Api
from flask_mqtt import Mqtt
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_jwt_extended import JWTManager
import time

mqtt = Mqtt()
api = Api()
db = SQLAlchemy()
ma = Marshmallow()
jwt = JWTManager()

mqtt_data = []

def create_app(config):
    app = Flask(__name__)

    app.config.from_object(config.DevelopmentConfig)

    db.init_app(app)
    api.init_app(app)
    mqtt.init_app(app)
    ma.init_app(app)
    jwt.init_app(app)

    thread1 = MqttConsumer()
    thread1.daemon = True
    thread1.start()
    
    time.sleep(10)
    thread2 = AmqpConsumer()
    thread2.daemon = True
    thread2.start()

    return app

from app.routes import mqtt_routes
from app.mqttclient import mqtt_consumer
from app.mqttclient.mqtt_consumer import MqttConsumer
from app.amqpclient import amqp_producer
from app.amqpclient.amqp_consumer import AmqpConsumer
