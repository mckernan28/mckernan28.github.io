$(document).ready(function() {
    var topOfOthDiv = $(".banner-container").outerHeight();

    $(".hamburger").click(function(e){
        e.preventDefault();
        $(this).toggleClass('hamburger-active');
        $('.hamburger-container').toggleClass('margin-adjust-menu');
        $('.dropdown-menu-container').toggleClass('dropdown-menu-container-active');
    });

    $(window).scroll(function() {
        console.log(topOfOthDiv);
        if($(window).scrollTop() > topOfOthDiv) {
            console.log('true');
            $('.menu-bar').addClass("menu-bar-active");
            $('.dropdown-menu-container').addClass("dropdown-menu-container-activated");
        }else{
            console.log('false');
            $('.menu-bar').removeClass("menu-bar-active");
            $('.dropdown-menu-container').removeClass("dropdown-menu-container-activated");
        }
    });
});
