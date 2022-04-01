const { rmSync } = require('fs');

// DOM Elements
const countryForm = document.querySelector('.country-form');

const countryDetails = (address, callback) => {
  fetch(`/weather?location=${address}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });
};
