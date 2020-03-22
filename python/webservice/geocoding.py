#!/usr/bin/env python3
import requests
import json
import urllib.parse

# Opencagedata Webservice is easy to use to convert any Location to Geo-Information with Longitude and Latitude, and a lot of information about queried location

# creating request URL 
query_location = 'Kapfenberg, Austria' 	# TODO replace with your location
api_key = '<your-api-key>'				# TODO replace with your api key, just register at https://opencagedata.com
url = 'https://api.opencagedata.com/geocode/v1/json?q=' + urllib.parse.quote(query_location) + '&key=' + api_key

# Request
request = requests.get(url)

# Response
response = request.json()

# raw output
#print(response)	

# Handling Response with a simple pretty output 
print( json.dumps(response, indent=2) )