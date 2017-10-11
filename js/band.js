export class Band {
  constructor(name) {
    this.name = name;
    this.chords = ['C', 'G']
    this.inventory = ['Ukelele']
    this.points = [3]
    this.chordInventory = ['C', 'G', 'A', 'Zminor']
    this.chordPoints = [1, 1, 2, 1000]

  }

  addPoints(array) {
    let total = array.reduce(function(accumulator, currentValue) {
      return (accumulator + currentValue);
    });
    return total;
  }

  addChord(index){
    this.chords.push(this.chordInventory[index]);
    this.points.push(this.chordPoints[index]);
  }

}

export class Inventory {
  constructor() {
    this.items
    this.itemPoints
  }

  items() {
    let total = array.reduce(function(accumulator, currentValue) {
      return (accumulator + currentValue);
    });
    return total;
  }
}
