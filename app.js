// //h1 is Joe, h2 is daniel
// $( ".chat-body").append( "<h1>ayyo bruh</h1>" );
//
// $( ".chat-body").append( "<h2>fuck u</h2>" );




$(document).ready(function () {
    setTimeout(function(){
        $( ".chat-body").append( "<h1>Hey Daniel! How was school today?</h1>" ).fadeIn(500);
    }, 3000);
});

$(document).ready(function () {
    setTimeout(function(){
        $( ".chat-body").append( "<h2></h2>" ).fadeIn(500);
    }, 5000);
});
