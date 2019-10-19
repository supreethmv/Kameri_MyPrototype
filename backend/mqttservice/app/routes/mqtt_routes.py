from flask_restful import Resource
from flask import request
from app import api, mqtt_data
from app.mqttclient.mqtt_consumer import mqtt_data
from app.amqpclient.amqp_consumer import data_consumer
from app.amqpclient.amqp_producer import AmqpProducer


class MqttApi(Resource):
    def get(self):
        return {"mqtt_data": mqtt_data}, 200


api.add_resource(MqttApi, '/api/mqtt/get')


class PikaOut(Resource):
    def get(self):
        return {"mqtt_consumer": data_consumer}, 200


api.add_resource(PikaOut, '/api/mqtt/all')
