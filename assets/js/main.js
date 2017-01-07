$(document).ready(function(){
  $(".hover").hover(function(){
    console.log('its coming here');
    $("#toggle").toggle();
  });
});
