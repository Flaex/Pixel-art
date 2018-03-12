// Build table from form's input data

const width = $('#input_width');
const height = $('#input_height');
function makeGrid() {
  let rows = width.val()
  let columns = height.val();
  for(tr=1; tr<=rows; tr++) { // Build table rows
    $('#pixel_canvas').append('<tr></tr>');
  }
  for(td=1; td<=columns; td++){ // Build table columns
    $('tr').append('<td></td>');
  }
}

// Submit button
$('#sizePicker').submit(function(e) {
  e.preventDefault();  //prevent form from submitting
  let tableRows = $('#pixel_canvas').find('tr');
  tableRows.remove();
  makeGrid();
});

// Applying color to td's background
$('#pixel_canvas').on('click','td', function(e) {
  let pickedColor = $('#colorPicker').val();
  $(e.target).css('background-color', pickedColor);
});
