// https://github.com/marak/Faker.js/
// npm install Faker
var Faker = require('Faker'),
    times = 0,
    id = 0

var self = {
  Retailer: [ ]
}

// Retailer
id = 1
times = 20
for (; times > 0 ; times--) {
  var s = {
    id: id++,
    name: Faker.Company.companyName(),
    raw_url: 'http://www.' + Faker.Internet.domainName(),
    affiliate_url: 'http://www.some-affiliate-gateway.com/click-' + Faker.Helpers.randomNumber(99999),
    subid: 'sid'
  }
  self.Retailer.push( s )
  console.log("Retailer", s)
};

module.exports = self
