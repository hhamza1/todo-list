$("li").on("click", function(){
  $(this).toggleClass("checkedOff");
});

$("span").click(function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
});
