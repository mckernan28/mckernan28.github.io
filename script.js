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

    //Save and Cancel functions and animation for Nickname on settings page
    $("#edit-description-button").click(function(e){
        var profileDescriptionHeight = $("#current-description").height();
        var $input = $('<input class="inputs" id="description-input"/>');

        $('#current-description').replaceWith( $input );
        $('#description-input').height(profileDescriptionHeight)
    });
    $("#cancel-description-edit").click(function(e){
        var $p = $('<p data-editable id="current-description">Hello my name is James Mckernan I am 16 years old and I am in Sec. 5 at Heritage Regional Highschool. I am enrolled in a computer programming course called iCan for my fifth year in 2016-2017</p>');
        var profileSettingsHeight = $(".profile-settings").height();

        e.preventDefault();
        $('#username-input').replaceWith( $p );
    });

    //Save and Cancel functions and animation for Nickname on settings page
    $("#edit-username").click(function(e){
        var $input = $('<input class="inputs" id="username-input"/>');
        var profileSettingsHeight = $(".profile-settings").height();
        e.preventDefault();
        $('.profile-settings').animate({height: profileSettingsHeight + 50},300);
        $(this).toggle();
        $('#username-edit-input').fadeToggle(300);
        $('#current-username').replaceWith( $input );
    });
    $("#cancel-username-edit").click(function(e){
        var $p = $('<p data-editable id="current-username">@mckernan28</p>');
        var profileSettingsHeight = $(".profile-settings").height();
        e.preventDefault();
        $('.profile-settings').animate({height: profileSettingsHeight - 50},300);
        $("#edit-username").toggle();
        $('#username-edit-input').fadeToggle(300);
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
