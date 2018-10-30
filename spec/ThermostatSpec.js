describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe('Thermostat temperature', function() {

    it('starts off at 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20);
    })
  })
})
