window.onbrandLoaded = false;
    /**
     *  Header & Footer Ajax
     */
    var subdir = "chorusV2",
        version = 1;

    /* Insert Header */
    $.ajax({
        url: 'https://rawcdn.githack.com/ShawnParrotte2/uberflip/132648eedeb5885b531e0159a08ddca4d940a2e6/header.html',
    }).done(function(data) {
        $('body').prepend(data);
    });

    /* Insert Footer */
    $.ajax({
        url: 'https://rawcdn.githack.com/ShawnParrotte2/uberflip/132648eedeb5885b531e0159a08ddca4d940a2e6/footer.html',
    }).done(function(data) {
        $('body > footer').remove();
        $('body').append(data);
    });

    /**
     *  Custom Functions
     */

    function headerWhite() {
        if ($('body').hasClass('hub-page')) {
            if ($(window).scrollTop() > 0) {
                $('#header-outer').addClass('small-nav');
                console.log('scroll worked');
            } else {
                $('#header-outer').removeClass('small-nav');
            }
        } else {
            $('#header-outer').addClass('small-nav');
            console.log('scroll worked');
        }
    }

    function stickyNav() {
        if ($('body').hasClass('hub-page')) {
            var followAt = $('.large-header').scrollTop() + $('.large-header').height() - 86;
            if ($(window).scrollTop() >= followAt) {
                $('.top-nav').addClass('stickyNav');
            } else {
                $('.top-nav').removeClass('stickyNav');
            }
        } else {
            $('.top-nav').removeClass('stickyNav');
        }
    }

    $(document).on('click', '.slide-out-widget-area-toggle.mobile-icon.fullscreen-alt', function(event) {
        event.preventDefault();
        /* Act on the event */
        $('.customMenu').toggleClass('active');

    });

    /**
     *  Events
     */

    Hubs.Events.on('load', function() {

if (!window.onbrandLoaded) {
        fixShareWidget();
        headerWhite();
window.onbrandLoaded = true
}

    }).on('pageChange', function() {

    }).on('itemsLoaded', function() {

    }).on('resize', function() {
        sideCtaFix();
        addThisFix();
    }).on('scroll', function() {
        headerWhite();
        sideCtaFix();
        addThisFix();
        stickyNav();
    }).on('ctaActivate', function() {

    }).on('ctaFormSubmitSuccess', function() {

    }).on('search', function() {

    });

if (!window.onbrandLoaded) {
	Hubs.Events.trigger('load');
}
