const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const noFavicons = require('express-no-favicons')
const logger = require('morgan')

const app = express()

// Express Middleware
app.disable('x-powered-by')
app.use(express.static(path.join(__dirname, 'src')))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors())
app.use(compression())
app.use(noFavicons())
app.use(logger('dev'))

app.set('port', process.env.PORT || 3000)

// Make app.get route for callback_url,
// receive state from data object and use BigCommerce API
// to store requiredFields data

const server = app.listen(3000, '192.168.1.230', () => {
  console.log('listening on port ', server.address().port)
})
