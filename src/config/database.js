const mongoose = require ('mongoose');
const url = 'mongodb://localhost/titolanches';

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports = mongoose.connect(url, { useNewUrlParser: true });





