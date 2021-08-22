$(document).ready(function(){

    //Efecto Menú
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top: '0'
        }, 2000 + ((index * 500)));
    });

    /*Header*/
    if( $(window).width() > 800 ){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });
    }
});