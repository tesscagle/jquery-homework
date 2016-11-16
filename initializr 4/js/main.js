function highlight() {
$('h1').text('Hello');
$('.jumbotron').addClass('highlighted');
}
function unhighlight() {
$('h1').text('Hello World!');
$('.jumbotron').removeClass('highlighted');
}
function hide() {
$('.jumbotron').fadeOut();
}
function show() {
$('.jumbotron').slideDown();
}

$(document).ready(function() {
  $('.jumbotron').on('mouseenter', highlight);
  $('.jumbotron').on('mouseleave', unhighlight);
  $('.hide-jumbotron').on('click', hide);
  $('.show-jumbotron').on('click', show);
});
