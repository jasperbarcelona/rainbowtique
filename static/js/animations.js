$(document).ready(function(){

$( ".nav li" ).mouseenter(function() {
    $(this).toggleClass('')
    $(this).find('.menu').fadeIn();
  }
);

$( ".nav li" ).mouseleave(function() {
    $(this).find('.menu').hide();
  }
);

$('.item-container').css('height',($('.item-container').width() - 50));
$(window).resize(function() {
    $('.item-container').css('height',($('.item-container').width() - 50));
});

$(window).load(function() {
});

$(window).on('scroll', function(){
    var st = $(this).scrollTop();
});


})