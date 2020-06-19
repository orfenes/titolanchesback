const express = require('express');

const port = 80;
const app = express();
const allowCors = require('./cors');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(allowCors);

app.listen(80);
module.exports = app;

