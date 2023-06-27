// const cityInput = document.getElementById('cityInput');
// const dropdown = document.getElementById('dropdown');
// const cityDetails = document.getElementById('cityDetails');

// // Event listener for input changes
// cityInput.addEventListener('input', handleInput);

// // Function to handle input changes
// function handleInput() {
//   const searchQuery = cityInput.value.trim().toLowerCase();

//   if (searchQuery) {
//     // Fetch city data from the OpenWeatherMap API
//     fetchCities(searchQuery)
//       .then((cities) => {
//         if (cities.length > 0) {
//           showDropdown(cities);
//         } else {
//           hideDropdown();
//         }
//       })
//       .catch((error) => {
//         console.log('Error fetching cities:', error);
//       });
//   } else {
//     hideDropdown();
//   }
// }

// // Function to fetch city data from the OpenWeatherMap API
// function fetchCities(searchQuery) {
//   const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
//   const url = `https://api.openweathermap.org/data/2.5/find?q=${searchQuery}&type=like&appid=${apiKey}`;

//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const cities = data.list.map((city) => {
//         return {
//           name: city.name,
//           country: city.sys.country,
//           population: city.population,
//         };
//       });
//       return cities;
//     });
// }

// // Function to show the dropdown with} city suggestions
// function showDropdown(cities) {
//   const dropdownHTML = cities
//     .map((city) => `<li>${city.name}, ${city.country}</li>`)
//     .join('');
//   dropdown.innerHTML = `<ul>${dropdownHTML}</ul>`;
//   dropdown.style.display = 'block';

//   // Add event listeners to dropdown items
//   const dropdownItems = dropdown.querySelectorAll('li');
 
// }

// const axios = require('axios');
// const fs = require('fs');

// const url = 'https://en.wikipedia.org/wiki/List_of_cities_in_India_by_population';

// // Function to extract data from the table rows
// function extractData(rows) {
//   const cities = [];

//   for (let i = 1; i < rows.length; i++) {
//     const columns = rows[i].querySelectorAll('td');
//     const rank = parseInt(columns[0].textContent.trim(), 10);
//     const city = columns[1].textContent.trim();
//     const population2011 = columns[2].textContent.trim();
//     const population2001 = columns[3].textContent.trim();
//     const stateOrUT = columns[4].textContent.trim();

//     const cityData = {
//       Rank: rank,
//       City: city,
//       Population_2011: population2011,
//       Population_2001: population2001,
//       State_UnionTerritory: stateOrUT,
//     };

//     cities.push(cityData);
//   }

//   return cities;
// }

// // Fetch the webpage and extract the data
// axios.get(url)
//   .then(response => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(response.data, 'text/html');

//     const table = doc.querySelector('.wikitable.sortable');
//     const rows = table.querySelectorAll('tr');

//     const cities = extractData(rows);
//     console.log(cities);
//     const jsonData = JSON.stringify(cities, null, 2);

//     fs.writeFile('city_data.json', jsonData, 'utf8', err => {
//       if (err) {
//         console.error('Error writing JSON file:', err);
//       } else {
//         console.log('Data extracted and saved successfully.');
//       }
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });


// function handleInput() {
//   const input = document.getElementById('cityInput').value.toLowerCase();
//   const dropdown = document.getElementById('dropdown');
//   dropdown.innerHTML = '';

//   const matchingCities = cityData.filter(city => city.City.toLowerCase().startsWith(input));

//   matchingCities.forEach(city => {
//     const option = document.createElement('div');
//     option.textContent = city.City;
//     option.classList.add('option');
//     option.addEventListener('click', () => {
//       displayCityInfo(city);
//       dropdown.innerHTML = '';
//     });
//     dropdown.appendChild(option);
//   });
// }

// function displayCityInfo(city) {
//   const cityInfo = document.getElementById('cityInfo');
//   cityInfo.innerHTML = `
//     <p>Rank: ${city.Rank}</p>
//     <p>City: ${city.City}</p>
//     <p>Population (2011): ${city.Population_2011}</p>
//     <p>Population (2001): ${city.Population_2001}</p>
//     <p>State or Union Territory: ${city.State_UnionTerritory}</p>
//   `;
// }

// // Fetch the city data from the JSON file
// fetch('city_data.json')
//   .then(response => response.json())
//   .then(data => {
//     // Assign the loaded city data to the 'cityData' variable
//     const cityData = data;

//     // Continue with the rest of your code
//     const input = document.getElementById('cityInput');
//     input.addEventListener('input', handleInput);
//   })
//   .catch(error => {
//     console.error('Error fetching city data:', error);
//   });

// let cityData = []; // Variable to store the loaded city data

// function loadCityData() {
//   fetch('city_data.json')
//     .then(response => response.json())
//     .then(data => {
//       cityData = data;
//     })
//     .catch(error => {
//       console.error('Error fetching city data:', error);
//     });
// }

// function submitForm() {
//   const cityInput = document.getElementById('cityInput');
//   const selectedCity = cityInput.value.trim();

//   const city = cityData.find(city => city.City.toLowerCase() === selectedCity.toLowerCase());
//   if (city) {
//     displayCityInfo(city);
//   } else {
//     console.error('City data not found');
//   }
// }

// function displayCityInfo(city) {
//   const cityInfo = document.getElementById('cityInfo');
//   cityInfo.innerHTML = `
//     <p>Rank: ${city.Rank}</p>
//     <p>City: ${city.City}</p>
//     <p>Population (2011): ${city.Population_2011}</p>
//     <p>Population (2001): ${city.Population_2001}</p>
//     <p>State or Union Territory: ${city.State_UnionTerritory}</p>
//   `;
// }

// // Load the city data on page load
// loadCityData();

let cityData = []; // Variable to store the loaded city data

function loadCityData() {
  fetch('city_data.json')
    .then(response => response.json())
    .then(data => {
      cityData = data;
      populateCityDropdown();
    })
    .catch(error => {
      console.error('Error fetching city data:', error);
    });
}

function populateCityDropdown() {
  const cityDropdown = document.getElementById('cityInput');

  cityData.forEach(city => {
    const option = document.createElement('option');
    option.value = city.City;
    option.textContent = city.City;
    cityDropdown.appendChild(option);
  });
}

function submitForm() {
  const cityDropdown = document.getElementById('cityInput');
  const selectedCity = cityDropdown.value;

  if (selectedCity === '') {
    console.error('Please select a city');
    return;
  }

  const city = cityData.find(city => city.City === selectedCity);
  if (city) {
    displayCityInfo(city);
  } else {
    console.error('City data not found');
  }
}

function displayCityInfo(city) {
  const cityInfo = document.getElementById('cityInfo');

  // Create the table element
  const table = document.createElement('table');
  table.classList.add('city-table');

  // Create the table rows
  const rows = [
    { label: 'Rank :', value: city.Rank },
    { label: 'City :', value: city.City },
    { label: 'Population (2011) :', value: city.Population_2011 },
    { label: 'Population (2001)  :', value: city.Population_2001 },
    { label: 'State or Union Territory :', value: city.State_UnionTerritory }
  ];

  // Iterate over the rows and create table cells
  rows.forEach(row => {
    const tr = document.createElement('tr');
    const labelCell = document.createElement('td');
    const valueCell = document.createElement('td');

    labelCell.innerHTML = `<strong>${row.label}</strong>`;
    valueCell.textContent = row.value;
    valueCell.style.color = '#0F6292';
    valueCell.style.fontWeight = 'bold';

    tr.appendChild(labelCell);
    tr.appendChild(valueCell);
    table.appendChild(tr);
  });

  // Clear existing content and append the table
  cityInfo.innerHTML = '';
  cityInfo.appendChild(table);
}

// Load the city data and populate the dropdown on page load
loadCityData();


