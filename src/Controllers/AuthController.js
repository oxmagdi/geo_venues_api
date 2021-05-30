const jwt = require('jsonwebtoken')
const config = require('../Configs/app')

const logger = require('../Helpers/logger')
const cryptr = require('../Helpers/cryptr')

const sql = require('../Services/Sequelize/connection')
const UserModel = sql.import('../Models/user.js')

/**
 * Login new user
 * 
 * @param {String} username 
 * @param {String} email 
 * @param {String} password 
 * 
 * @returns Promise
 */
module.exports.login = (email, password) => {
    return new Promise((resolve, reject) => {
        UserModel.findOne({where:{email: email, }})
        .then(user => {
            if(user) {
               const isPasswordMatched = (password == cryptr.decrypt(user.password))
               if(isPasswordMatched){
                //    logger.info(`user id = ${user.id}`)
                   const token = jwt.sign({id: user.id, scope: ['*']}, config.secret_key, { expiresIn: '7d' });
                   resolve({
                       user: {
                           username : user.username,
                           email    : user.email,
                       },
                       token,
                   })
               } else reject("Password Mismatched !!")
            } else reject("User Not Found !!")
        })
        .catch(error => reject(error['errors'][0]['message']))
    })
}

/**
 * Regiser new user and create new token for him
 * 
 * @param {String} username 
 * @param {String} email 
 * @param {String} password 
 * 
 * @returns Promise
 */
module.exports.register = (username, email, password) => {
        return new Promise((resolve, reject) => {
            password = cryptr.encrypt(password)
            UserModel.create({username, email, password})
                    .then(user => {
                            resolve({
                                username: user.username,
                                email: user.email,
                                activated: !!user.activated,
                            })
                    }).catch(error => {
                        logger.error(error)
                        reject(error['errors'][0]['message']) 
                    })
        })
}