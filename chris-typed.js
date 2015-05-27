/*
 Chris Zenzel Typed Scripts
 Copyright 2015 Christopher Zenzel. All Rights Reserved.
 */

/* Protect Images */
$(document).ready(function () {

  $('img').bind('contextmenu', function(e) { return false; });
  $('img').mousedown(function(){ return false; });

});

/* Change Favorite Icon On-The-Fly */
$(window).load(function () {

 $('link').filter('[rel="icon"]').remove();
 $('head').append('<link href="https://images.typed.com/56fb7eb9-f972-4af4-8aab-9339391e6a85/1610917_965113540187846_2159509180776299155_n.jpg" rel="shortcut icon" type="image/png" />');

});