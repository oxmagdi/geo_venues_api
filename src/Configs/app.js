require('dotenv').config({ path: `${__dirname}/../../.env` })

module.exports = {
  development: {
    port: process.env.DEV_PORT || 3001,
    secret_key: process.env.SECRET_KEY || '', // used for APIs token
  },
  test: {
    port: process.env.TEST_PORT || 3002,
    secret_key: process.env.SECRET_KEY || '', // used for APIs token
  },
  production: {
    port: process.env.PORT || 3000,
    secret_key: process.env.SECRET_KEY || '', // used for APIs token
  }
}[process.env.NODE_ENV || 'development']