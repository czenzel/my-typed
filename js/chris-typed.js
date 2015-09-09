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
		$('.site-title').before('<a href="/"><img src="//czenzel.github.io/typed/images/blog-header-2015.jpg" border="0" alt="Christopher Zenzel" style="width: 100%; height: auto;" class="site-header-image" /></a>');
	}

	/* Protect Images */
	$('img').bind('contextmenu', function(e) { return false; });
	$('img').mousedown(function(){ return false; });

	/* Dynamic Elements */
	$('body').on('contextmenu', 'img', function(e) {
		e.preventDefault();
		return false;
	});
	$('body').on('dragstart', 'img', function(e) {
		e.preventDefault();
		return false;
	});

	/* Image Lightbox */
	_typed_lightboxPost();

	/* jQuery Typing Effects */
	var _czt_typingEffect = 1;
	if (_czt_typingEffect > 0) {
		var _czt_titleTyping = 0;

		if (_czt_titleTyping > 0) {
			$('h1.post-title').each(function(index) {
				var myElementClass = 'post-title-' + index;
				$(this).addClass(myElementClass);
				if ($(myElementClass)) _effect_typeWriter('.' + myElementClass);
			});

			$('h1.page-title').each(function(index) {
				var myElementClass = 'page-title-' + index;
				$(this).addClass(myElementClass);
				if ($(myElementClass)) _effect_typeWriter('.' + myElementClass);
			});
		}

		$('.content-typewriter').each(function(index) {
			var myElementClass = 'typewriter-' + index;
			$(this).addClass(myElementClass);
			if ($(myElementClass)) _effect_typeWriter('.' + myElementClass);
		});

		/* Dynamic Elements */
		$('body').on('load', '.content-typewriter', function(e) {
			var myElementClass = 'typewriter-' + index;
			$(this).addClass(myElementClass);
			if ($(myElementClass)) _effect_typeWriter('.' + myElementClass);			
		});
	}

	/* Inner Typed Markdown Regions */
	var _czt_markdownRegions = 1;
	if (_czt_markdownRegions > 0) {
		_cms_markdown();
	}

	/* Tabs */
	var _czt_tabRegions = 0;
	if (_czt_tabRegions > 0) {
		_cms_tabs();
	}

});

/* Change Favorite Icon and Apple Touch Icon On-The-Fly */
$(window).load(function () {

	// Add Lightbox for Photographs in Post Content
	$('body').append('<script src="//czenzel.github.io/typed/js/lightbox/lightbox.min.js"></script>');

	// Append jQuery UI
	$('body').append('<script src="//czenzel.github.io/typed/js/jquery-ui/jquery-ui.min.js" id="jui-script"></script>');

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

	// Look for all page images
	$('.page-content img').each(function() {

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

/* Blinking cursor effect */
function _effect_typeBlink(myBlinkElement) {
	setInterval(function() {
		$(myBlinkElement).fadeIn(300);
		$(myBlinkElement).fadeOut(500);
	}, 1000);
}

/* Add typewriter script - http://jsfiddle.net/creed88/VG8MJ/1/ */
function _effect_typeWriter(myTypingElement) {

	var myContent = $(myTypingElement)[0].outerHTML;
	myContent = myContent

	var i = 0;
	var isTag;
	var text;

	(function type() {

		text = myContent.slice(0, ++i);
		if (text === myContent) return;

		$(myTypingElement).html(text + '_');

		var char = text.slice(-1);
		if (char === '<') isTag = true;
		if (char === '>') isTag = false;

		if (isTag) return type();
		setTimeout(type, 55);

	}());

}

/* Markdown Regions */
function _cms_markdown() {
	// Append Markdown Scripts
	$('body').append('<script src="//czenzel.github.io/typed/js/markdown/markdown.min.js" id="markdown-script"></script>');

	// Load markdown elements
	$('div[markdown="1"]').each(function() {
		var markdownTimer = setTimeout(function() {
			if (typeof markdown != 'undefined') {
				var myContents = $(this).html();
				myContents = markdown.toHTML(myContents);
				$(this).html(myContents);
				clearInterval(markdownTimer);
			}
		}, 150);
	});
}

/* Tabs */
function _cms_tabs() {
	// Load jQuery UI Tabs
	var jqut = setTimeout(function() {
		if ($('#jui-script')) {
			$('#jui-script').ready(function() {
				$('[tabs="1"]').each(function(index) {
					$(this).tabs();
				});
				clearInterval(jqut);
			});
		}
	}, 100);
}
