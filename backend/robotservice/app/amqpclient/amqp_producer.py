import threading
import pika
import json
import time


class AmqpProducer(threading.Thread):
    def __init__(self, mqtt_data):
        threading.Thread.__init__(self)
        self.mqtt_data = mqtt_data

    def run(self):
        # time.sleep(10)
        connection = pika.BlockingConnection(
            pika.ConnectionParameters(host='rabbitmq'))
        channel = connection.channel()

        channel.exchange_declare(exchange='hello', exchange_type='fanout')

        message = json.dumps(self.mqtt_data)

        channel.basic_publish(exchange='hello', routing_key='', body=message)

        connection.close()
