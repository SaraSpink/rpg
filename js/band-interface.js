import { Band } from './../js/band.js';
import { Inventory } from './../js/inventory.js';
$(document).ready(function() {
  let band;
  $('#bandNameInput').submit(function(event) {
    event.preventDefault();
    let name = $("#name").val()
    band = new Band(name);

    $('#status').slideDown();
    $('#balance').text(band.addPoints(band.points));
    $('#instruments').text(band.instruments);
    $('#chords').text(band.chords)
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
    $('#pete').slideUp();
    if (instrument !== "6") {
      band.addInstrument(instrument)
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)
    } else if  (band.addPoints(band.points) < 1){
      $('#loser').show();
    } else {
      $('#practiceBar').show();
    };
  });

  $('#archibaldInstruments').submit(function(event) {
    event.preventDefault();
    let instrument = $("input:radio[name=instrument]:checked").val();
    $('#archibald').slideUp();
    if (instrument !== "6") {
      band.addInstrument(instrument)
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)
    } else if  (band.addPoints(band.points) < 1){
      $('#loser').show();
    } else {
      $('#practiceBar').show();
    };
  });

  $('#practiceBar').submit(function(event) {
    event.preventDefault();
    $('#practiceBar').fadeOut()
    let practiceChoice =
    $("input:radio[name=practiceChoice]:checked").val();
    if (practiceChoice === "practice") {
      $('#practice').slideDown();
    } else {
      $('#bar').slideDown();
    }
  })

  $('#practiceForm').submit(function(event) {
    event.preventDefault();
    $('#practice').fadeOut()
    let practiceTime = $("input:radio[name=practiceTime]:checked").val();
    if (practiceTime === "stairway") {
      $('#noStairway').slideDown()
    } else if (practiceTime = "circleOfFifths") {
      band.addChord(0)
      band.addChord(1)
      alert("You just added two chords to your library. Welcome to stardom! Your gigs will be worth more money now. Fuckin' epic, dude or dudette!")
      $('#home').slideDown()
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)
    } else {
      band.addChord(2)
      alert("You just a chord to your library. Way to play! Your gigs will be worth more money now. Fuckin' epic, dude or dudette!")
      $('#home').slideDown()
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)
    }

  })

});
