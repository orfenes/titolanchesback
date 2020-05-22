
const restful = require('node-restful');
const mongoose = restful.mongoose;

const userSchema = restful.model('User', mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, min: 6, max: 12, required: true }
}));

module.exports = userSchema;
