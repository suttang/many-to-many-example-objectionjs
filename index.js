const {
  User,
  Previlledge
} = require('./models')

async function main() {
  const previlledges = await Previlledge.query().whereIn('name', ['read', 'write'])

  await User.query().insertGraph({
    account: 'objection',
    firstName: 'Objection',
    lastName: 'Taro',
    previlledges: previlledges
  }, {
    relate: true
  })
}

main()
