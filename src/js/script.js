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
  distance: '15rem',
  mobile: false
}, 0);

sr.reveal('.heading-right', {
  origin: 'right',
  duration: 1000,
  delay: 0,
  rotate: {x:0, y:0,  z:0},
  scale: 0,
  distance: '15rem',
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
  distance: '15rem'
}, 0);

sr.reveal('.deco-line-right', {
  origin: 'right',
  duration: 1000,
  delay: 1000,
  rotate: {x:0, y:0,  z:0},
  scale: 0,
  mobile: false,
  distance: '15rem'
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
    distance: '15rem'
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
  distance: '15rem'
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
