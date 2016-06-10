$(document).ready(function(){
//Add your images, we'll set the path in the next step
    var images = ['http://mojofunk.org/cozumel/wp-content/uploads/2011/05/Inside-bar.jpg', 'http://www.leeanns.biz/DSC_0645.JPG', 'http://2.bp.blogspot.com/-bNSMGgsYnqA/VeWkdgoDUYI/AAAAAAAAADY/8F6Xn4e-As8/s1600/stunning-contemporary-kitchen-design-with-dazzling-bar-decoration-including-stylish-wine-shelves-also-big-kitchen-cup-board-and-painted-brick-wall-featuring-long-dinette-organizer-woode.jpg'];
    
//Build the img, then do a bit of maths to randomize load and append to a div. Add a touch off css to fade them badboys in all sexy like.
//    $('<img class="fade-in" src="' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#banner-load');
    $('#banner-load').css({'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')'});
});