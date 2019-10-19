from app import mqtt
import threading
import json

producer_data = []


class MqttProducer(threading.Thread):
    def __init__(self, mqtt_data):
        threading.Thread.__init__(self)
        self.mqtt_data = mqtt_data

    def create_topic(self, data):

        dict_data = json.loads(data)
        robot_uuid = dict_data["payload"]["robot_uuid"]

        topic = 'kameri/data/mqtt/out/' + robot_uuid

        return topic

    def run(self):

        topic = self.create_topic(self.mqtt_data)

        # producer_data.append(dic_data["payload"])

        mqtt.publish(topic, self.mqtt_data)

        # try:
        #     mqtt.publish(topic, self.mqtt_data)

        # except:
        #     mqtt.publish('kameri/error', "error")
