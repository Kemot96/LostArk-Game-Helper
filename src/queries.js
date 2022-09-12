const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

const getTripods = (request, response) => {
    pool.query('SELECT * FROM tripods ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getTripodById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM tripods WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createTripod = (request, response) => {
    const { name, value } = request.body
  
    pool.query('INSERT INTO tripods (name, value) VALUES ($1, $2) RETURNING *', [name, value], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Tripod added with ID: ${results.rows[0].id}`)
    })
  }

  const updateTripod = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, value } = request.body
  
    pool.query(
      'UPDATE tripods SET name = $1, value = $2 WHERE id = $3',
      [name, value, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Tripod modified with ID: ${id}`)
      }
    )
  }

  const deleteTripod = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM tripods WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Tripod deleted with ID: ${id}`)
    })
  }


  module.exports = {
    getTripods,
    getTripodById,
    createTripod,
    updateTripod,
    deleteTripod,
  }