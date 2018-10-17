const assert = require ("assert");
const Taxi = require ("../taxi.js");

describe("Taxi", function(){

  let taxi;

  beforeEach(function(){
    taxi = new Taxi("Toyota", "Prius", "Dave");
  })

  it("should have a manufacturer", function () {
    const actual = taxi.manufacturer
    assert.strictEqual(actual, "Toyota");
  });

  it("should have a model", function () {
    const actual = taxi.model
    assert.strictEqual(actual, "Prius");
  });

  it("should have a driver", function () {
    const actual = taxi.driver
    assert.strictEqual(actual, "Dave");
  });

  describe("passengers", function () {

    it("should start with no passengers", function () {
      assert.deepStrictEqual(taxi.passengers, []);
    });

    it("should return number of passengers", function () {
      assert.deepStrictEqual(taxi.numberOfPassengers(), 0 );
    })

    it("should add a passenger", function () {
      taxi.addPassenger("Ant");
      taxi.addPassenger("Dec");
      assert.deepStrictEqual(taxi.numberOfPassengers(), 2 )
    })

    it("should remove passenger by name", function () {
      taxi.addPassenger("Ant");
      taxi.addPassenger("Dec");
      taxi.removePassengerByName("Ant");
      const expected = 1
      const actual = taxi.numberOfPassengers();
      assert.deepStrictEqual(actual, expected);
      });

    it('should be able to remove all passengers', function () {
      taxi.addPassenger("Ant");
      taxi.addPassenger("Dec");
      taxi.removeAllPassengers();
      const actual = taxi.numberOfPassengers();
      assert.strictEqual(actual, 0);
});

  });

});
