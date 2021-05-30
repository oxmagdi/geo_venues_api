const jwt = require('jsonwebtoken')

const config = require('../Configs/app')

const sql = require('../Services/Sequelize/connection')
const UserModel = sql.import('../Models/user.js')

module.exports = async (req, res, next) => {
         try {

                  const token =  req.headers.authorization.split(" ")[1]
                  var decoded = jwt.verify(token, config.secret_key)

                  const user = await UserModel.findOne({where:{id: decoded.id}, attributes:['id', 'username', 'email', 'createdAt', 'updatedAt']})
                  console.log(user)
                  if(user != null) 
                  {
                        req.user = user
                        next()
                  }
                  else throw new Error('User not found!')

         } catch (error) {
               console.log('error here')
                  console.error(error)
                  res.status(401).json({
                           success: false,
                           msg: 'unauthenticated'
                  })
         }
}