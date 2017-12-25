// $("#about > div > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(2) > div.progress-bar").each(function() {
//   $(this)
//     .data("origWidth", $(this).width())
//     .width(0)
//     .animate({
//       width: $(this).data("origWidth") // or + "%" if fluid
//     }, 1200);
// });


// SCROLL REVEAL
window.sr = ScrollReveal();

// For label-heading
sr.reveal('.heading-left', {
  origin: 'left',
  duration: 1000,
  delay: 0,
  rotate: {x:0, y:0,  z:0},
  scale: 0,
  distance: '10vw',
  mobile: false
}, 0);

sr.reveal('.heading-right', {
  origin: 'right',
  duration: 1000,
  delay: 0,
  rotate: {x:0, y:0,  z:0},
  scale: 0,
  distance: '10vw',
  mobile: false
}, 0);


// For hr-deco-line
sr.reveal('.deco-line-left', {
  origin: 'left',
  duration: 1000,
  delay: 1000,
  rotate: {x:0, y:0,  z:0},
  scale: 0,
  mobile: false,
  distance: '10vw'
}, 0);

sr.reveal('.deco-line-right', {
  origin: 'right',
  duration: 1000,
  delay: 1000,
  rotate: {x:0, y:0,  z:0},
  scale: 1,
  mobile: false,
  distance: '10vw'
}, 0);


// For Hexagons
sr.reveal('.hexagon-wrapper', {
    duration: 700, // time in animation
    delay: 0, //how much time before animation starts
    rotate: {x:0, y:180,  z:0},
    scale: 0.9,
    mobile: false,
    distance: '0px'
}, 200); //if more classes, time b/w each animation


// My Picture and details
  sr.reveal('#me', {
    origin: 'left',
    duration: 1000,
    delay: 0,
    rotate: {x:0, y:0,  z:0},
    scale: 0,
    mobile: false,
    distance: '45%'
}, 0);


// Progress Bars
  sr.reveal('.progress-bar', {
    duration: 2000,
    delay: 900,
    easing: 'cubic-bezier(.17,.67,.94,.79)',
    // rotate: {x:0, y:0,  z:0},
     // scale: 0.3,
    distance: '0px'
}, 0);

// Progress Section
sr.reveal('.progress', {
  origin: 'right',
  duration: 1000,
  delay: 0,
  rotate: {x:0, y:0,  z:0},
  scale: 0,
  mobile: false,
  distance: '10vw'
}, 0);

// Image Section in Projects
sr.reveal('.each-item', {
  origin: 'bottom',
  duration: 800,
  opacity: 0,
  delay: 80,
  rotate: {x:0, y:0,  z:0},
  scale: 0,
  mobile: false,
  distance: '10rem'
},100);

// Timeline Section
sr.reveal('.container-timeline', {
  origin: 'bottom',
  duration: 1000,
  delay: 400,
  rotate: {x:0, y:180,  z:0},
  scale: 0,
  mobile: false,
  distance: '3vw'
}, 200);

// Short Message section
sr.reveal('.msg_section', {
  origin: 'left',
  duration: 1000,
  delay: 1600,
  rotate: {x:0, y:0,  z:0},
  scale: 0,
  mobile: false,
  distance: '10vw'
}, 0);

// Contact Form
sr.reveal('#contactform', {
    duration: 1500,
    delay: 800
  });


// Code for data-filter tab and data-filter effect
$(document).ready(function(){
    // clicking button with class "filter"
    $(".filter").click(function(){
        $(".filter").removeClass("active");
        $(this).addClass("active");

        // get the data-filter value of the button
        var filterValue = $(this).attr('data-filter');

        // show all items
        if(filterValue == "all")
        {
            $(".all").show("slow");
        }
        else
        {
            // hide all items
            $(".all").not('.'+filterValue).hide("slow");
            // and then, show only items with selected data-filter value
            $(".all").filter('.'+filterValue).show("slow");
        }
    });

});


// Code for mail ajax
$("#form-submit").on("click", function(){
    // message = $("#contactform").serialize();
    // event.preventDefault();
    if($(this).hasClass('disabled')){
        alert('You have sent a msg just now! Please refresh the page if you want to send another');
        return false;
    }
    var data={
         userName: $('#sender_name').val(),
         email: $('#sender_email').val(),
         msg:$('#sender_message').val()
        }
    $.ajax({
        url: "//formspree.io/sriharshashm@gmail.com",
        method: "POST",
        data: {data},
        dataType: "json"
    });
    $('#success').css("height","36px");
    $( '#contactform' ).each(function(){
        this.reset();
    });
    $('#form-submit').addClass("disabled");
    return false;
});

// Code for closing banner
$("#close").on("click", function(){
    $('#success').css("height","0px");
})


// Code for Nav-Bar problem
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

// Code for pre loader
jQuery(window).on("load",function(){
        jQuery(".hameid-loader-overlay").fadeOut(500);
    });
