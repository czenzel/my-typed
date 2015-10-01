$(document).ready(function() {
	/* Prevent Default Image Actions */
	$('img').bind('contextmenu', function(e) { return false; });
	$('img').mousedown(function(){ return false; });

	/* Script Loading */
	$(document).on('readystatechange', function() {
		_typed_scriptRuntime();
	});

	/* Lightbox */
	$('body').append('<script src="//czenzel.github.io/typed/js/lightbox/lightbox.min.js"></script>');

	/* Markdown CMS */
	$('body').append('<script src="//czenzel.github.io/typed/js/markdown/markdown.min.js" id="mdScript"></script>');
});

function _typed_scriptRuntime() {
	_typed_lightbox('.post-content ');
	_typed_lightbox('.page-content ');
	_typed_markdown('');
}

function _typed_markdown(myElement) {
	$(myElement + 'div[markdown="1"]').each(function() {
		var myContent = $(this).text();
		myContent = markdown.toHTML(myContent);
		$(this).html(myContent);
	});
}

function _typed_lightbox(myElement) {
	$(myElement + 'img').each(function() {
		_post_content_lightbox($(this));
	});

	$(myElement + 'img').each(function() {
		_post_content_lightbox($(this));
	});

	function _post_content_lightbox(myElement) {
		var postImage = myElement;
		var piSrc = postImage.attr('src');

		if (piSrc.indexOf("images.typed.com") > -1) {
			postImage.wrap('<a href="' + piSrc + '" rel="lightbox"></a>');
		}
	}
}
