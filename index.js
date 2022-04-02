const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();
const geocode = require('./src/utils/geocode');
const countries = require('./src/utils/countries');

// Testing APIs
geocode('boston', (err, { countryCode } = {}) => {
  if (err) {
    console.log(err);
    return;
  }

  countries(countryCode, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
});
