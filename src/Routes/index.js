var express = require('express')
var router = express.Router()

const logger = require('../Helpers/logger')
const authCtrl = require('../Controllers/AuthController')

const authMiddleWare = require('../Middlewares/Auth')

/* POST /login*/
router.post('/login', async function(req, res) {
    try {
      const email = req.body.email
      const password = req.body.password

      const result = await authCtrl.login(email, password)
      
      res.status(200).json({
        success: true,
        msg: `Welcome, ${result.user.username}`,
        data: {
          user: result.user,
          token: result.token
        }
      })
    } catch (error) {
      logger.error(error)
      res.status(200).json({
        success: false,
        msg: 'Something goes wrong!',
        errors: error,
      })
    }
})

/* POST /register */
router.post('/register', async function(req, res) {
  try {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    const user = await authCtrl.register(username, email, password)

    res.status(201).json({
      success: true,
      msg: `Now you can login to get your token`,
      data: {
        user,
      }
    })
  } catch (error) {
    logger.error(error)
    res.status(200).json({
      success: false,
      msg: 'Something goes wrong!',
      errors: error,
    })
  }
})

/* GET /user */
router.get('/user', authMiddleWare, function (req, res) {
  res.status(200).json({
    msg: 'yeeeeah, i\'m here',
    user: req.user
  })
})

module.exports = router
