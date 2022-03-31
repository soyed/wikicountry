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
      callback(undefined, { ...data });
    })
    .catch((err) => {
      callback({ ...err }, undefined);
    });
};
