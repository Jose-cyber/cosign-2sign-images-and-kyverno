const express = require('express')
const app = express()

const appRoutes = require('../routes/appRoutes')

app.use(appRoutes)

module.exports = app
