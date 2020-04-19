const express = require('express'); // TODO
const bodyParser = require('body-parser'); // TODO
const notesRouter = require('./notes');

// Optional. You will see this name in eg. 'ps' or 'top' command
process.title = 'node-rest';

// enable cors for using REST from other applications
var cors = require('cors');
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/notes', notesRouter);

app.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
