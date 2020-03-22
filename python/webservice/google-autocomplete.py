#!/usr/bin/env python3
import requests
from requests.exceptions import HTTPError

# Google Autocomplete Webservice is perfect for a quick demonstration of a Webservice 

# creating specific URL with e.g. the search term webservice
# go to https://www.google.at/, type 'webservice' in the searchfield and you will receive the same results like with this script
search = "webservice"
google_auto_complete_url = "http://google.com/complete/search?hl=de&output=firefox&q="+search

for url in [google_auto_complete_url]:

	try:
		# send request to url -> in this case the Google Autocomplete Web Service
		response = requests.get(url)

		# If the response was successful, no Exception will be raised
		response.raise_for_status()
	except HTTPError as http_err:
		print(f'HTTP error occurred: {http_err}')
	except Exception as err:
		print(f'Other error occurred: {err}')
	else:
		print('Success!')
		
		# just for debugging purpose
		#print(response.text)
		
		# print out integrated json object 
		#print(response.json()[1])
		
		for autocomplete in response.json()[1]:
			print(autocomplete)
		