var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'yelp'
});
 
connection.connect();
connection.on('error', function(err) {
  console.log("[mysql error]",err);
});

var faker = require('faker');
/*
A seed script is a script that generates dummy data, possibly using random values or a look up table of acceptable values. 
The script will create the SQL queries required to insert the data into the database and may also execute the query.
*/

var reviews = [];
for (var i = 1; i <= 10; i++){
  var randomReviewsCount = Math.floor(Math.random() * 10) + 1; 
  var randomRestaurant = faker.company.companyName();
  for (var j = 1; j <= randomReviewsCount; j++){
    function randomDate(start, end) {
      var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [month, day, year].join('/');
    }

    const data = {
      id: i,
      restaurant: randomRestaurant,
      name: faker.name.firstName() + ' ' + faker.name.lastName()[0] + '.',
      image: faker.image.avatar(),
      location: faker.address.city() +', ' + faker.address.state(),
      friendCount: faker.random.number(100),
      reviewsCount: faker.random.number(100),
      photoCount: faker.random.number(100),
      starsCount: faker.random.number(5),
      date: randomDate(new Date(2012, 0, 1), new Date()),
      text: faker.lorem.paragraphs() + "\n\n" + faker.lorem.paragraphs() ,
      usefulCount: faker.random.number(20),
      usefulToggle: 0,
      usefulColor: 'white',
      funnyCount: faker.random.number(20),
      funnyToggle: 0,
      funnyColor:'white',
      coolCount: faker.random.number(20),
      coolToggle: 0,
      coolColor: 'white',
    };
 
    reviews.push(data)
    
  }  
}
console.log(reviews.length)
for (var i = 0; i < reviews.length; i++){
  connection.query(`insert into reviews SET ?`, reviews[i])
}

connection.end()

