var mybutton = document.getElementById("myBtn");
  
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    mybutton.style.display = "block";

} else {
    mybutton.style.display = "none";
}
}

mybutton.addEventListener('click', function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

            

document.addEventListener("DOMContentLoaded", function(event) {
  document.documentElement.setAttribute("data-theme", "light");
            
  var themeSwitcher = document.getElementById("post-photo");

  themeSwitcher.onclick = function() {
      var currentValue = document.getElementById("post-photo").getAttribute('src');
      var image = document.getElementById("post-photo");
      if(currentValue == "img/make-dark.png"){
          image.src = "img/make-light.png";
          document.documentElement.setAttribute("data-theme", "dark");
      } else{
          image.src = "img/make-dark.png";
          document.documentElement.setAttribute("data-theme", "light");
      }
  }
})



$( document ).ready(function() {
    $('.carousel-control-prev').css('opacity', '0.4');
});

$( document ).ready(function() {
    $('.carousel-control-next').css('opacity', '0.4');
});




$(function() {
    $('.carousel').hover(function() {
      $('.carousel-control-prev').css('opacity', '1');
    }, function() {
      // on mouseout, reset the background colour
      $('.carousel-control-prev').css('opacity', '0.4');
    });
  });


  $(function() {
    $('.carousel').hover(function() {
      $('.carousel-control-next').css('opacity', '1');
    }, function() {
      $('.carousel-control-next').css('opacity', '0.4');
    });
  });


  $(function() {
    $('.carousel').hover(function() {
      $('.carousel-control-prev').css('opacity', '1');
    }, function() {
      $('.carousel-control-prev').css('opacity', '0.4');
    });
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2200,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});