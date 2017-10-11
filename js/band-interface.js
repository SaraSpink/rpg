import { Band } from './../js/band.js';
import { Inventory } from './../js/inventory.js';
$(document).ready(function() {
  let band = new Band(name);
  $('#balance').text(band.addPoints(band.points));
  $('#instruments').text(band.instruments);

  $('#bandNameInput').submit(function(event) {
    event.preventDefault();
    let name = $("#name").val()
    console.log(band.addPoints(band.points))
    $('#welcome').slideUp();
    $('#bandName').text(band.name);
    $('#beginning').show();
  })

  $('#getInstrumentsForm').submit(function(event) {
    event.preventDefault();
    let store = $("input:radio[name=musicstore]:checked").val();
    $('#beginning').slideUp()
    if (store === "pawn") {
      $('#pete').slideDown()
    } else {
      $('#archibald').slideDown()
    };
  });

  $('#peteInstruments').submit(function(event) {
    event.preventDefault();
    let instrument = $("input:radio[name=instrument]:checked").val();
    console.log(instrument);
    $('#pete').slideUp();
    band.addInstrument(instrument)
    $('#balance').text(band.addPoints(band.points));
    $('#instruments').text(band.instruments);
    if (band.addPoints(band.points) < 1) {
      $('#loser').show();
    } else {
      $('#practice').show();
    };
  });
});
