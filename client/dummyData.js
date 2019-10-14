var faker = require('faker');

var reviews = [];
for (var i = 1; i<10; i++){
  for (var j = 1; j<faker.random.number(20);j++){
    var uniqueId = i;
    var companyName = faker.company.companyName();
    var randomName = faker.name.firstName() + ' ' + faker.name.lastName()[0] + '.';
    var randomImage = faker.image.avatar();
    var randomCity = faker.address.city();
    var randomState = faker.address.state();
    var randomFriendsCount = faker.random.number(100);
    var randomReviewsCount = faker.random.number(100);
    var randomPhotosCount = faker.random.number(100);
  
    var randomUsefulCount = faker.random.number(20);
    var randomFunnyCount = faker.random.number(20);
    var randomCoolCount = faker.random.number(20);
  
    var randomStarsCount = faker.random.number(5);
    var randomText = faker.lorem.paragraphs()
    function randomDate(start, end) {
      var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
  
      return [month, day, year].join('/');
    }
  
    const data = 
    {
      id: i,
      restaurant: faker.company.companyName(),
      name: faker.name.firstName() + ' ' + faker.name.lastName()[0] + '.',
      image: faker.image.avatar(),
      location: faker.address.city() +', ' + faker.address.state(),
      friendCount: faker.random.number(100),
      reviewsCount: faker.random.number(100),
      photoCount: faker.random.number(100),
      starsCount: faker.random.number(5),
      date: randomDate(new Date(2012, 0, 1), new Date()),
      text: faker.lorem.paragraphs(),
      usefulCount: faker.random.number(20),
      usefulToggle: false,
      usefulColor: 'white',
      funnyCount: faker.random.number(20),
      funnyToggle: false,
      funnyColor:'white',
      coolCount: faker.random.number(20),
      coolToggle: false,
      coolColor: 'white',
    }
    reviews.push(data)
  }
}


export default reviews;