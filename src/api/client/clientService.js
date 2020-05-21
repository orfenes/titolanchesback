const client = require('./client');

client.methods(['get', 'post', 'put', 'delete']);
client.updateOptions({ new: true, runValidators: true })

client.route('count', (req, res, next) => {
  client.countDocuments((error, value) => {
    if (error) {
      res.status(500).json({ erros: [error] })
    } else {
      res.json({ value })
    }
  });
});

module.exports = client;
