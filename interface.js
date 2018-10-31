$(document).ready(function() {
  var thermostat = new Thermostat();
  updateCurrentTemperature();
  displayWeather();

  $(':checkbox').click();

  $('#up').click(function() {
    thermostat.up();
    updateCurrentTemperature()
  })

  $('#down').click(function() {
    thermostat.down();
    updateCurrentTemperature()
  })

  $('#reset').click(function() {
    thermostat.resetTemperature();
    updateCurrentTemperature()
  })

  $(':checkbox').click(function() {
    thermostat.togglePowerSavingMode();

    $('#on-or-off').text(function() {
      if (thermostat.isPowerSavingMode()) {
        return 'ON'
      } else {
        return 'OFF'
      }
    })
  })

  $('#energy-usage').click(function() {
    $('#current-usage').text(function() {
      return thermostat.currentEnergyUsage();
    });
  });

  $('#city-select').change(function() {
    var chosenCity = $('#city-select').val();
    displayWeather(chosenCity);
  })

  function updateCurrentTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  }

  function displayWeather(city = 'London') {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',uk'
    var apiToken = '&appid=020d9ffefd597aafa2a153548f62b9f1'
    var units = '&units=metric'
    $.get(url + apiToken + units, function(data) {
      $('#outside-temperature').text(Math.round(data.main.temp));
    })
    $('#current-city').text(city);
  }
});
