
$( document ).ready(function() {
    // menu déroulant top
    $(".nav-left ul li a").hover(function(){
        $(".menu-plus").css("top", "80px"); 
    });
    
    $("header").mouseleave(function(){
        $(".menu-plus").css("top", "0"); 
    });
    
    // scroll fluid des sections principales et modif des href
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
    $('#ancre5').on('inview', function(event, isInView) {
        $("#ancre").attr("href", "#first-bloc");
    });
        
    /*$('#ancre').on('click', function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
	});*/
    
    $(function () {
        var $window = $(window);
        $window.scroll(function () {
            if ($window.scrollTop() == 0)
                $("#ancre").css("transform", "scaleY(1)");
            else if ($window.height() + $window.scrollTop() == $(document).height()) {
                $("#ancre").css("transform", "scaleY(-1)");
            }
        });
    });
});
