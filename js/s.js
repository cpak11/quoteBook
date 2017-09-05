$(function(){
  // $('.qc button').on('mouseenter',function(){
  //   $(this).siblings('span.text').addClass('lt');
  // });
  // $('.qc button').on('mouseleave',function(){
  //   $(this).siblings('span.text').removeClass('lt');
  // });

  $('.qc button').on( "mouseenter mouseleave", function() {
    $(this).siblings('span.text').toggleClass( "lt" );
  });

})

//something that will remain when new el is created
//target el
