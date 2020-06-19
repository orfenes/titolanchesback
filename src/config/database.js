const mongoose = require ('mongoose');
const env = require('../.env')
const url = env.mongoUrl;

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports = mongoose.connect(url, { useNewUrlParser: true });





