var sleep = require('sleep')

const data = require('../mocks/phones.json')

const routes = (app) => {
  app.get('/phones', (req, res) => {
    sleep.msleep(3000) // Simulate network latency
    res.send(data)
  })
}

module.exports = routes
