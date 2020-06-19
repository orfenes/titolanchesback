const express = require('express');

const port = 3003;
const app = express();
const allowCors = require('./cors');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(allowCors);

app.listen(port);
module.exports = app;

