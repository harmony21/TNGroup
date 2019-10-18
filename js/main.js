var footerContacts = $('.footer').find('.contacts__bottom'),
    contactsAddress = $('.footer').find('.footer__address'),
    allEvents = $('.portfolio__right').find('.btn');

$(document).ready(function() {
    //действия при скроллинге
    $('.wrapper').on("scroll", function () {
        var scrolled = $(this).scrollTop();
        if ($(window).width() <= 740) {
            if( scrolled > 640 ) {
            $('#header').addClass('fixed');
            }   
            if( scrolled <= 640 ) {     
                $('#header').removeClass('fixed');
            }
        }
    });

    //перемещение блоков в футере
    if ($(window).width() <= 480) {
        $('.footer').find('.contacts__block').after(footerContacts);
        $('.footer').find('.socials').before(contactsAddress);
    }  

    //перестройка в слайдер (блок портфолио)
    if ($(window).width() <= 480) {
        $('.portfolio__list').attr('id', 'lightSlider4');

    }  
    if ($(window).width() > 480) {
        $('.portfolio__list').removeAttr('id');
    }  

    if ($(window).width() <= 480) {
        $('.portfolio__right').find('.portfolio__wrap').after(allEvents);
    }  

    //видео в модальном окне
    $("a.video__link").fancybox();

    //мобильное меню
    if ($(window).width() <= 740) {
        $('.hamburger').fancybox({
            afterLoad : function(){
                $(".fancybox-container").addClass('fadeInRight animated');
            },
            beforeClose : function(){
                $(".fancybox-container").addClass('fadeOutLeft animated');
            }   
        });
    }
});
