var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'yelp'
});
 
connection.connect();

const getdb = (restaurantId, callback)=>{
  connection.query(`select * from reviews where id=${restaurantId}`, function (error, results) {
    if (error){
      callback(error)
    } else {
      callback(null, results)
    }
  });
}

const putdb = (restaurantId, data, name, argument, callback)=>{
  connection.query(`UPDATE reviews SET ${argument}Count = ?, ${argument}Toggle = ?, ${argument}Color = ? WHERE id = ${restaurantId} && name="${name}"`, data, function (error, results) {
    if (error){
      callback(error)
    } else {
      callback(null, results)
    }
  });
}

module.exports = {
  getdb, putdb
}