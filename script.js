$(document).ready(function() {
    var topOfOthDiv = $(".banner-container").outerHeight();
    $('.save-button').hide();
    $('.cancel-button').hide();
    $('#input-username').hide();

    $(".hamburger").click(function(e){
        e.preventDefault();
        $(this).toggleClass('hamburger-active');
        $('.hamburger-container').toggleClass('margin-adjust-menu');
        $('.dropdown-menu-container').toggleClass('dropdown-menu-container-active');
    });

    $(".edit").click(function(e){
        e.preventDefault();
        $(this).fadeToggle(100);
        $('.save-button').fadeToggle(200);
        $('.cancel-button').fadeToggle(200);
        $('#input-username').fadeToggle(200);
    });

    $("#cancel-edit").click(function(e){
        e.preventDefault();
        $(".edit").toggle();
        $('#input-username').fadeToggle(200);
        $('.save-button').fadeToggle(200);
        $('.cancel-button').fadeToggle(200);
    });

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
});
