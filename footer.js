// switch plus /minus sign for footer collapse
 //
 //
 $(document).ready(function(){
   $(window).resize(function() {
   if ($( window ).width()<768) { //if window is less than 768 hide footer list
     $('#care, #adopt, #moreExamples').hide();
     $('#care, #adopt, #moreExamples').removeClass('show')
     $('.minusSign').hide();
     $('.plusSign').show();
     $('#dogCareCol, #dogAdoptCol, #moreExamplesCol').css('border-bottom','1px solid #fff')
   }else  {
     $('.plusSign').hide();
     $('.minusSign').show();
     $('#care, #adopt, #moreExamples').show();
      $('#dogCareCol, #dogAdoptCol, #moreExamplesCol').css('border-bottom','none')

   }
 }).resize(); // This will simulate a resize to trigger the initial run.
 })


function toggler(head, col, list) {
  $("#"+head+", #"+col+" i").click(function () {
    $("#"+list).toggle();
    $("#"+col+" .minusSign").toggle();
    $("#"+col+" .plusSign").toggle();
  })
}

toggler("dogCareHead", "dogCareCol", "care")
toggler("dogAdoptHead", "dogAdoptCol", "adopt")
toggler("moreExamplesHead", "moreExamplesCol", "moreExamples")
