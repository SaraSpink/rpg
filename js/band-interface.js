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
      $('#practiceBar').show();
    }

    if (band.addPoints(band.points) < 1){
      $('#loser').show();
    } else {
      $('#practiceBar').show();
    }

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
      $('#practiceBar').show();
    }

    if (band.addPoints(band.points) < 1){
      $('#loser').show();
    } else {
      $('#practiceBar').show();
    }
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
    } else if (practiceTime === "circleOfFifths") {
      band.addChord(0)
      band.addChord(1)
      alert("You just added two chords to your library. Welcome to stardom! Your gigs will be worth more money now. Fuckin' epic, dude or dudette!")
      $('#home').slideDown()
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)
    } else {
      band.addChord(2)
      alert("You just added a chord to your library. Way to play! Your gigs will be worth more money now. Fuckin' epic, dude or dudette!")
      $('#home').slideDown()
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)
    }
  })

  $('#barForm').submit(function(event) {
    event.preventDefault();
    $('#bar').slideDown()
    let drink = $("input:radio[name=drink]:checked").val();
    if (drink === "whiteRussian") {
      band.buyItem(-5)
      $('#bar').hide()
      $('#home').slideUp()
    } else if (drink === "fireball"){
      $('#bar').hide()
      alert("Uh oh, you always start playing Stairway To Heavent when you drink fireball!")
      $('#noStairway').show()
    } else {
      alert("Your new friend knows about a gig!")

      $('#bar').hide()
      $('#home').show()
    }
  })

  $('#rentForm').submit(function(event) {
    event.preventDefault();
    $('#rentForm').slideDown()
    let rent = $("input:radio[name=rent]:checked").val();
    if (rent === "pay") {
      // wallet = band.addPoints(band.points)
      // newWallet = wallet - wallet + 1
      band.buyItem( (band.addPoints(band.points)* -1) + 1 )

      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)
      $('#gig').show()
    } else {
      $('#job').show()
    }
  })
});
