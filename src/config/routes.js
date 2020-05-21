
const express = require('express');

module.exports = (app) => {
  const router = express.Router();

  const Client = require('../api/client/clientService');
  Client.register(app, '/api/clients');

}
