import { Band } from './../js/band.js';
import { Inventory } from './../js/inventory.js';
$(document).ready(function() {
  let band
  $('#bandNameInput').submit(function(event) {
    event.preventDefault();
    let name = $("#name").val()
    band = new Band(name)
    $('#welcome').slideUp();
    $('#bandName').text(band.name)
    $('#beginning').show()
  })

  $('#getInstrumentsForm').submit(function(event) {
    event.preventDefault();
    let store = $("input:radio[name=musicstore]:checked").val();

    console.log($("#musicstore").val())
    $('#beginning').slideUp()
    if (store === "pawn") {
      $('#pete').slideDown()
    } else {
      $('#archibald').slideDown()
    }
  })
})
