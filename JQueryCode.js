// Start
$(function(){
    $("#menu li.menuitem").hover(function(){
            $(this).find("div.submenu").removeClass("submenu").addClass("submenuactive");
        },
        function(){
            $(this).find("div.submenuactive").removeClass("submenuactive").addClass("submenu");
        });
});
// End