from app import mqtt
import threading
from app.amqpclient.amqp_producer import AmqpProducer
import json


mqtt_data = []


class MqttConsumer(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self)

    def run(self):

        @mqtt.on_connect()
        def handle_connect(client, userdata, flags, rc):
            mqtt.subscribe('kameri/')

        @mqtt.on_message()
        def handle_mqtt_message(client, userdata, message):
            mqtt = message.payload.decode()

            data = {
                "topic": message.topic,
                "payload": json.loads(mqtt)
            }
            SendAmqp(data)

        def SendAmqp(data):
            mqtt_data.append(data)
            t = AmqpProducer(data)
            t.daemon = True
            t.start()
