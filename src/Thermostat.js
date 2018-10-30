'use strict';

function Thermostat() {
  this._temperature = 20;
  this.MIN_TEMPERATURE = 10
  this._powerSavingMode = true;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
}

Thermostat.prototype.isPowerSavingMode = function() {
  return this._powerSavingMode === true
}

Thermostat.prototype.increaseTemperature = function() {
  if (this.isPowerSavingMode()) {
    if (this.temperature() < 25) {
      this._temperature ++;
    }
  } else {
    if (this.temperature() < 32) {
      this._temperature ++;
    }
  }
}

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature() > this.MIN_TEMPERATURE) {
    this._temperature --;
  }
}

Thermostat.prototype.togglePowerSavingMode = function() {
  if (this.isPowerSavingMode()) {
    this._powerSavingMode = false;
  } else {
    this._powerSavingMode = true;
  }
}

Thermostat.prototype.resetTemperature = function() {
  this._temperature = 20;
}
