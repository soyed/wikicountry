// DOM Elements
const countryForm = document.querySelector('.country-form');
const searchField = document.querySelector('input');
const countryContainer = document.querySelector('.country--details');
const loadingSpinner = document.querySelector('.card--loading');

const countryDetails = (address, callback) => {
  fetch(`/country?location=${address}`)
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    });
};

countryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = searchField.value;

  const spinner = `
    <div class="card--loading">
      <div class="spinner"></div>
    </div>
  `;

  // Apply loading state
  countryContainer.innerHTML = spinner;

  countryDetails(location, (data) => {
    // edge case => when there is an error => render error
    if (data.message) {
      const { message } = data;
      const html = `
        <div class="error-container">
            <div>
                <p>${message}</p>
            </div>
        </div>
      `;
      countryContainer.innerHTML = html;
    } else {
      // Else, render the card
      const {
        name: countryName,
        capital: { name: capitalName },
        total_cities: numOfCities,
        continent: { name: continentName },
        flag: { file: flagImg },
        wiki_url,
      } = data;

      // update card details
      const html = `
      <div class="card">
          <div class="card--header">
              <img src="${flagImg}" alt="${countryName}">
          </div>
          <div class="card--content">
              <div>
                  <p><span>Name:</span> ${countryName}</p>
              </div>
              <div>
                  <p><span>Capital:</span> ${capitalName}</p>
              </div>
              <div>
                  <p><span>Continent:</span> ${continentName}</p>
              </div>
              <div>
                  <p><span>Number of cities:</span> ${numOfCities}</p>
              </div>
              <div>
                  <a href="${wiki_url}" target="_blank">See more info</a>
              </div>
          </div>
      </div>
    `;
      countryContainer.innerHTML = html;
    }
  });

  // reset the form
  searchField.value = '';
});
