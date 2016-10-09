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

    //When any 'edit' button is clicked
    $('.edit').click(function (e) {
        e.preventDefault();
        var profileSettingsHeight = $(".profile-settings").height();
        // $('.profile-settings').animate({height: profileSettingsHeight + 90},300);
        $("#username-edit-input").fadeIn(200);
    })

    //When edit Description button is clicked
    $("#edit-description-button").click(function(e){
        var profileDescriptionHeight = $("#current-description").height();
        var $inputDescription = $('<textarea class="inputs" id="description-input"/>');
        $('#current-description').replaceWith( $inputDescription );
        $('#description-input').outerHeight(profileDescriptionHeight)
        $("#edit-description-button").hide();
        e.preventDefault();
    });

    //When edit Username button is clicked
    $("#edit-username").click(function(e){
        var $input = $('<input class="inputs" id="username-input"/>');
        $('#current-username').replaceWith( $input );
        $(this).hide();
        e.preventDefault();
    });

    //When cancel button is click
    $("#cancel-settings-edit").click(function(e){
        var $pUsername = $('<p data-editable id="current-username">@mckernan28</p>');
        var profileSettingsHeight = $(".profile-settings").height();
        var $pDescription = $('<p data-editable id="current-description">Hello my name is James Mckernan I am 16 years old and I am in Sec. 5 at Heritage Regional Highschool. I am enrolled in a computer programming course called iCan for my fifth year in 2016-2017s Mckernan I am 16 years old and I am in Sec. 5 at Heritage Regional Highschool. I am enrolled in a computer programming course called iCan for my fifth year in 2016-2017</p>');
        // $('.profile-settings').animate({height: profileSettingsHeight - 90},300);
        $("#edit-description-button").show();
        $("#edit-username").show();
        $('#description-input').replaceWith( $pDescription );
        $('#username-input').replaceWith( $pUsername );
        $("#username-edit-input").fadeOut(200);
        e.preventDefault();
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


    //Upload profile picture on settings page
    $("#upload_link").on('click', function(e){
        e.preventDefault();
        $("#upload:hidden").trigger('click');
    });
    $('#upload').change( function(e) {
        var img = URL.createObjectURL(e.target.files[0]);
        $('#profile-preview-settings-picture').attr('src', img);
    });




});
