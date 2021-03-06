describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe('Thermostat temperature', function() {

    it('starts off at 20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    })

    it('can be increased by 1', function() {
      thermostat.up()
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    })

    it('can be decreased by 1', function() {
      thermostat.down()
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    })

    it('has a minimum of 10', function() {
      expect(thermostat.MIN_TEMPERATURE).toEqual(10);
    })

    it('cannot go below 10', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down()
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    })

    it('cannot go above 25 if power saving mode is on', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up()
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    })

    it('cannot go above 32 if power saving mode is off', function() {
      thermostat.togglePowerSavingMode()
      for (var i = 0; i < 13; i++) {
        thermostat.up()
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    })

    it('can be reset to 20', function() {
      thermostat.resetTemperature()
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    })

    it('has a max temperature of 25 when power saving', function() {
      expect(thermostat.MAX_TEMPERATURE_PSM_ON).toEqual(25);
    })

    it('has a max temperature of 32 when not power saving', function() {
      expect(thermostat.MAX_TEMPERATURE_PSM_OFF).toEqual(32);
    })
  })

  describe('Power saving mode', function() {
    it('should be on by default', function() {
      expect(thermostat.isPowerSavingMode()).toBe(true);
    })

    it('can be toggled', function() {
      thermostat.togglePowerSavingMode()
      expect(thermostat.isPowerSavingMode()).toBe(false);
    })
  })

  describe('Energy usage', function() {
    it('has a low usage temperature limit', function() {
      expect(thermostat.LOW_ENERGY_USAGE_LIMIT).toEqual(18)
    })

    it('has a medium usage temperature limit', function() {
      expect(thermostat.MEDIUM_ENERGY_USAGE_LIMIT).toEqual(25)
    })

    it('is low when temperature is below 18 degrees', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down()
      }
      expect(thermostat.currentEnergyUsage()).toEqual("low-usage")
    })

    it('is medium when temperature is above 17 and below 25 degrees', function() {
      expect(thermostat.currentEnergyUsage()).toEqual("medium-usage")
    })

    it('is high when temperature is above 24 degrees', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.up()
      }
      expect(thermostat.currentEnergyUsage()).toEqual("high-usage")
    })
  })
})
