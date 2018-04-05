const { Model } = require('objection')
const Knex = require('knex')

const config = require('../config/database')

const knex = Knex(config)

Model.knex(knex)

module.exports = {
  User: require('./user'),
  Previlledge: require('./previlledge')
}
