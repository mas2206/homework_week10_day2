var Park = function() {
  this.enclosure = [];
}

Park.prototype = {

  addDinosaur: function(dinosaur) {
    this.enclosure.push(dinosaur);
  },

  removeDinosaurByType: function(type) {
    for (var dinosaur of this.enclosure) {
      if (dinosaur.type === type) {
        var index = this.enclosure.indexOf(type);
        this.enclosure.splice(index, 1);
      }
    }
  },

  returnDinosaursWithOffspringGreaterThan2: function() {
    var dinosOffspringMoreThan2 = [];
    for (var dinosaur of this.enclosure) {
      if (dinosaur.offspring > 2) {
        dinosOffspringMoreThan2.push(dinosaur);
      }
      return dinosOffspringMoreThan2;
    }
  }

};

module.exports = Park;