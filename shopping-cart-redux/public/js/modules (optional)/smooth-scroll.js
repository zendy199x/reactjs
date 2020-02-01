//SMOOTH SCROLL
$(".smooth-scroll").on('click', 'a', function(event) {
    event.preventDefault();
    var elAttr = $(this).attr('href');
    var offset = ($(this).attr('data-offset') ? $(this).attr('data-offset') : 0);
    var setHash = $(this).closest('ul').attr('data-allow-hashes');
    $('body,html').animate({
        scrollTop: $(elAttr).offset().top - offset
    }, 700);
    if (typeof setHash !== typeof undefined && setHash !== false) {
    	history.replaceState(null, null, elAttr);
	}
});
