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
  })
})
