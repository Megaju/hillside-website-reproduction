
$( document ).ready(function() {
    // menu déroulant top
    $(".nav-left ul li a").hover(function(){
        $(".menu-plus").css("top", "80px"); 
    });
    
    $("header").mouseleave(function(){
        $(".menu-plus").css("top", "0"); 
    });
    
    // scroll fluid des sections principales et modif des href
    var currentSection = 0;
    
    $("#ancre").click(function(){
        if (currentSection === 0) {
            currentSection++;
        } else {
            $(this).attr("href", "#ancre2");
        }
    });
    
    $('a[href^="#"]').click(function(){
        var the_id = $(this).attr("href");
        
        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 'slow');
        return false;
    });
});
