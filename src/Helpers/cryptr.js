
const configs = require('../Configs/app')

const Cryptr = require('cryptr')
module.exports = new Cryptr(configs.secret_key);