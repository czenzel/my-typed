/* Protect Images */
$(document).ready(function () {
$('img').bind('contextmenu', function(e) { return false; });
$("img").mousedown(function(){ return false; });
});
