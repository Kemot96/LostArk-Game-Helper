const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')

const app = express()
const port = 8081

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  app.get('/api', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })


app.get('/api/tripods', db.getTripods)
app.get('/api/tripods/:id', db.getTripodById)
app.post('/api/tripods', db.createTripod)
app.put('/api/tripods/:id', db.updateTripod)
app.delete('/api/tripods/:id', db.deleteTripod)

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })