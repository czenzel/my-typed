/*
 Chris Zenzel Typed Scripts
 Copyright 2015 Christopher Zenzel. All Rights Reserved.
 */

/* Protect Images */
$(document).ready(function () {
  $('img').bind('contextmenu', function(e) { return false; });
  $("img").mousedown(function(){ return false; });
});
