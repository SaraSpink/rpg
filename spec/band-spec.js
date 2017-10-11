import { Band, Inventory } from './../js/band.js';

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
});
