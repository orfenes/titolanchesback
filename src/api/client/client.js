const restful = require('node-restful');
const mongoose = restful.mongoose;

const ClientSchema = restful.model('client', mongoose.Schema({
  name: { type: String, required: [true, 'Informe o nome do cliente'] },
  address: { type: String, required: [true, 'Informe o endereço do cliente']},
  number: { type: String, required: [true, 'Informe o numero da residencia do cliente']},
  neighborhood: { type: String, requied: false},
  complement: { type: String, required: false},
  telephone: { type: Number, required: false},
  cellphone: { type: Number, required: false },
  email: { type: String, required: false}
}));

module.exports = ClientSchema;
