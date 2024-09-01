$(function(){
    $(window).scroll(function(){
        var windowOffY = $(window).scrollTop();
        var windowHeight = $(window).height();
        $('.sessao').each(function(){
            var elOffY = $(this).offset().top;
            if(elOffY < (windowOffY + windowHeight) && 
                elOffY+$(this).height() > windowOffY){
                    $('a').css('border-bottom', '0');
                    var target = $(this).attr('target');
                    $('.'+target).css('border-bottom','2px solid #333');
                    return;
            }
        });
    });
});