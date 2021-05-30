const sql = require('../Services/Sequelize/connection')
const LocationModel = sql.import('../Models/location.js')



/**
 * Get all locations
 * 
 * @returns Promise
 */
module.exports.index = () => {
    return new Promise((resolve, reject) => {
        LocationModel.findAndCountAll({})
                  .then(result => resolve(result))
                  .catch(error => reject(error))
    })
}

/**
 * Get one location
 * 
 * @param {Integer} id 
 * 
 * @returns Promise
 */
module.exports.show = (id) => {
    return new Promise((resolve, reject) => {
        LocationModel.findOne({where:{id: id}})
                  .then(location => resolve(location))
                  .catch(error => reject(error))    
    })
}

/**
 * Store new location into DB
 * 
 * @param {Object} location
 * @param {Integer} location.userId
 * @param {Float} location.lat
 * @param {Float} location.long
 * 
 * @returns Promise
 */
module.exports.store = (location) => {
    return new Promise((resolve, reject) => {
        LocationModel.create(location)
         .then(result => resolve(result))
         .catch(error => {
             logger.error(error)
             reject(error) 
         })
    })
}

// /**
//  * Update location
//  * 
//  * @param {Integer} id
//  * @param {Object} location
//  * @param {String} location.user
//  * @param {Float} location.lat
//  * @param {Float} location.long
//  * @param {Integer} location.landArea
//  * 
//  * @returns Promise
//  */
// module.exports.update = (id, location) => {
//          return new Promise((resolve, location) => {
//             LocationModel.update(location, {where:{id: id}})
//                            .then(result => resolve(result))
//                            .catch(error => reject(error))
//          })
// }

/**
 * Delete location
 * 
 * @param {Integer} id palce id
 * 
 * @returns Promise
 */
 module.exports.destroy = (id) => {
         return new Promise((resolve, reject) => {
            LocationModel.destroy({where:{id:id}})
                           .then(result => resolve(result))
                           .catch(error => reject(error))
         })
}