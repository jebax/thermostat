$(document).ready(function() {
  var thermostat = new Thermostat();
  updateCurrentTemperature()
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

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=020d9ffefd597aafa2a153548f62b9f1&units=metric', function(data) {
    console.log(data)
    $('#outside-temperature').text(data.main.temp);
  })

  function updateCurrentTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  }
});
