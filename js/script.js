
$( document ).ready(function() {
    $(".nav-left ul li a").hover(function(){
        $(".menu-plus").css("top", "80px"); 
    });
    
    $("header").mouseleave(function(){
        $(".menu-plus").css("top", "0"); 
    });
});