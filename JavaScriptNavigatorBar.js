(function($) {

    $.fn.JavaScriptNavigatorBar = function(options) {

        options = $.extend({
            overlap : 10,
            speed : 500,
            reset: 2000,
            color: '#0b2b61',
            easing: 'easeOutExpo'
        }, options)

        return this.each(function() {

            var nav = $(this),
                currentPageItem = $('#selected', nav),
                blob,
                reset;

            $('<li id="blob>"></li>').css({
                width : currentPageItem.outerWidth(),
                height : currentPageItem.outerHeight() + options.overlap,
                left : currentPageItem.position().left,
                top : currentPageItem.position().top - options.overlap / 2,
                backgroundColor : options.color
            }).appendTo('#nav');

            blob = $('#blob', nav);

            $('li', nav).hover(function() {
                alert('hovered');
            }, function() {

            });

        })

    };

})(jQuery);