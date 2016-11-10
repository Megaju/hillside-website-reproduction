
$( document ).ready(function() {
    // menu déroulant top
    $(".nav-left ul li a").hover(function(){
        $(".menu-plus").css("top", "80px"); 
    });
    $("header").mouseleave(function(){
        $(".menu-plus").css("top", "0"); 
    });
    
    // gestion des panneaux latéraux
    // GAUCHE
    $(".side-left p").hover(function(){
        $('.lateral-left').css("position", "fixed");
        $('.lateral-left').css("left", "0");
    });
    $('.lateral-left').mouseleave(function(){
        $('.lateral-left').css("left", "-50%");        
    });
    // DROITE
    $(".side-right p").hover(function(){
        $('.lateral-right').css("position", "fixed");
        $('.lateral-right').css("right", "0");
    });
    $('.lateral-right').mouseleave(function(){
        $('.lateral-right').css("right", "-50%");        
    });
    
    // apparition du menu responsive
    var menuRespOpacity = 0;
    $('#menu').on('click', function() {
        if (menuRespOpacity === 0) {
            $('#responsive-menu').css("opacity", "1");
            $('#menu').html("CLOSE");
            menuRespOpacity = 1;
        } else {
            $('#responsive-menu').css("opacity", "0");
            $('#menu').html("MENU");
            menuRespOpacity = 0;
        }
    });
    
    // fonctions pour les liens
    function hrefOne() {
        $('footer a').css("display", "none");           
        $('#href-1').css("display", "block");
    };
    function hrefTwo() {
        $('footer a').css("display", "none");           
        $('#href-2').css("display", "block"); 
    };
    function hrefThree() {
        $('footer a').css("display", "none");           
        $('#href-3').css("display", "block");
    };
    function hrefFour() {
        $('footer a').css("display", "none");           
        $('#href-4').css("display", "block");
    };
    function hrefFive() {
        $('footer a').css("display", "none");           
        $('#href-5').css("display", "block");           
        $("#href-5").css("transform", "scaleY(-1)");
    };
    function hrefSix() {
        $('footer a').css("display", "none");           
        $('#href-0').css("display", "block"); 
        $("#href-5").css("transform", "scaleY(1)");
    };
    
    // scroll à la sourie ou pad
    /*var lastScrollTop = 0;
    
    $(window).scroll(function(event){
        var countScroll = 0;
        var state = 0;
        // event.stopPropagation();    
        var st = $(this).scrollTop();
        if (st > lastScrollTop && countScroll == 0){
            // downscroll
            $('#href-' + state).trigger('click');
            countScroll++;
            state++;
            console.log('scroll down');
        } else {
            // upscroll
            console.log('scroll up');
        }
        lastScrollTop = st;
    });*/
    
    // scroll au click sur la flèche du footer
    $('#href-0').on('click', function() {
        hrefOne();       
    });
    $('#href-1').on('click', function() {
         hrefTwo();         
    });
    $('#href-2').on('click', function() {
         hrefThree();          
    });
    $('#href-3').on('click', function() {
         hrefFour();          
    });
    $('#href-4').on('click', function() {
        hrefFive();
    });
    $('#href-5').on('click', function() {
        hrefSix();
    });
    
    // scroll fluide
    $('footer a').on('click', function() {
		var page = $(this).attr('href');
		var speed = 750;
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
	});
    
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