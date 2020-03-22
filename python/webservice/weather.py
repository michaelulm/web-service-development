#!/usr/bin/env python3
import requests
import json
import urllib.parse

# OpenWeather Map is a Webservice to receive weather information of queried location

# creating request URL 
query_location = 'Kapfenberg, Austria' 	# TODO replace with your location
api_key = '<your-api-key>'				# TODO replace with your api key, just register at https://openweathermap.org/
url = 'https://api.openweathermap.org/data/2.5/weather?q=' + urllib.parse.quote(query_location) + '&units=metric&APPID=' + api_key

# Request
request = requests.get(url)

# Response
response = request.json()

# raw output
#print(response)	

# Handling Response with a simple pretty output 
print( json.dumps(response, indent=2) )
print( "Current temperature: {}°C".format( response["main"]["temp"] ) )