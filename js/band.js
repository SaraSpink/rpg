export class Band {
  constructor(name) {
    this.name = name;
    this.chords = ['C', 'G']
    this.inventory = ['Ukelele']
    this.points = [3]
  }

  addPoints(array) {
    let total = array.reduce(function(accumulator, currentValue) {
      return (accumulator + currentValue);
    });
    return total;
  }
}
