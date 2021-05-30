const client = require('../Services/tile38/connection')

/**
 * Get all users near by a place
 * 
 * @param {Float} lat 
 * @param {Float} long 
 * @param {Intger} area 
 * 
 * @returns Promise
 */
module.exports.naerby = (lat, long, area) => {
         return new Promise((resolve, reject) => {
            let query = client.nearbyQuery('users').point(lat, long, area)

            query.execute().then(result => {
                  resolve(result)
            }).catch(error => {
                  reject(error)
            })

         })
}