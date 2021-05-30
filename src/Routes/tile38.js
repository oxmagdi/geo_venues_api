var express = require('express')
var router = express.Router()

const logger = require('../Helpers/logger')

const placeCtrl = require('../Controllers/PlaceController') 
const tile38Ctrl = require('../Controllers/Tile38Controller') 

const authMiddleWare = require('../Middlewares/Auth')

/* GET tile38/:placeID/nearby */
router.get('/:placeID/nearby', authMiddleWare, async function(req, res) {
    try {
      
      const placeID = req.params.placeID
      const place = await placeCtrl.show(placeID)

      const results = await tile38Ctrl.naerby(place.lat, place.long, place.landArea)

      res.status(200).json({
        success: true,
        msg: 'Ok',
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

module.exports = router
