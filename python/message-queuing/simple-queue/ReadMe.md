# Message Queuing Simple Queue
quick demonstration of Simple Queue and first start with [RabbitMQ](https://www.rabbitmq.com)

Those two code Files (consumer.py and producer.py) are basically implementatd with Tutorial [https://www.rabbitmq.com/tutorials/tutorial-one-python.html](https://www.rabbitmq.com/tutorials/tutorial-one-python.html)

## Basic Concept of Message Queuing ##

Those two files show the basic concept of
- **Producer** sent Message to
- **Queue** (with RabbitMQ)
- **Consumer** receive from Queue


![](https://www.rabbitmq.com/img/tutorials/python-one-overall.png)

with the concept of RabbitMQ as a Messge Broker you are able to receive any message, in many cases a JSON String. So the processes are decoupled from receiving message / data. The Consumer / Worker is polling messages / data from queue and will complete the process of e.g. receiving and storing data.

## Send with Producer ##
![](https://www.rabbitmq.com/img/tutorials/sending.png)

## Receive with Consumer ##
also called Worker in some cases
![](https://www.rabbitmq.com/img/tutorials/receiving.png)