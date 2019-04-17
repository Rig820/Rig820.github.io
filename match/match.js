var dogs={'1':'beagle', '2':'german', '3':'lab', '4':"bulldog",'5':'golden','6':"pointer",
'7':'beagle', '8':'german', '9':'lab', '10':"bulldog",'11':'golden','12':"pointer" }

var flipped=[]//array for randomized pairs of dogs

var doubles=[]//array to make sure no number is chosen twice

var nums=['1','2','3','4','5','6','7','8','9','10','11','12'] //number array for forEach

var cardNum=[]; //array to keep track of selected cards position

var match=[];//array to determine if two cards match

var counter=0; //counter for number of matches 6=games is done

$(document).ready(function () {
  radomTiles()

  $(window).resize(function() { //size each row to the same height as the cards
    var height = $('#1').height()
  $('#r1, #r2, #r3').height(height*1.05)


  }).resize();// This will simulate a resize to trigger the initial run.
})

nums.forEach(switchPic)




$('.restart').click(function() {//starts the game over
    location.reload();
});





//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//the if and the else could be functions

// function to set pics for click event listener
function switchPic(num) {
  $("#"+num).click(function(){
    $("#"+num+"a").attr("src","../indexPics/"+flipped[num-1]+".jpg") //assign proper image to card back
    $("#card"+num).css('transform',' rotateY(180deg)')//flip card
    match.push(flipped[num-1]) //add the flipped cards dog to the match array
    cardNum.push(num) //add the cards number(position) to carNum array

      if (match[0]===match[1]) { //check to see if two selected cards match
        match=[] //if they match clear array for the next turn
        counter++
        $('#'+cardNum[0]+'a').animate({opacity:0},1500) //cardNum represents the id number
        $('#'+cardNum[1]+'a').animate({opacity:0},1500)
        cardNum=[]
        if (counter==6) { //check if there are 6 matches (game done)
          boardHeight=$('#gameBoard').height();
          $('#winner').height(boardHeight);
          setTimeout(function () {
            // $("body").addClass('wonBackground')
            $('#gameBoard').hide();
            $("#winner").fadeIn();
          },1000)

        }
      }else if ((match.length==2)&&(match[0]!==match[1])) { //if match array contains two cards and they don't match
        setTimeout(function () {
          match=[] //clear array for next turn
          $('#card'+cardNum[0]).css('transform',' none')
          $('#card'+cardNum[1]).css('transform',' none')

            cardNum=[]
        },1000)

      }
  })

}

// function to randomize tile pictures
function radomTiles() {
  for (var i = 1; i < 13; i++) {
    var num = Math.floor(Math.random() * 12)+1; //pick a random number
    if (doubles.includes(num)) { //if the random number has already been chosen lower i by 1 and try again
      i--;
      continue;
    }else{
      doubles.push(num) //add chosen number to doubles array
      flipped.push(dogs[num]) //use random number to pick a dog and add it to flipped array

    }
    }
}


//restart quiz

function restart() {
  nums.forEach(function () {
    $('#card'+nums).css('transform',' none')
  })

  $('#winner').fadeOut(1500)
  $("#gameBoard").fadeIn(500)
}
