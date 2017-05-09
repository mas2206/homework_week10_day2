var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function() {

  var dinosaur;

  beforeEach(function() {
    dinosaur = new Dinosaur({type: "Velociraptor", offspring: 5});
  });

  it("should have a type", function() {
    assert.equal("Velociraptor", dinosaur.type);
  });

  it("should have a number of offspring", function() {
    assert.equal(5, dinosaur.offspring);
  });

});