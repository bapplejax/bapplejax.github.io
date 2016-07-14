$(document).ready(function(){
//Add your images, we'll set the path in the next step
    var images = ['bar.jpg', 'bar2.jpg', 'bar3.jpg'];
    
//Build the img, then do a bit of maths to randomize load and append to a div. Add a touch off css to fade them badboys in all sexy like.
//    $('<img class="fade-in" src="' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#banner-load');
    $('#banner-load').css({'background': 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(img/background/' + images[Math.floor(Math.random() * images.length)] + ') 0px 0px/cover'});
});