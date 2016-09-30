$(document).ready(function() {

    //Sets the menu-bar fixed to follow page even if scrolled passed it
    var topOfOthDiv = $(".banner-container").outerHeight();
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) {
            $('.menu-bar').addClass("menu-bar-active");
            $('.dropdown-menu-container').addClass("dropdown-menu-container-activated");
            $('.banner-container-compensator').addClass('banner-container-compensator-active');
        }else{
            $('.menu-bar').removeClass("menu-bar-active");
            $('.dropdown-menu-container').removeClass("dropdown-menu-container-activated");
            $('.banner-container-compensator').removeClass('banner-container-compensator-active');
        }
    });

    //Save and Cancel functions and animation for settings page
    var $input = $('<input class="inputs" id="username-input"/>');
    var $p = $('<p data-editable id="current-username">@mckernan28</p>');
    var profileSettingsHeight = $(".profile-settings").outerHeight();
    $(".edit").click(function(e){
        e.preventDefault();
        $('.profile-settings').animate({height: profileSettingsHeight + 10},200);
        $(this).toggle();
        $('#username-edit-input').children().fadeToggle(300);

        $('#current-username').replaceWith( $input );
    });
    $("#cancel-username-edit").click(function(e){
        e.preventDefault();
        $('.profile-settings').animate({height: profileSettingsHeight - 40},300);
        $(".edit").toggle();
        $('#username-edit-input').children().fadeToggle(300);

        $('#username-input').replaceWith( $p );
    });

    //Toggles menu icon in menu-bar for navigation
    $(".hamburger").click(function(e){
        e.preventDefault();
        $(this).toggleClass('hamburger-active');
        $('.hamburger-container').toggleClass('margin-adjust-menu');
        $('.dropdown-menu-container').toggleClass('dropdown-menu-container-active');
    });

    //Selection of 'people' on main page
    $(".square").click(function(e){
        e.preventDefault();
        if ($(this).hasClass('square-active')) {
            $(this).toggleClass('square-active');
        }
        else {
            $(".square").removeClass('square-active');
            $(this).addClass('square-active');
        }
    });

});
