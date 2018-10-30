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
    console.log(thermostat.isPowerSavingMode());
    $('#temperature').text(thermostat.temperature());
  })
})
