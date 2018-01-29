const express = require('express')
const authRoutes = require('./routes/phones')

const app = express()
authRoutes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)
