
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('api', 'me', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

const Tripod = sequelize.define('Tripod', {
  name: {
    type: DataTypes.STRING,
  },
  value: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'tripods',
  timestamps: false,
});

const getTripods = async (request, response) => {
  try {
      const tripods = await Tripod.findAll();
      response.send(tripods);
  } catch (err) {
      console.log(err);
  }
}


const getTripodById = async (request, response) => {
  try {
      const tripod = await Tripod.findAll({
          where: {
              id: request.params.id
          }
      });
      response.send(tripod[0]);
  } catch (err) {
      console.log(err);
  }
}

const createTripod = async (request, response) => {
  try {
    await Tripod.create(request.body);
    response.json({
        "message": "Tripod Created"
    });
} catch (err) {
    console.log(err);
}
}

const updateTripod = async (request, response) => {
  try {
    await Tripod.update(request.body, {
        where: {
            id: request.params.id
        }
    });
    response.json({
        "message": "Tripod Updated"
    });
} catch (err) {
    console.log(err);
}
}


const deleteTripod = async (request, response) => {
  try {
    await Tripod.destroy({
        where: {
            id: request.params.id
        }
    });
    response.json({
        "message": "Tripod Deleted"
    });
  } catch (err) {
    console.log(err);
  }
  }

  module.exports = {
    getTripods,
    getTripodById,
    createTripod,
    updateTripod,
    deleteTripod,
  }