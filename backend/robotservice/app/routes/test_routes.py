from flask_restful import Resource
from flask import request
from app import api
from app.amqpclient.amqp_consumer import data_amqpconsumer
from app.mqttclient.mqtt_producer import producer_data


class PikaOut(Resource):
    def get(self):
        return {"mqtt_consumer": data_amqpconsumer}, 200


api.add_resource(PikaOut, '/api/robot/all')


class MqttProducer(Resource):
    def get(self):
        return {"producer_data": producer_data}, 200


api.add_resource(MqttProducer, '/api/robot/producer')