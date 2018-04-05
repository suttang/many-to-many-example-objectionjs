const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_DATABASE
} = process.env

const config = {
  client: 'mysql2',
  connection: {
    host: MYSQL_HOST,
    port: MYSQL_PORT || 3306,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
  }
}

module.exports = config
