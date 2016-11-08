
$( document ).ready(function() {
    // menu déroulant top
    $(".nav-left ul li a").hover(function(){
        $(".menu-plus").css("top", "80px"); 
    });
    
    $("header").mouseleave(function(){
        $(".menu-plus").css("top", "0"); 
    });
    
// Scroll fluid des sections principales et modif des href
    var currentSection = 0;
    
    // modif des liens en fonction du scroll
    $('#first-bloc').on('inview', function(event, isInView) {
        $("#ancre").attr("href", "#ancre1");
    });
    $('#ancre1').on('inview', function(event, isInView) {
        $("#ancre").attr("href", "#ancre2");
    });
    $('#ancre2').on('inview', function(event, isInView) {
        $("#ancre").attr("href", "#ancre3");
    });
    $('#ancre3').on('inview', function(event, isInView) {
        $("#ancre").attr("href", "#ancre4");
    });
    $('#ancre4').on('inview', function(event, isInView) {
        $("#ancre").attr("href", "#ancre5");
    });
        
    
    
    $('a[href^="#"]').click(function(){
        var the_id = $(this).attr("href");
        
        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 'slow');
        return false;
    });
});
