const { Model } = require('objection')

class Previlledge extends Model {
  static get tableName() {
    return 'previlledge'
  }

  static get relationMappings() {
    const User = require('./user')

    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'previlledge.id',
          through: {
            from: 'user_previlledge.previlledge_id',
            to: 'user_previlledge.user_id',
          },
          to: 'user.id'
        }
      }
    }
  }
}

module.exports = Previlledge
