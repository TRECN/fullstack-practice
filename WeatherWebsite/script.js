document.addEventListener("DOMContentLoaded", function () {
    var apiKey = "3bdb8ccccbc9a2bc4a2a07e4acdb6411"; 
    var units = "metric"; 
  
    function fetchWeatherData(location) {
      var url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        location +
        "&appid=" +
        apiKey +
        "&units=" +
        units;
  
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          displayWeather(data);
        })
        .catch(function () {
          alert("Error retrieving weather data");
        });
  
      var weeklyUrl =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        location +
        "&appid=" +
        apiKey +
        "&units=" +
        units;
  
      fetch(weeklyUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          displayWeeklyWeather(data);
        })
        .catch(function () {
          alert("Error retrieving weekly weather data");
        });
    }
  
    // Displaying today's weather
    function displayWeather(data) {
      var cityName = document.getElementById("cityName");
      var temperature = document.getElementById("temperature");
      var description = document.getElementById("description");
      var windSpeed = document.getElementById("windSpeed");
      var humidity = document.getElementById("humidity");
     
  
      cityName.textContent = data.name;
      temperature.textContent = Math.round(data.main.temp)+'°C';
      description.textContent = data.weather[0].description;
      windSpeed.textContent = "Wind Speed: " + data.wind.speed + " m/s";
      humidity.textContent = "Humidity: " + data.main.humidity + "%";
    }
  
    // Displaying weekly weather
    function displayWeeklyWeather(data) {
      var weeklyWeather = data.list;
      var weeklyWeatherContainer = document.getElementById("weeklyWeather");
  
      weeklyWeatherContainer.innerHTML = "";
  
      var dates = [];
  
      weeklyWeather.forEach(function (weather) {
        var date = weather.dt_txt.split(" ")[0];
        if (!dates.includes(date)) {
          dates.push(date);
          var temperature = Math.round(weather.main.temp);
          var description = weather.weather[0].description;
          var icon = weather.weather[0].icon;
  
          var weatherCard = document.createElement("div");
          weatherCard.classList.add("weather-card");
  
          var weatherIcon = document.createElement("img");
          weatherIcon.src =
            "https://openweathermap.org/img/w/" + icon + ".png";
  
          var dateElement = document.createElement("div");
          dateElement.textContent = date;
  
          var temperatureElement = document.createElement("div");
          temperatureElement.textContent = temperature+'°C';
  
          var descriptionElement = document.createElement("div");
          descriptionElement.textContent = description;
  
          weatherCard.appendChild(weatherIcon);
          weatherCard.appendChild(dateElement);
          weatherCard.appendChild(temperatureElement);
          weatherCard.appendChild(descriptionElement);
  
          weeklyWeatherContainer.appendChild(weatherCard);
        }
      });
    }
  
    // Getting unit
    function getTemperatureUnit() {
      var toggleUnits = document.getElementById("toggleUnits");
      return toggleUnits.checked ? "°F" : "°C";
    }
  
    // Function to handle search button click event
    function handleSearch() {
      var locationInput = document.getElementById("locationInput");
      var location = locationInput.value;
      fetchWeatherData(location);
    }
    
    // Event listeners
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", handleSearch);
    document.addEventListener('keydown',(e)=>{
        if(e.key==="Enter")
            handleSearch();
      })
  
    var toggleUnits = document.getElementById("toggleUnits");
    toggleUnits.addEventListener("change", function () {
      var temperature = document.getElementById("temperature");
      temperature.textContent = Math.round(
        convertTemperature(parseFloat(temperature.textContent))
      ) + getTemperatureUnit();
  
      var weeklyWeatherContainer = document.getElementById("weeklyWeather");
      var temperatures = weeklyWeatherContainer.getElementsByClassName(
        "temperature"
      );
      for (var i = 0; i < temperatures.length; i++) {
        temperatures[i].textContent = Math.round(
          convertTemperature(parseFloat(temperatures[i].textContent))
        );
      }
    });
  
    // Function to convert temperature units
    function convertTemperature(temperature) {
      if (toggleUnits.checked) {
        // Convert Celsius to Fahrenheit
        return (temperature * 9) / 5 + 32;
        
        
      } else {
        // Convert Fahrenheit to Celsius
        return ((temperature - 32) * 5) / 9;
      }
    }
  
    // Fetch weather data for the user's current location
    function fetchCurrentLocationWeather() {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
  
          var currentLocationUrl =
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&appid=" +
            apiKey +
            "&units=" +
            units;
  
          fetch(currentLocationUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              displayWeather(data);
            })
            .catch(function () {
              alert("Error retrieving weather data");
            });
  
          var currentLocationWeeklyUrl =
            "https://api.openweathermap.org/data/2.5/forecast?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&appid=" +
            apiKey +
            "&units=" +
            units;
  
          fetch(currentLocationWeeklyUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              displayWeeklyWeather(data);
            })
            .catch(function () {
              alert("Error retrieving weekly weather data");
            });
        },
        function () {
          alert("Unable to retrieve your location");
        }
      );
    }
  
    fetchCurrentLocationWeather();
  });

 
  