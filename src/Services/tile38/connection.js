var Tile38 = require('tile38')
var config = require('../../Configs/tile38')

var client = null

module.exports = (function(){
         
         if(!client)  client = new Tile38({host: config.host, port: config.port, debug: true }) 

         return client
     })();