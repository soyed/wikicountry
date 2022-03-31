const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const properties = [
  'name',
  'flag',
  'capital',
  'population',
  'languages',
  'population',
  'code',
  'territories',
  'wiki_id',
  'wiki_url',
  'total_cities',
  'continent',
  'currency',
];

const countries = (countryCode, callback) => {
  const countriesURL = `https://countries-cities.p.rapidapi.com/location/country/${countryCode}`;
  fetch(countriesURL, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': process.env.X_RAPIDAPI_Host,
      'X-RapidAPI-Key': process.env.X_RAPIDAPI_Key,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      let res = {};
      for (let key in data) {
        // edge case => only return the properties required
        if (properties.some((prop) => prop === key)) {
          res[key] = data[key];
        }
      }

      callback(undefined, res);
    })
    .catch((err) => {
      callback(
        { message: 'Unable to connect to countries service!' },
        undefined
      );
    });
};

module.exports = countries;
