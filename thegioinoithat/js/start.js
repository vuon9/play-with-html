$(document).ready(function(){
    //$("#featured > ul").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true);
    //$( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    //$( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
    $("#tabs").tabs({fx:{opacity: "toggle"}});  
    $(".partner-brand").jCarouselLite({
        auto: 800,
        speed: 3000,
        circular: true
    });

    init_sidebar();
});


function init_sidebar(){
    $('.nav-horizontal>li>a').click(function(e){
        e.preventDefault();
        $(this).parent().parent().find('li ul').hide();
        $(this).parent().find('ul').show();
    });
}