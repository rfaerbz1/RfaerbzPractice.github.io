
$("#topic-1").click(function(){
  $("#button-info").text("Information on topic 1");

  $("#topic-1").css("border", "5px solid black");
  $("#topic-2").css("border", "0px solid black");
  $("#topic-3").css("border", "0px solid black");
});
$("#topic-2").click(function(){
  $("#button-info").text("Information on topic 2");

  $("#topic-2").css("border", "5px solid black");
  $("#topic-1").css("border", "0px solid black");
  $("#topic-3").css("border", "0px solid black");
});
$("#topic-3").click(function(){
  $("#button-info").text("Information on topic 3");

  $("#topic-3").css("border", "5px solid black");
  $("#topic-2").css("border", "0px solid black");
  $("#topic-1").css("border", "0px solid black");
});





// Slides
var slideIndex = 1;

showSlides(slideIndex, true);

$("#slideButton-prev").click(function(n){
  slideIndex -= 1;
  showSlides(slideIndex);
});

$("#slideButton-next").click(function(n){
  slideIndex += 1;
  showSlides(slideIndex);
});

function showSlides(n, auto){
  var slides = [
    $("#slide-1"),
    $("#slide-2"),
    $("#slide-3"),
    $("#slide-4"),
  ];
  
  slideIndex += 1;
  n=slideIndex;

  if(n > slides.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = slides.length;
  }
  for(var i = 0; i < slides.length; i ++){
    slides[i].css("display", "none");
  }
  slides[slideIndex-1].css("display", "block");
  
  setTimeout(showSlides, 5000);
  
}

