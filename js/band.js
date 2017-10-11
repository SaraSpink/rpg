import { Inventory } from './../js/inventory.js';
export class Band {
  constructor(name) {
    this.name = name;
    this.chords = ['C', 'G']
    this.instruments = ['Ukelele']
    this.extras = []
    this.points = [50]
  }

  addPoints(array) {
    let total = array.reduce(function(accumulator, currentValue) {
      return (accumulator + currentValue);
    });
    return total;
  }

  addChord(index){
    const availableItems = new Inventory()
    this.chords.push(availableItems.chordInventory[index]);
    this.points.push(availableItems.chordPoints[index]);
  }

  addInstrument(index){
    const availableItems = new Inventory()
    this.instruments.push(availableItems.instrumentInventory[index]);
    this.points.push(availableItems.instrumentPoints[index]);
  }

  addExtras(index){
    const availableItems = new Inventory()
    this.extras.push(availableItems.extrasInventory[index]);
    this.points.push(availableItems.extrasPoints[index]);
  }
}
