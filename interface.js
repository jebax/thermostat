$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature());
  $(':checkbox').click();

  $('#up').click(function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature());
  })

  $('#down').click(function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature());
  })

  $('#reset').click(function() {
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.temperature());
  })

  $(':checkbox').click(function() {
    thermostat.togglePowerSavingMode();

    $('#on-or-off').text(function() {
      if (thermostat.isPowerSavingMode()) {
        return 'on'
      } else {
        return 'off'
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

});
