$(document).ready(function(){
    var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1500])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


});


mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
