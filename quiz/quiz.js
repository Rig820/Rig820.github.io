var answers={1:"", 2:"", 3:''}
var dogType = ''
//starting value for the range
//if this isn't here and mid is chosen without moving the slider
//the value will be recorded as undefined
$(document).ready(function () {
  answers['2'] = $('#energy').val();
})

$('.hangLow').change(function () {

  answers['1']=$(this).val();
  console.log(answers['1'])
})



$('#earsButton').click(function () {
  if (answers['1']=='') { //make sure an answer was selected
    alert('Please select an answer.')
  }else{
  $("#earsJumbo").fadeOut(200,function(){
    $('#energyJumbo').fadeIn(200)
})
}
})


// get answer from energy level question
$('#energy').change(function () {
  var level=$("#energy").val()
  if (level==1) {
    $('#energyLabel').text('Low')
  }else if (level==2) {
    $('#energyLabel').text('Mid')
  }else{
    $('#energyLabel').text('High')
  }

answers['2']=level;


})


//fade out question two and fade in question three
$('#energyButton').click(function () {

$("#energyJumbo").fadeOut(200,function(){
  $('#kidsJumbo').fadeIn(200)
})

})

//log answer from question three
$('.withKids').change(function () {
  answers['3']=$(this).val();
  console.log(answers['3'])
})



$('#kidsButton').click(function(){
if (answers['3']=='') { //make sure an answer was selected
  alert("Please select an answer.")
}else{
  $('#kidsJumbo').fadeOut(200,function(){ //fade out question three
    $('#barWrap').fadeIn(function () { //fade in progressbar
// barwrap fade in function
      var dog = yourDog() //set dog to array of dog pic andd dog type
      var dogType = dog[0]
      var dogPic = dog[1]
      //call move func
      move(function () {
        $('#quizResult').fadeIn(function () { //fade in what type of dog you are
          $(this).text(dogType)
      })
      $("#quizResultImg").fadeIn(function () { //fade in the pic of the dog type
        $(this).attr('src',"resultPics/"+dogPic+".jpg").css('height','150px') //"/indexPics/"+dog+"puppy.jpg"
      })
      $("#startOverBtn").fadeIn(2000)
    })
    //end move function
  })
})
}
})


//function to determine which dog you are
function yourDog() {
  if (answers['1']=='earsDown'&& answers['3']=='kidsGood') {
    if (answers['2']==1) {
      dogType="Great Dane!"
      dogPic='greatDane'
    }else if (answers['2']==2) {
      dogType="Beagle!"
      dogPic='beagle'
    }else if (answers['2']==3) {
      dogType="Lab!"
      dogPic='lab'

    }
      return [dogType,dogPic]
    }else if (answers['1']=='earsDown' && answers['3']=="kidsBad") {
      if (answers['2']==1) {
        dogType="Bullmastiff!"
        dogPic='bullmastiff'
      }else if (answers['2']==2) {
        dogType="Dachshund!"
        dogPic='dachshund'
      }else if (answers['2']==3) {
        dogType="Doberman!"
        dogPic='doberman'
    }
    return [dogType,dogPic]

//ears up begin
}else if (answers['1']=='earsUp' && answers['3']=='kidsGood') {

    if (answers['2']==1) {
      dogType="Bulldog!"
      dogPic='bulldog'
    }else if (answers['2']==2) {
      dogType="German Shepard!"
      dogPic='german'
    }else if (answers['2']==3) {
      dogType="Boston!"
      dogPic='boston'

    }
    return [dogType,dogPic]

  }else if (answers['1']=='earsUp' && answers['3']=="kidsBad") {
    if (answers['2']==1) {
      dogType="Jack Russell!"
      dogPic='jackRussell'
    }else if (answers['2']==2) {
      dogType="Border Collie!"
      dogPic='borderCollie'
    }else if (answers['2']==3) {
      dogType="Greyhound!"
      dogPic='greyhound'
  }
return [dogType,dogPic]
}

}




//Function to  make the progressbar progress
function move(callback) { //callback means pass in a function body as an argument/don't run it

  var width = 0;
  var id = setInterval(frame, 20); //every 20 milliseconds run the frame func
  function frame() {
    if (width == 100) {
      clearInterval(id); //if th width of the progressbar is 100 stop the setInterval
      callback() //run  move((function () {$('#quizResult').fadeIn(function () {$(this).text(dog)})}))
    } else {
      width=width+2; //increase width to 100 by 2s
      $('.progress-bar').width(width+"%");
    }
  }

}
