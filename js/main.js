var footerContacts = $('.footer').find('.contacts__bottom'),
    contactsAddress = $('.footer').find('.footer__address'),
    allEvents = $('.portfolio__right').find('.btn'),
    arrowDown = $('.intro__arrow'),
    section = $('#header');

$(document).ready(function() {
    $('.intro__arrow').on('click', function() {
        $('.wrapper').animate({scrollTop:$('#header').offset().top+"px"},{duration:1E3});
      });

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


    //перестройка в слайдер (блок достижения)
    if ($(window).width() <= 768) {
        $('.awards__list').attr('id', 'lightSlider');
    }  
    if ($(window).width() > 768) {
        $('.awards__list').removeAttr('id');
    }  

    //перестройка в слайдер (блок о компании)
    if ($(window).width() <= 480) {
        $('.services__list').attr('id', 'lightSlider2');

    }  
    if ($(window).width() > 480) {
        $('.services__list').removeAttr('id');
    }  

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




$(window).resize(function() {
    // //перестройка в слайдер (блок достижения)
    // if ($(window).width() <= 768) {
    //     $('.awards__list').attr('id', 'lightSlider');
    // }  
    // if ($(window).width() > 768) {
    //     $('.awards__list').removeAttr('id');
    // }  

    // //перемещение блоков в футере
    // if ($(window).width() <= 480) {
    //     $('.contacts__block').after(footerContacts);
    //     $('.socials').before(contactsAddress);
    // }  

    // if ($(window).width() > 740) {
    //     $('#header').removeClass('fixed');
    // }

    // //перестройка в слайдер (блок портфолио)
    // if ($(window).width() <= 480) {
    //     $('.portfolio__list').attr('id', 'lightSlider4');

    // }  
    // if ($(window).width() > 480) {
    //     $('.portfolio__list').removeAttr('id');
    // }  
})
