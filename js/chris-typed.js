/*
 Chris Zenzel Typed Scripts
 Copyright 2015 Christopher Zenzel. All Rights Reserved.
 */

/* Protect Images */
$(document).ready(function () {

  /* Add Styled Rule */
  var _czt_styledRule = 0;

  if (_czt_styledRule > 0) {
    $('h1.site-title').after("<p class='site-title-ruler-p'><img ondrag='return false;' oncontextmenu='return false;' src='//czenzel.github.io/typed/images/typed-styled-rule.png' border='0' class='site-title-ruler-img' /></p>");
  }

  /* Add Logo to Header - std:Template */
  var _czt_authorIcon = 0;

  if (_czt_authorIcon > 0) {
    $("h1.site-title").attr('style', 'text-align: left; float: left');
    $("h1.site-title").after('<div style="padding: 0; margin: 0; float: left;"><img src="https://images.typed.com/56fb7eb9-f972-4af4-8aab-9339391e6a85/1610917_965113540187846_2159509180776299155_n.jpg" ondrag="return false;" oncontextmenu="return false;" border="0" style="border-radius: 150px; width: 50px; height: auto;" /></div>');
  }

  /* Add Post Image Icons to Post Articles in Blog */
  var _czt_postIcon = 0;

  if (_czt_postIcon > 0) {
    $('h1.post-title').before('<img src="//czenzel.github.io/typed/images/post.png" border="0" class="post-title-icon" />');
  }

  /* Replace blog header image */
  var _czt_headerImage = 1;

  if (_czt_headerImage > 0) {
    $('header').html('<img src="//czenzel.github.io/typed/images/blog-header-2015.jpg" border="0" alt="Christopher Zenzel" style="width: 100%; height: auto;" />');
  }

  /* Protect Images */
  $('img').bind('contextmenu', function(e) { return false; });
  $('img').mousedown(function(){ return false; });

  /* Image Lightbox */
  _typed_lightboxPost();

});

/* Change Favorite Icon and Apple Touch Icon On-The-Fly */
$(window).load(function () {

  // Add Lightbox for Photographs in Post Content
  $('body').append('<script src="//czenzel.github.io/typed/js/lightbox.min.js"></script>');

  // Remove Shortcut Icon and Apple Touch Icon
  $('link').filter('[rel="icon"]').remove();
  $('link').filter('[rel="apple-touch-icon"]').remove();

  // Change Shortcut Icon and Apple Touch Icon to Profile Picture

  // Favorite Icon
  $('head').append('<link href="https://images.typed.com/56fb7eb9-f972-4af4-8aab-9339391e6a85/1610917_965113540187846_2159509180776299155_n.jpg" rel="shortcut icon" type="image/png" />');

  // Apple Touch Icon
  $('head').append('<link rel="apple-touch-icon" href="https://images.typed.com/56fb7eb9-f972-4af4-8aab-9339391e6a85/1610917_965113540187846_2159509180776299155_n.jpg" />');

});

/* Add Lightbox to all rendered images in the post-content and page-content where necessary */
function _typed_lightboxPost() {

  // Look for all post images
  $('.post-content img').each(function() {

    // Get current image and hyperlink
    var postImage = $(this);
    var piSrc = postImage.attr('src');

    // If the image is on Typed Images then add the lightbox
    // You may add additional sources later, but should in a different function.
    if (piSrc.indexOf("images.typed.com") > -1) {
      postImage.wrap('<a href="' + piSrc + '" rel="lightbox"></a>');
    }

  });

}
