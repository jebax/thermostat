'use strict';

function Thermostat() {
  this._temperature = 20;
  this.MIN_TEMPERATURE = 10
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
}

Thermostat.prototype.increaseTemperature = function() {
  this._temperature ++;
}

Thermostat.prototype.decreaseTemperature = function() {
  if (this._temperature > this.MIN_TEMPERATURE) {
    this._temperature --;
  }
}
