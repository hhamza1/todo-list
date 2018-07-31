$("ul").on("click","li", function(){
  $(this).toggleClass("checkedOff");
});

$(".fa-plus").on("click", function(){
  $("input").fadeToggle();
})

$("ul").on("click","span",function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
  if (e.which === 13){
    var todo = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>")
  }
})
