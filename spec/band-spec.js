import { Band } from './../js/band.js';
import { Inventory } from './../js/inventory.js';

describe('Band', function() {
  let band;

  beforeEach(function() {
    band = new Band()
  });
  it('Creates a band with a name', () => {
    const newBand = new Band("RockStar")
    expect(newBand.name).toEqual("RockStar")
  });

  it('Starts bands with two chords', () => {
    expect(band.chords).toEqual(['C', 'G'])
  });

  it('Starts bands with 30 points', () => {
    expect(band.addPoints(band.points)).toEqual(50)
  });

  it('Adds a Chord to a band and calculates points based on band chord inventory', function() {
    band.addChord(0)
    expect(band.chords).toEqual(['C', 'G', 'A'])
    expect(band.addPoints(band.points)).toEqual(52)
  });

  it("Calculates points based on a band's instrument inventory", function() {
    band.addInstrument(3)
    band.addInstrument(4)
    expect(band.addPoints(band.points)).toEqual(-650)
    expect(band.instruments).toEqual(['Ukelele', 'Clarinet', 'Violin'])
  });

  it("Calculates points based on a band's extras inventory", function() {
    band.addExtras(4)
    expect(band.addPoints(band.points)).toEqual(200)
    expect(band.extras).toEqual(['demo tape'])
  });
});
