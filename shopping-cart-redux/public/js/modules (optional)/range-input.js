'use strict';

/****************
*  Range Input  *
****************/
(function ($) {

    var range_wrapper = '.range-field';
    var range_type = 'input[type=range]';
    var thumb_html = '<span class="thumb"><span class="value"></span></span>';
    var range_mousedown = false;
    var left = void 0;

    var add_thumb = function add_thumb() {
        var $thumb = $(thumb_html);
        $(this).after($thumb);
    };

    // Add thumbs;
    $(range_type).each(add_thumb);

    $(document).on('change', range_type, function (e) {
        var $thumb = $(this);
        var $thumb_value = $thumb.siblings('.thumb').find('.value');
        $thumb_value.html($thumb.val());
    });

    $(document).on('input mousedown touchstart', range_type, function (e) {
        var $this = $(this);
        var $thumb = $this.siblings('.thumb');
        var $thumb_value = $thumb.find(".value");
        var width = $this.outerWidth();
        var noThumb = !$thumb.length;
        // If thumb indicator does not exist yet, create it
        if (noThumb) add_thumb();

        // Set indicator value
        $thumb.find('.value').html($this.val());

        range_mousedown = true;
        $this.addClass('active');

        if (!$thumb.hasClass('active')) {
            $thumb.velocity({ height: '30px', width: '30px', top: '-20px', marginLeft: '-15px' }, { duration: 300, easing: 'easeOutExpo' });
        }

        if (e.type !== 'input') {
            var isMobile = e.pageX === undefined || e.pageX === null;
            if (isMobile) left = e.originalEvent.touches[0].pageX - $(this).offset().left;else left = e.pageX - $(this).offset().left;

            if (left < 0) left = 0;else if (left > width) left = width;
            $thumb.addClass('active').css('left', left);
        }

        $thumb.find('.value').html($this.val());
    });

    $(document).on('mouseup touchend', range_wrapper, function (e) {
        range_mousedown = false;
        $(this).removeClass('active');
    });

    $(document).on('mousemove touchmove', range_wrapper, function (e) {
        var $thumb = $(this).children('.thumb');
        var left = void 0;

        if (range_mousedown) {
            if (!$thumb.hasClass('active')) {
                $thumb.velocity({ height: '30px', width: '30px', top: '-20px', marginLeft: '-15px' }, { duration: 300, easing: 'easeOutExpo' });
            }
            var isMobile = e.pageX === undefined || e.pageX === null;
            if (isMobile) left = e.originalEvent.touches[0].pageX - $(this).offset().left;else left = e.pageX - $(this).offset().left;

            var width = $(this).outerWidth();
            if (left < 0) left = 0;else if (left > width) left = width;

            $thumb.addClass('active').css('left', left);
            $thumb.find('.value').html($thumb.siblings(range_type).val());
        }
    });

    $(document).on('mouseout touchleave', range_wrapper, function (e) {
        if (!range_mousedown) {
            var $thumb = $(this).children('.thumb');

            if ($thumb.hasClass('active')) {
                $thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: '-6px' }, { duration: 100 });
            }
            $thumb.removeClass('active');
        }
    });
})(jQuery);