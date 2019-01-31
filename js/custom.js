$(document).ready(function () {
    //Footer
    $('footer').hide();
    $('.unistall').click(function () {
        $('.unistall').addClass('arrow_box');
        $('footer').show();
    });



    //Back To Top
    $(document).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {

        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    //Browser specific 
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('chrome') != -1) {
        //browser is safari
        $(".custom-popup .modal-dialog").css("float", "right");
    }
    else if (userAgent.indexOf('safari') != -1) {
        //browser is chrome
        $(".custom-popup .modal-dialog").css("float", "right");
    }
    else if (userAgent.indexOf('firefox') != -1) {
        //browser is firefox
        $(".custom-popup .modal-dialog").css("float", "left");
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        //browser is ie
        $(".custom-popup .modal-dialog").css("vertical-align", "bottom");
    }
    else {

    }

});