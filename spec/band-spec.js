import { Band } from './../js/band.js';
import { Inventory } from './../js/inventory.js';

describe('Band', function() {
  let band;

  beforeEach(function() {
    band = new Band()
  });
  it('Creates a band with a name', function() {
    const newBand = new Band("RockStar")
    expect(newBand.name).toEqual("RockStar")
  });

  it('Starts bands with two chords', function() {
    expect(band.chords).toEqual(['C', 'G'])
  });

  it('Starts bands with two chord points', function() {
    expect(band.addPoints(band.points)).toEqual(3)
  });

  it('Adds a Chord to a band and calculates points based on band chord inventory', function() {
    band.addChord(2)
    expect(band.chords).toEqual(['C', 'G', 'A'])
    expect(band.addPoints(band.points)).toEqual(5)
  });

  it("Calculates points based on a band's instrument inventory", function() {
    band.addInstrument(3)
    band.addInstrument(4)
    expect(band.addPoints(band.points)).toEqual(501)
    expect(band.instruments).toEqual(['Ukelele', 'Sax', 'Kazoo'])
  });
});
