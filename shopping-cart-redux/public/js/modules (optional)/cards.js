/* CARD REVEAL */
(function ($) {
    $(document).ready(function () {

        $(document).on('click.card', '.card', function (e) {

            var $this    = $(this);
            var isReveal = $this.find(".card-reveal").length;

            if(isReveal) {

                var $clicked        = $(e.target);
                var isTitle         = $clicked.is(".card-reveal .card-title");
                var isTitleIcon     = $clicked.is(".card-reveal .card-title i");
                var isActivator     = $clicked.is(".card .activator");
                var isActivatorIcon = $clicked.is(".card .activator i");

                if(isTitle || isTitleIcon) { // down

                    $this.find(".card-reveal")
                        .velocity(
                            { translateY: 0 },
                            {
                                duration: 225,
                                queue   : false,
                                easing  : 'easeInOutQuad',
                                complete: function () {
                                    $(this).css({ display: 'none' });
                                }
                            }
                        );

                } else if(isActivator || isActivatorIcon) { // up

                    $this.find(".card-reveal")
                        .css({ display: 'block' })
                        .velocity("stop", false)
                        .velocity(
                            { translateY: '-100%' },
                            {
                                duration: 300,
                                queue: false,
                                easing: 'easeInOutQuad'
                            }
                        );

                }

            }


        });

        $('.rotate-btn').on('click', function () {

            var cardId = $(this).attr('data-card');
            $('#' + cardId).toggleClass('flipped');

        });

    });
}(jQuery));

//Social reveal
$(document).ready(function ($) {

    $('.card-share > a').on('click', function (e) {
        e.preventDefault() // prevent default action - hash doesn't appear in url
        $(this).parent().find('div').toggleClass('social-reveal-active');
        $(this).toggleClass('share-expanded');
    });
});
