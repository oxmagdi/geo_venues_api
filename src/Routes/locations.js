var express = require('express')
var router = express.Router()

const logger = require('../Helpers/logger')

const loactionsCtrl = require('../Controllers/LocationController')

const authMiddleWare = require('../Middlewares/Auth')

/* GET /locations */
router.get('/', authMiddleWare, async function(req, res) {
    try {
      const locations = await loactionsCtrl.index()

      res.status(200).json({
        success: true,
        msg: 'All locations',
        data: locations
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

/* GET /locations/1 */
router.get('/:id', authMiddleWare, async function(req, res) {
         try {
           const id = req.params.id
           const location = await loactionsCtrl.show(id)

           res.status(200).json({
            success: true,
            msg: 'Get a location',
            data: {
              location,
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

/* POST /locations */
router.post('/', authMiddleWare, async function(req, res) {
         try {

          const location = {
            userId: req.user.id,
            lat: req.body.lat,
            long: req.body.long,
          }

          const createdLocation = await loactionsCtrl.store(location)

          res.status(201).json({
            success: true,
            msg: 'Created successfully',
            data: {
              location: createdLocation,
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

/* DELETE /locations/1 */
router.delete('/:id', authMiddleWare, async function(req, res) {
         try {
            const id = req.params.id

            const result = await loactionsCtrl.destroy(id)

            res.status(200).json({
              success: true,
              msg: 'Deleted successfully',
              data: {
                query_result: result
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

module.exports = router
