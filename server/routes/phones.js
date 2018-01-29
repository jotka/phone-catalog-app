const data = require('../mocks/phones.json')

const routes = (app) => {
  app.get('/phones', (req, res) => {
    res.send(data)
  })
}

module.exports = routes
