const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.set('port', process.env.PORT || 3000)

// App.get route for callback_url
// receive state from data object and use BigCommerce API
// to store requiredFields data

const server = app.listen(3000, '192.168.1.230', () => {
  console.log('listening on port ', server.address().port)
})
