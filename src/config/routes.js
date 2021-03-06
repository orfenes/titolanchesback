
const express = require('express');
const auth = require('./auth');
const AuthService = require('../api/user/authService')

module.exports = (app) => {
  /*
  * Rotas privadas
  */
  const protectedApi = express.Router()
  app.use('/api', protectedApi)

  protectedApi.use(auth)

  const Client = require('../api/client/clientService');
  Client.register(protectedApi, '/clients');

  /*
  * Rotas abertas
  */
  const openApi = express.Router()
  app.use('/oapi', openApi);

  openApi.post('/login', AuthService.login)
  openApi.post('/signup', AuthService.signup)
  openApi.post('/validateToken', AuthService.validateToken)
}
