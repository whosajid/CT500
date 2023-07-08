import cities from './cities.js';
import countries from './countries.js';
import timezones from './timezones.js';


// Autocomplete function
function autocomplete(inp, arr) {
  let currentFocus;

  inp.addEventListener("input", function (e) {
    let val = this.value;

    // Close any already open lists of autocompleted values
    closeAllLists();

    if (!val) {
      return;
    }

    currentFocus = -1;

    // Create a DIV element that will contain the items (values)
    const autocompleteList = document.createElement("div");
    autocompleteList.setAttribute("id", this.id + "autocomplete-list");
    autocompleteList.setAttribute("class", "autocomplete-items");

    // Append the DIV element as a child of the autocomplete container
    this.parentNode.appendChild(autocompleteList);

    for (let i = 0; i < arr.length; i++) {
      // Check if the item starts with the same letters as the text field value
      if (
        arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()
      ) {
        // Create a DIV element for each matching element
        const autocompleteItem = document.createElement("div");

        // Make the matching letters bold
        autocompleteItem.innerHTML =
          "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        autocompleteItem.innerHTML += arr[i].substr(val.length);

        // Insert a hidden input field that will hold the current value
        autocompleteItem.innerHTML +=
          "<input type='hidden' value='" + arr[i] + "'>";

        // Execute a function when someone clicks on the item value
        autocompleteItem.addEventListener("click", function (e) {
          // Insert the value for the autocomplete text field
          inp.value = this.getElementsByTagName("input")[0].value;

          // Close the list of autocompleted values
          closeAllLists();
        });


        autocompleteList.appendChild(autocompleteItem);
      }
    }
  });

  inp.addEventListener("keydown", function (e) {
    let autocompleteList = document.getElementById(
      this.id + "autocomplete-list"
    );
    if (autocompleteList) {
      autocompleteList = autocompleteList.getElementsByTagName("div");
      if (e.keyCode === 40) {
        // Arrow down key
        
        e.preventDefault(); // Prevents the default behavior of the arrow key

        currentFocus++;
        addActive(autocompleteList);
        autocompleteList[currentFocus].scrollIntoView({ block: "nearest" });
      } else if (e.keyCode === 38) {
        // Arrow up key
        e.preventDefault(); // Prevents the default behavior of the arrow key

      currentFocus--;
      addActive(autocompleteList);
      autocompleteList[currentFocus].scrollIntoView({ block: "nearest" });
    } else if (e.keyCode === 13) {
        // Enter key
        e.preventDefault();
        if (currentFocus > -1) {
          if (autocompleteList) {
            autocompleteList[currentFocus].click();
          }
        } else {
          submitCity();
        }
      }
    }
  });

  function addActive(autocompleteItems) {
    if (!autocompleteItems) {
      return;
    }

    removeActive(autocompleteItems);

    if (currentFocus >= autocompleteItems.length) {
      currentFocus = 0;
    }

    if (currentFocus < 0) {
      currentFocus = autocompleteItems.length - 1;
    }

    autocompleteItems[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(autocompleteItems) {
    for (let i = 0; i < autocompleteItems.length; i++) {
      autocompleteItems[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists() {
    const autocompleteItems =
      document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < autocompleteItems.length; i++) {
      autocompleteItems[i].parentNode.removeChild(autocompleteItems[i]);
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

// Initialize autocomplete on the input field
const inputCity = document.getElementById("inputCity");
autocomplete(inputCity, cities);

// Fetches the weather data from the OpenWeatherMap API
async function fetchWeather(city, country) {
  const apiKey = "API-KEY"; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const temperature = Math.round(data.main.temp);

    return temperature;
  } catch (error) {
    console.log(
      `Error fetching weather for ${city}, ${country}: ${error}`
    );
    return null;
  }
}

// Fetches the current time based on the timezone
function fetchTime(timezone) {
  const zone = luxon.IANAZone.isValidZone(timezone) ? timezone : null;
  const now = luxon.DateTime.now().setZone(zone);
  return now.isValid ? now.toFormat("h:mm a") : "Invalid DateTime";
}

function deleteCity(cityName) {
  const resultContainer = document.getElementById("resultContainer");
  const cityCard = resultContainer.querySelector(
    `[data-city="${cityName}"]`
  );

  if (cityCard) {
    // Remove the city card from the result container
    resultContainer.removeChild(cityCard);
    error.textContent = `${cityName} removed from the page!`
    // Remove the city from localStorage
    const savedCities = JSON.parse(localStorage.getItem("cities")) || [];
    const updatedCities = savedCities.filter((city) => city !== cityName);
    localStorage.setItem("cities", JSON.stringify(updatedCities));
  }
}

// Add an event listener to the form submission
const cityForm = document.getElementById("cityForm");
cityForm.addEventListener("submit", function(event) {
  event.preventDefault();
  submitCity();
});

// Add an event listener to the reset button
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function() {
  resetCities();
});

// Error messages
const error = document.querySelector(".error");

// Handles the form submission
function submitCity() {
  const autocompleteItems = document.querySelector(".autocomplete-items");
  if(autocompleteItems){
    autocompleteItems.remove();
  }
  const cityName = inputCity.value;
  const lowercaseCityName = cityName.toLowerCase();
  const cityIndex = cities.findIndex(city => city.toLowerCase() === lowercaseCityName); // Compare in a case-insensitive manner
  const resultContainer = document.getElementById("resultContainer");

  // Check if the entered city is valid
  if (cityIndex !== -1) {
    // Check if the city already exists in the result container
    const existingCity = Array.from(resultContainer.children).find(element => element.dataset.city.toLowerCase() === lowercaseCityName);
    if (existingCity) {
      error.textContent = `${cityName} already exists on the page!`;
      return;
    }
    error.textContent = "";
    const country = countries[cityIndex];
    const timezone = timezones[cityIndex];

    const div = document.createElement("div");
    div.classList.add("card");

    const temp = document.createElement("h2");
    const city = document.createElement("h3");
    const countryElement = document.createElement("p");
    const time = document.createElement("p");

    fetchWeather(cityName, country)
      .then((temperature) => {
        const currentTime = fetchTime(timezone);

        temp.textContent = temperature ? `${temperature}°C` : "N/A";
        city.textContent = cities[cityIndex]; // Use the actual city name from the array
        countryElement.textContent = country;
        time.textContent = currentTime;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("removeCard");
        deleteButton.textContent = "x";
        deleteButton.addEventListener("click", function () {
          // Call the deleteCity function passing the cityName
          deleteCity(cityName);
        });

        div.appendChild(city);
        div.appendChild(countryElement);
        div.appendChild(temp);
        div.appendChild(time);
        div.appendChild(deleteButton);

        div.setAttribute("data-city", cities[cityIndex]); // Use the actual city name from the array
        // resultContainer.appendChild(div);
        resultContainer.insertBefore(div, resultContainer.firstChild);
        

        // Clear the input field after submission
        inputCity.value = "";

        const savedCities =
          JSON.parse(localStorage.getItem("cities")) || [];
        if (!savedCities.includes(cityName)) {
          savedCities.push(cityName);
          localStorage.setItem("cities", JSON.stringify(savedCities));
          error.textContent = `${cityName} added to the page!`;
        }
      })
      .catch((error) => {
        console.log(
          `Error fetching weather for ${cityName}, ${country}: ${error}`
        );
        alert("Error fetching weather data");
      });
  } else {
    error.textContent = `Sorry, ${cityName} doesn't exist in the 500 cities list!`;
  }
  
}


// Reset all cities

function resetCities() {
  
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = ""; // Clear the result container

  // Clear the cities from localStorage
  localStorage.removeItem("cities");

  // Display default cities
  defaultCities.forEach((cityName) => {
    inputCity.value = cityName;
    submitCity();
  });
}

// Array of default cities
const defaultCities = ["Tokyo", "New York", "Paris", "Shanghai", "Sao Paulo", "Mumbai", "Beijing", "Cairo", "London", "Mexico City", "Montreal", "Los Angeles"];

// Load default cities on page load
window.addEventListener("DOMContentLoaded", function () {
  const savedCities = JSON.parse(localStorage.getItem("cities")) || [];
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = ""; // Clear the result container

  // Display saved cities if any
  savedCities.forEach((cityName) => {
    inputCity.value = cityName;
    submitCity();
  });

  // Display default cities only if no saved cities exist
  if (savedCities.length === 0) {
    defaultCities.forEach((cityName) => {
      inputCity.value = cityName;
      submitCity();
    });
  }
});



// Footer
function loadFooter() {
  const script = document.createElement('script');
  script.src = 'footer.js';
  document.head.appendChild(script);
}

setTimeout(loadFooter, 1000);