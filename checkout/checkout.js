 var prices=(document.getElementsByClassName("price"))



function total() {
  var total =0
  for (var i = 0; i < prices.length; i++) {
   var price= parseInt(prices[i].innerHTML)
    total+=price

 } return ("$" +total)
}


console.log(total());

$('#totalPrice').text(total())
