
$( document ).ready(function() {
    $(".nav-left ul li a").hover(function(){
        $(".menu-plus").css("top", "80px"); 
    });
    
    $(".nav-left ul li a").mouseleave(function(){
        $(".menu-plus").css("top", "0"); 
    });
});