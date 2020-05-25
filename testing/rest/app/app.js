const express = require("express");
const cors = require("cors");
const notesRouter = require("./notes");

process.title = "node-rest";

const app = express();
// use cors
app.use(cors());
// instead of body parser, you can also use build in functionality of express (based on body-parse package)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/notes", notesRouter);

// export app instead of starting, to able supertest to start multiple express-apps for parallel tests
module.exports = app;
