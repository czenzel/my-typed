/*
 Chris Zenzel Typed Scripts
 Copyright 2015 Christopher Zenzel. All Rights Reserved.
 */

/* Protect Images */
$(document).ready(function () {

  $('img').bind('contextmenu', function(e) { return false; });
  $('img').mousedown(function(){ return false; });

});

/* Add Style Elements */
$(document).ready(function() {

  $('h1.site-title').after('<p class='site-title-ruler-p'><img src='//czenzel.github.io/typed/images/typed-styled-rule.png' border='0' class='site-title-ruler-img' /></p>

});

/* Change Favorite Icon and Apple Touch Icon On-The-Fly */
$(window).load(function () {

 // Remove Shortcut Icon and Apple Touch Icon
 $('link').filter('[rel="icon"]').remove();
 $('link').filter('[rel="apple-touch-icon"]').remove();

 // Change Shortcut Icon and Apple Touch Icon to Profile Picture

 // Favorite Icon
 $('head').append('<link href="https://images.typed.com/56fb7eb9-f972-4af4-8aab-9339391e6a85/1610917_965113540187846_2159509180776299155_n.jpg" rel="shortcut icon" type="image/png" />');

 // Apple Touch Icon
 $('head').append('<link rel="apple-touch-icon" href="https://images.typed.com/56fb7eb9-f972-4af4-8aab-9339391e6a85/1610917_965113540187846_2159509180776299155_n.jpg" />');

});