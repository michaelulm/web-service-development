#!/usr/bin/env python
import pika

# init connection to RabbitMQ
connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

# declare for automatic creation current queue
channel.queue_declare(queue='simple-queue')

# sending message to RabbitMQ to current queue
channel.basic_publish(exchange='',
                      routing_key='simple-queue',
                      body='Hello World!')
					  
print(" [x] Sent 'Hello World!'")
connection.close()