const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const helmet = require('helmet')

//set env variables
if(process.env.ENV === 'DEV')
  require('dotenv').config()

//config server
const app = express()
app.use(helmet())
app.use(express.static('dist'))

//middleware
// app.use(morgan('dev'))
// app.use(bodyParser.json())
// app.use(cors())

//handle error/success response
app.use((req, res, next) => {
  res.handle = (err, data) => res.status(err ? 400 : 200).send(err || data)
  next()
});

//routing
app.use('/api/images', require('./routes/images'))

//send webpack react front end to client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

//server listen on port
app.listen(process.env.PORT)
console.log(`EXPRESS LISTENING ON PORT ${process.env.PORT}`)
