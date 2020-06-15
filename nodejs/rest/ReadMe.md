# REST Web Service Example

To fit the requirements for **Web Service Development** you have to combine both examples of [WebSocket](../websocket) and **REST Web Service**


## First Steps
install current dependencies

    npm install

start WebSocket Server

	node server.js

go to your Browser and open [simple-ui.html](ui/simple-ui.html)

## Quick Overview about REST Structure

depending on the REST example of notes management, we will take a quick look at important relations between REST, HTTP and SQL. 

| 	URL		 | 	HTTP Verb	|   	CRUD 	|	SQL		|	comment 	   		|
|------------|--------------|---------------|-----------|-----------------------|
| /notes	 | POST 		| 	CREATE		|	INSERT	| insert new note  		|
| /notes     | GET 			| 	READ		|	SELECT	| read **all** notes	|
| /notes/1   | GET 			| 	READ		|	SELECT	| read **one** note 	|
| /notes/1	 | PUT 			| 	UPDATE		|	UPDATE	| update **one** note	|
| /notes/1	 | DELETE		| 	DELETE		|	DELETE	| removes **one** note  |




## References

Node.js - Das umfassende Handbuch

### useful links

- CORS [Plugin Firefox](https://addons.mozilla.org/de/firefox/addon/cors-everywhere/) for enable / disable CORS in your browser 
