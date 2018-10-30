'use strict';

function Thermostat() {
  this._temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE_PSM_ON = 25;
  this.MAX_TEMPERATURE_PSM_OFF = 32;
  this.LOW_ENERGY_USAGE_LIMIT = 18;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 25;
  this._powerSavingMode = true;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
}

Thermostat.prototype.isPowerSavingMode = function() {
  return this._powerSavingMode === true
}

Thermostat.prototype.up = function() {
  if (this.isPowerSavingMode()) {
    if (this.temperature() < this.MAX_TEMPERATURE_PSM_ON) {
      this._temperature ++;
    }
  } else {
    if (this.temperature() < this.MAX_TEMPERATURE_PSM_OFF) {
      this._temperature ++;
    }
  }
}

Thermostat.prototype.down = function() {
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

Thermostat.prototype.currentEnergyUsage = function() {
  if (this._temperature < this.LOW_ENERGY_USAGE_LIMIT) {
    return "low-usage"
  } else if (this._temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return "medium-usage"
  } else {
    return "high-usage"
  }
}
