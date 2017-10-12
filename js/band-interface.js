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
      $('#gig').slideDown()
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)
    } else {
      band.addChord(2)
      alert("You just added a chord to your library. Way to play! Your gigs will be worth more money now. Fuckin' epic, dude or dudette!")
      $('#gig').slideDown()
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
      band.transaction(-5)
      $('#bar').hide()
      $('#home').show()
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)

    } else if (drink === "fireball"){
      $('#bar').hide()
      alert("Uh oh, you always start playing Stairway To Heavent when you drink fireball!")
      $('#noStairway').show()
    } else {
      alert("Your new friend knows about a gig!")

      $('#bar').hide()
      $('#gig').show()
    }
  })

  $('#rentForm').submit(function(event) {
    event.preventDefault();
    $('#rentForm').slideDown()
    let rent = $("input:radio[name=rent]:checked").val();
    if (rent === "pay") {
      band.transaction( (band.addPoints(band.points)* -1) + 1 )
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)
      $('#home').hide()
      $('#job').show()
    } else {
      $('#home').hide()
      $('#bar').show()
    }
  })

  $('#gigForm').submit(function(event) {
    event.preventDefault();
    let gig = $("input:radio[name=gig]:checked").val();
    if (gig === "tomSawyer") {
      alert("This kid's birthday party paid 50 Javis but you were way off base with the Rush thing. They charge you 5 Javis for making them listen to Canadian music.")
      band.transaction(-5)
      band.transaction(50)
      $('#gig').hide()
      $('#home').show()
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)
    } else if (gig === "bakerStreet"){
      alert("Wah wah wah wah wah waaaaaaaaaah, wa wah wah wa wa waaaaaaaaaaaa... you are unmatched on the horn! Ten dollar tip! (And that's on top of the 50 you were paid for this gig, nice work)")
      band.transaction(10)
      band.transaction(50)
      $('#gig').hide()
      $('#home').show()
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)
    } else if (gig === "moonageDaydream"){
      alert("Who doesn't love David Bowie? Jerks, that's who. Luckily there are no jerks here. Get 50 Javis for the gig and a 20 Javi tip.")
      band.transaction(20)
      band.transaction(50)
      $('#gig').hide()
      $('#home').show()
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)
    } else {
      $('#gig').hide()
      $('#noStairway').show()
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)
    }
  })

  $('#jobForm').submit(function(event) {
    event.preventDefault()
    let reaction = $("input:radio[name=job]:checked").val();
    if (reaction === "throwDrink") {
      band.transaction(band.addPoints(band.points) * -1)
      alert("You got fired, and your landlord sued you for the rest of the rent. You're out of money, and had to sell your instruments for weed. Best of luck!")
      $('#job').hide()
      $('#loser').show()
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)

    } else if (reaction === "smilePolitely") {
      band.transaction(40)
      alert('Nice. She tipped you. And you peed in her coffee. Great night. Time to hit the music store again.')
      $('#job').hide()
      $('#beginning').show()
      $('#balance').text(band.addPoints(band.points));
      $('#instruments').text(band.instruments);
      $('#chords').text(band.chords)
    } else {
      $('#job').hide()
      $('#jail').show()
    }

  })
});
