const express = require('express')
const authRoutes = require('./routes/phones')
const allowCrossDomain = require('./middlewares/cors')

const app = express()
app.use(allowCrossDomain)
authRoutes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)
