// //h1 is Joe, h2 is daniel
// $( ".chat-body").append( "<h1>ayyo bruh</h1>" );
//
// $( ".chat-body").append( "<h2>fuck u</h2>" );


$(document).ready(function () {
    setTimeout(function(){
        $( ".chat-body").append("<h1>Hey Daniel! How was school today?</h1>").fadeIn(500);
        $(document).ready(function () {
                  var joeIM = document.createElement('audio');
                  joeIM.setAttribute('src', 'sounds/ReceiveIM.wav');
                  joeIM.setAttribute('autoplay', 'autoplay');
                  //audioElement.load()
                  $.get();
                  joeIM.addEventListener(".chat-body", function() {
                  joeIM.play();
                  }, true);
                });
      $(".chat-body").scrollTop($('.chat-body').height())
    }, 3000);
});

$(document).ready(function () {
    setTimeout(function(){
        $( ".chat-body").append( "<h2>AYy it was alright</h2>" ).fadeIn(500);
        $(document).ready(function() {
          var danielIM = document.createElement('audio');
          danielIM.setAttribute('src', 'sounds/SendIM.wav');
          danielIM.setAttribute('autoplay', 'autoplay');
          //audioElement.load()
          $.get();
          danielIM.addEventListener(".chat-body", function() {
          danielIM.play();
        }, true);
        });
        $(".chat-body").scrollTop($('.chat-body').height())
    }, 5000);
});


$(document).ready(function () {
    setTimeout(function(){
        $( ".chat-body").append("<h1>mannnn Ben's class is super rough! Coding can take a lap.</h1>").fadeIn(500);
        $(document).ready(function () {
                  var joeIM = document.createElement('audio');
                  joeIM.setAttribute('src', 'sounds/ReceiveIM.wav');
                  joeIM.setAttribute('autoplay', 'autoplay');
                  //audioElement.load()
                  $.get();
                  joeIM.addEventListener(".chat-body", function() {
                  joeIM.play();
                  }, true);
                });
                      $(".chat-body").scrollTop($('.chat-body').height())
    }, 8000);
});
