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

  function updateCurrentTemperature() {
    $('#temperature').text(thermostat.temperature());
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  }
});
