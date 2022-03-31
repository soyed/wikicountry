const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const mapboxURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/boston.json?access_token=pk.eyJ1IjoiZ3JhYmJhNDUiLCJhIjoiY2t4eHJreXY2OTVmMzMxbXUyMmkyYzlsMCJ9.ZYoxWlVcPykOnrnbRSUcQg&limit=1';

const countriesURL =
  'https://countries-cities.p.rapidapi.com/location/country/CA';

// fetch(mapboxURL)
//   .then((res) => res.json())
//   .then((data) => {
//     const features = data.features[0];

//     let countryCode;
//     //   Edge case => if it is a country get the country code from properties object
//     if (features.properties.short_code) {
//       const { short_code } = features.properties;
//       countryCode = short_code;
//     } else if (features.context) {
//       // loop through context array and find the short_code
//       features.context.forEach((data) => {
//         if (data.id.includes('country')) {
//           countryCode = data.short_code;
//         }
//       });
//     }
//     // Else, if it is a state, fetch country code from context[2] = {short_code}
//     console.log(countryCode);
//   })
//   .catch((error) => console.log(error));

fetch(countriesURL, {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': process.env.X_RAPIDAPI_Host,
    'X-RapidAPI-Key': process.env.X_RAPIDAPI_Key,
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
