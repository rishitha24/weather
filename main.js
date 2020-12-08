feather.replace();

// let btn = document.querySelector(".ChangeLocation");

function undo() {
  $(".back").css(

      { "transform": "translateZ(-100px) perspective(500px) scale(1.04)" },
      // {
      //    "transition": "all ease-in-out .156s"
      // },
     {"width": "40%"},
     {"height": "40%"}

   );
   $('.front').css(
      // { "transform": "translateZ(100px)" },
     // ,
     // {
     //     "transition": "all ease-in-out .656s"
     //  }
     
     {"visibility": "visible"}
   );

   $('.leftSideContainer').css(
      { "transform": "translateZ(500px) perspective(500px) scale(1.04)" }
   );
  
  $('.recentSearches').css(
  {
    "transform": "translateZ(-150px)"});
  
  
    $('.topperContainer').css(
  {"background-color": "#ccddd"}
  );

};

function doo() {
  $(".back").css(

      { "transform": "translateZ(550px) perspective(500px) scale(1.04) " },
      // {
      //    "transition": "all ease-in-out .656s"
      // },
    
   )

   $('.front').css(
      // { "transform": 
       // translateZ(-300px)
       // "scale(0.97)" },
     {"visibility": "hidden"});

   $('.leftSideContainer').css(
      { "transform": "translateZ(-150px)" }
   )
  
  $('.recentSearches').css(
  {
    "transform": "translateZ(500px) perspective(500px) scale(1.03)"})
  
  
  $('.topperContainer').css(
  {"background-color": "black"}
  )
};



$(".ChangeLocation").on('click', function () {
   console.log("clicked");
  doo();

   
});

$("#undo").on('click', function () {
   console.log("clicked");
 if($('#cityInput').val().length > 0) $('.location').text($('#cityInput').val());
$('#cityInput').val("");
    $('.in_C > span').removeClass('active');
  undo();
     
});

$('.recentItem').on('click', function () {
  console.log("rec");
  $('.location').text($(this).text());
  undo();
                    
                    })
$('#cityInput').focus(function() {
  $('.in_C > span').addClass('active');
})

$('#cityInput').focusout(function () {
  if($(this).val().length === 0)
    $('.in_C > span').removeClass('active');
})





