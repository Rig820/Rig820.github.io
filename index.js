
// set backgrounds in menu class to respective anchors
//makes the entire backfround clickable for the anchor
//
$(".menu .small").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

$(".menu .medium").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

$(".menu .large").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

$(".menu .giant").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

//function for mouseenter to show puppy picture
//and mouseleave to revert to adult picture
function switchPic(dogBreed) {
  $("#"+dogBreed).mouseenter(function(){
    $(this).attr("src","indexPics/"+dogBreed+"Puppy.jpg")
    $(this).css('border-radius','20px')
  })
  $("#"+dogBreed).mouseleave(function(){
    $(this).attr("src","indexPics/"+dogBreed+".jpg")
    $(this).css('border-radius','20px')
  })
}

//array of the breeds
var breeds=["dachshund", "beagle",'borderCollie',"boston", "bulldog","bullmastiff",
"doberman","german","golden","greatDane","greyhound","jackRussell",
"lab","newfoundland","pointer"]

//for each breed type in the breed array use switchPic
breeds.forEach(switchPic)
