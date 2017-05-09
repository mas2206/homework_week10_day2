var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function() {

  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;
  var dinosaur4;
  var dinosaur5;

  beforeEach(function() {
    park = new Park();
    dinosaur1 = new Dinosaur({type: "Tyrannosaurus", offspring: 1});
    dinosaur2 = new Dinosaur({type: "Velociraptor", offspring: 5});
    dinosaur3 = new Dinosaur({type: "Triceratops", offspring: 3});
    dinosaur4 = new Dinosaur({type: "Triceratops", offspring: 4});
    dinosaur5 = new Dinosaur({type: "Pterodactyl", offspring: 8});
  });

  it("should start empty", function() {
    assert.equal(0, park.enclosure.length);
  });

  it("can add a dinosaur to the enclosure", function() {
    park.addDinosaur(dinosaur1);
    assert.equal(1, park.enclosure.length);
  });

  it("can remove dinosaurs of a particular type", function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.removeDinosaurByType("Triceratops");
    assert.equal(3, park.enclosure.length);
  });

});