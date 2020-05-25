#!/usr/bin/env python
import pika

# init connection to RabbitMQ
connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

# declare for automatic creation current queue
channel.queue_declare(queue='simple-queue')


def callback(ch, method, properties, body):
	# use decode, otherwise the output would be >>> [x] Received b'Hello World!'
	print(" [x] Received %r" % body.decode('UTF-8')) 
	

# consume new messages of definited queue, will call each time callback method
channel.basic_consume(queue='simple-queue',
				  auto_ack=True,
				  on_message_callback=callback)
				  
print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()