import threading
import pika
import json

data_consumer = []


class AmqpConsumer(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self)

    def run(self):
        connection = pika.BlockingConnection(
            pika.ConnectionParameters(host='rabbitmq'))
        channel = connection.channel()

        channel.exchange_declare(exchange='hello', exchange_type='fanout')

        result = channel.queue_declare(queue='', exclusive=True)
        queue_name = result.method.queue

        channel.queue_bind(exchange='hello', queue=queue_name)

        channel.basic_consume(
            queue=queue_name, on_message_callback=self.callback, auto_ack=True)

        channel.start_consuming()

    def callback(self, ch, method, properties, body):
        msg = json.loads(body)
        data_consumer.append(msg)
