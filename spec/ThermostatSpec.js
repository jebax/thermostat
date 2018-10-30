describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe('Thermostat temperature', function() {

    it('starts off at 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20);
    })

    it('can be increased by 1', function() {
      thermostat.increaseTemperature()
      expect(thermostat.temperature()).toEqual(21);
    })

    it('can be decreased by 1', function() {
      thermostat.decreaseTemperature()
      expect(thermostat.temperature()).toEqual(19);
    })

    it('has a minimum of 10', function() {
      expect(thermostat.MIN_TEMPERATURE).toEqual(10);
    })

    it('cannot go below 10', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.decreaseTemperature()
      }
      expect(thermostat.temperature()).toEqual(10);
    })

    it('cannot go above 25 if power saving mode is on', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemperature()
      }
      expect(thermostat.temperature()).toEqual(25);
    })
  })

  describe('Power saving mode', function() {
    it('should be on by default', function() {
      expect(thermostat.powerSavingMode).toBe(true);
    })
  })
})
