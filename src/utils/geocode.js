const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${process.env.MAPBOX_API_Key}&limit=1`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const features = data.features[0];
      // Edge case => when the request location is not found
      if (!features) {
        return callback(
          { message: 'Unable to find location. Try another location!' },
          undefined
        );
      }

      let countryCode;
      //   Edge case => if address is a country
      if (features.properties.short_code) {
        const { short_code } = features.properties;
        countryCode = short_code;
      } else if (features.context) {
        // Edge case => if a state is provided
        // loop through context array and find the short_code
        features.context.forEach((data) => {
          if (data.id.includes('country')) {
            countryCode = data.short_code;
          }
        });
      }
      callback(undefined, { countryCode });
    })
    .catch((error) => {
      callback(
        { message: 'Unable to connect to location service!' },
        undefined
      );
    });
};

module.exports = geocode;
