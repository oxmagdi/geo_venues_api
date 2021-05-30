var express = require('express')
var router = express.Router()

const logger = require('../Helpers/logger')

const placeCtrl = require('../Controllers/PlaceController') 

const authMiddleWare = require('../Middlewares/Auth')

/* GET /places */
router.get('/', authMiddleWare, async function(req, res) {
    try {
      const results = await placeCtrl.index()

      res.status(200).json({
        success: true,
        msg: 'All places',
        data: results
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

/* GET /places/1  */
router.get('/:id', authMiddleWare, async function(req, res) {
  try {
    const id = req.params.id

    const place = await placeCtrl.show(id)

    res.status(200).json({
      success: true,
      msg: 'Get a place',
      data: {
        place,
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

/* POST /places  */
router.post('/', authMiddleWare, async function(req, res) {
         try {
           console.log(req.body)
            const place = {
                name : req.body.name,
                lat : req.body.lat,
                long : req.body.long,
                landArea : req.body.landArea,
            }

            const createdPlace = await placeCtrl.store(place)

            res.status(201).json({
              success: true,
              msg: 'Created successfully',
              data: {
                place: createdPlace,
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

/* PATCH /places/1  */
router.patch('/:id', authMiddleWare, async function(req, res) {
         try {
          const id = req.params.id 
          const place = {
              name : req.body.name,
              lat : req.body.lat,
              long : req.body.long,
              landArea : req.body.landArea,
          }

          const results = await placeCtrl.update(id, place)

          res.status(201).json({
            success: true,
            msg: 'Updated successfully',
            data:{
              query_result: results
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

/* DELETE /places/1  */
router.delete('/:id', authMiddleWare, async function(req, res) {
         try {
            const id = req.params.id

            const results = await placeCtrl.destroy(id)

            res.status(200).json({
              success: true,
              msg: 'Deleted successfully',
              data: {
                query_result: results
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

router.get('/:id/nearby', authMiddleWare, async function(req, res) {
   try {
     
   } catch (error) {
     logger.error(error)
     res.status(500).json({
      success: false,
      msg: 'Something goes wrong!',
      errors: error,
     })
   }
})

router.get('/:id/in', authMiddleWare, async function(req, res) {
  try {
    
  } catch (error) {
    logger.error(error)
    res.status(500).json({
     success: false,
     msg: 'Something goes wrong!',
     errors: error,
    })
  }
})

router.get('/:id/out', authMiddleWare, async function(req, res) {
  try {
    
  } catch (error) {
    logger.error(error)
    res.status(500).json({
     success: false,
     msg: 'Something goes wrong!',
     errors: error,
    })
  }
})

module.exports = router
