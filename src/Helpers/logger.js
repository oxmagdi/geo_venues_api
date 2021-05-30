
const pino = require('pino')
const chalk = require('chalk')

const logger = pino({
  prettyPrint: {
       ignore: 'pid,hostname' // --ignore
  },
})

module.exports = logger