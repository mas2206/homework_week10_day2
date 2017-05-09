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

}

module.exports = Park;