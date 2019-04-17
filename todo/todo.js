
//newRow is the html for a new list line
var newRow = "<tr><td class='items'><h3><input type='text' name='' placeholder='New Item'></h3></td><td class='check' ><h3><i class='far fa-check-circle'></i></h3></td><td class='trash'><h3><i class='far fa-trash-alt'></i></h3></td></tr>"


$("#addItem").click(function () { //adds new row when Add Item is clicked

  $("#list").append(newRow) //add new line
  $('input:text:visible').each(function(){ //change focus to the next empty input
        focusChange();
      })
})




$("#list").on('keypress', "input"  ,function () { //delegated-for dynamically added rows
  if (event.which===13) { //if enter is pressed lose focus from the line
    $(this).blur();

    var counter = emptyRows()
    if (counter===0) {
      $("#list").append(newRow) //if there are no empty lines add a new one
      focusChange(); //change focus to new line

    }else {
      focusChange(); //change focus to first empty line
    }
  } //end first if statement
  console.log(counter);
})


//if down arrow is pressed move focus to line below
$("#list").on('keydown', "input"  ,function () { //delegated-for dynamically added rows
  if (event.which===40) {
    $(this).closest('tr').next('tr').find('input').focus();

  }
})


//if up arrow is pressed move focus to the line above
$("#list").on('keydown', "input"  ,function () { //delegated-for dynamically added rows
  if (event.which===38) {
    $(this).closest('tr').prev('tr').find('input').focus();

  }
})





//if check mark is clicked change text color and line through, also change focus to next empty line
$("#list").on('click', '.check', function () {
  if ($(this).parent().find('input').val()!=='') {
    $(this).parent().find('input').toggleClass('completed');
  }

  focusChange()
})

//if trashcan is clicked remove the line and change focus to next empty line
$("#list").on('click', '.trash', function () {
  $(this).parent().remove();
  focusChange()
})


//mouse enters side nav show all

$('.leftNav').mouseenter(function () {

$("#sideNav").slideDown()
$('#sideNavIconsOnly').hide(500)
})

//mouse leaves side nav show icons only
$('.leftNav').mouseleave(function () {
  $("#sideNav").hide('slide')
  $("#sideNavIconsOnly").slideDown()
})






// function for checking if all list rows a have value

function emptyRows() {
  var rowValues=document.querySelectorAll('.items input'); //get all inputs inside td.items

  var counter = 0;
  for (var i = 0; i < rowValues.length; i++) {
    if (rowValues[i].value==='') { //if all td.items inputs do not have a value counter = 1
      counter=1; //on the keypress if counter =1 a new row will not be created
    }
  }
  return counter;
}


//function to change the focus
function focusChange() {
  $('input:text:visible').each(function(){ //change focus to the next empty input
          if($(this).val().length === 0)
          {
              $(this).focus();
              return false;
          }
      });
}
