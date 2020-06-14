const express = require('express');

// JSON Web Tokens (JWT) parts
const jwt = require('jsonwebtoken'); // to create and verify json web tokens
const bodyParser = require('body-parser'); // simple parsing requests body
const bcrypt = require('bcrypt'); // to create and compare hash values

const cors = require('cors');

// Web Socket parts
const app = express(); // init express Server
var expressWs = require('express-ws')(app); // init Web Socket Module for express
var aWss = expressWs.getWss('/'); // to get all clients

// enabling body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// just debug purpose to create new hash
// TODO replace password at your app, currently needed to create hashes for testing purpose
bcrypt.hash("mysecretpassword!Rulez", 10, function(err, hash){
    // e.g. store hash to database
    console.log(hash);
});

// simple welcome message for testing API
app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});

// post request will be handled by verifyToken() first
// afterwards token will be verified before doing real work
app.post('/api/posts', verifyToken, (req, res) => {

    console.log(req.token);

    // TODO change 'secretkey' at your own implementation, keep it secret !
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            // forbidden
            res.sendStatus(403);
        } else {

            // token verified and allowed to do e.g. create new post

            // simple demo output
            // TODO add some operations at your implementation
            res.json({
                message: 'Post created...',
                authData
            });
        }
    });
});

// do a simple login and answer with matching bearer token for requesting user
app.post('/api/login', (req, res) => {
    // Mock user
    // TODO replace with e.g. database with user credentials or any other User Management
    // important, only store hashed password values in your user database
    const user = {
        id: 1,
        username: 'michaeulm',
        email: 'michael.ulm@fh-joanneum.at',
        password: '$2b$10$DoxnhecVPRrpAroysvp5wOn50RuAsTRf2Z.5R.AVMCbtO7xzapKVW' // mysecretpassword!Rulez
    }

    // debugging purpose
    // console.log(req);
    // console.log(req.body.password);
    console.log(req.body.username);

    bcrypt.compare(req.body.password, user.password, function(err, result){
        if(result){
            // password hashes are matching
            jwt.sign({user}, 'secretkey', { expiresIn: '3600s' }, (err, token) => {
                res.json({
                    token
                });
            });
        } else{
            // no matching passwords
            res.sendStatus(403);
        }
    });

});

// important FORMAT OF TOKEN in Request Header
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {

    // debug purpose
    console.log("verify token");
    // console.log(req.headers);

    // Get auth header value
    const bearerHeader = req.headers['authorization'];

    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // console.log(bearer);

        // Get token from array
        const bearerToken = bearer[1];
        // Set the token -> part of the header -> authorization: Bearer <access_token>
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

app.ws('/', function(ws, req) {
    ws.on('message', function(msg) {

        console.log("onmessage");
        console.log(msg);

        // parse incoming message to a JSON object
        var msgObj = JSON.parse(msg);

        // debug purpose
        console.log(msgObj.text);
        console.log(msgObj.token);

        // create new object to send to all clients
        var obj = {
            time: (new Date()).getTime(),
            text: msgObj.text
        };

        // create json string to send over websocket to client
        var json = JSON.stringify({type: 'message', data: obj});

        jwt.verify(msgObj.token, 'secretkey', function (err, decoded) {
            if(err) {
                // forbidden
                // TODO send error message
            } else {
                // token verified and allowed to do e.g. send message to all users
                aWss.clients.forEach(function (client) {
                    client.send(json);
                });
            }
        });

    });
    console.log('socket', req.testing);
});

app.listen(5000, () => console.log('Server started on port 5000'));


