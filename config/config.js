require('dotenv').config()
module.exports = {
  development: {
    database: 'turismo_database_development',
    dialect: 'postgres'
  },
  test: {
    database: 'turismo_database_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'turismo_database_production',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
