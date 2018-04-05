const { Model } = require('objection')

class User extends Model {
  static get tableName() {
    return 'user'
  }

  static get relationMappings() {
    const Previlledge = require('./previlledge')

    return {
      previlledges: {
        relation: Model.ManyToManyRelation,
        modelClass: Previlledge,
        join: {
          from: 'user.id',
          through: {
            from: 'user_previlledge.user_id',
            to: 'user_previlledge.previlledge_id',
          },
          to: 'previlledge.id'
        }
      }
    }
  }
}

module.exports = User
