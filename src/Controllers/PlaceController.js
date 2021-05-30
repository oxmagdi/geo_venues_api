const sql = require('../Services/Sequelize/connection')
const PlaceModel = sql.import('../Models/place.js')



/**
 * Get all places
 * 
 * @returns Promise
 */
module.exports.index = () => {
    return new Promise((resolve, reject) => {
         PlaceModel.findAndCountAll({})
                  .then(result => resolve(result))
                  .catch(error => reject(error))
    })
}

/**
 * Get one place
 * 
 * @param {Integer} id 
 * 
 * @returns Promise
 */
module.exports.show = (id) => {
    return new Promise((resolve, reject) => {
         PlaceModel.findOne({where:{id: id}})
                  .then(place => resolve(place))
                  .catch(error => reject(error))    
    })
}

/**
 * Store new place into DB
 * 
 * @param {Object} place
 * @param {String} place.name
 * @param {Float} place.lat
 * @param {Float} place.long
 * @param {Integer} place.landArea
 * 
 * @returns Promise
 */
module.exports.store = (place) => {
    return new Promise((resolve, reject) => {
         PlaceModel.create(place)
         .then(result => resolve(result))
         .catch(error => {
             logger.error(error)
             reject(error) 
         })
    })
}

/**
 * Update place
 * 
 * @param {Integer} id
 * @param {Object} place
 * @param {String} place.name
 * @param {Float} place.lat
 * @param {Float} place.long
 * @param {Integer} place.landArea
 * 
 * @returns Promise
 */
module.exports.update = (id, place) => {
         return new Promise((resolve, reject) => {
                 PlaceModel.update(place, {where:{id: id}})
                           .then(result => resolve(result))
                           .catch(error => reject(error))
         })
}

/**
 * Delete place
 * 
 * @param {Integer} id palce id
 * 
 * @returns Promise
 */
 module.exports.destroy = (id) => {
         return new Promise((resolve, reject) => {
                  PlaceModel.destroy({where:{id:id}})
                           .then(result => resolve(result))
                           .catch(error => reject(error))
         })
}