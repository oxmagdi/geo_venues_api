require('dotenv').config({ path: `${__dirname}/../../.env` })

module.exports = {
  development: {
         host : process.env.DEV_TILE38_HOST || 'localhost',
         port : process.env.DEV_TILE38_PORT || 9850,
  },
  test: {
         host : process.env.TEST_TILE38_HOST || 'localhost',
         port : process.env.TEST_TILE38_PORT || 9850,
  },
  production: {
         host : process.env.TILE38_HOST || 'localhost',
         port : process.env.TILE38_PORT || 9850,
  }
}[process.env.NODE_ENV || 'development']