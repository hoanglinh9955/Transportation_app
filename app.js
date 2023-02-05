const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const mysql = require("mysql");
const config = require('./config');

const app = express();

app.listen(config.port, () => {
    console.log('Server is listening on http://localhost:' + config.port)
})