$(function () {





    // ЭТОТ код только для локального сервера
    $(document).ready(function () {
        if (window.location.href.indexOf('localhost') !== -1) {
            $('a[href="#partners-main-section"]').on('click', function (e) {
                e.preventDefault();
                var target = $($(this).attr('href'));
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - $('header').height() - 100
                    }, 1000);
                }
            });
        } else {
            window.location.href = '/#partners-main-section';
        }
    });



    // этот код проверить на хостинге
    // Проверяем, находимся ли мы на главной странице
    // if (window.location.pathname === '/') {
    //     // Если да, добавляем обработчик события на ссылку
    //     $('a[href="#partners-main-section"]').on('click', function (e) {
    //         e.preventDefault();
    //         var target = $($(this).attr('href'));
    //         if (target.length) {
    //             $('html, body').animate({
    //                 scrollTop: target.offset().top - $('header').height() - 100
    //             }, 1000);
    //         }
    //     });
    // } else {
    //     // Если нет, перенаправляем пользователя на главную страницу с якорем
    //     window.location.href = '/#partners-main-section';
    // }
    // });






    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });

 
    $('.partners__list').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplaySpeed: 1000,
        slidesToShow: 4,

        autoplay: true
    });

    $('.hero__slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplaySpeed: 10000,
        autoplay: true,
        fade: true
    });

    $('.reviews__inner').slick({
        dots: true,
        arrows: true
    });

    $('.course-price__button').click(function () {
        $(this).toggleClass('active');
    });

    //запускать инициализацию микситапа только, если мы на странице exhibitions.html
    if (window.location.pathname === '/exhibitions.html') {
        var mixer = mixitup('.exhibitions__grid');
      }





    //-----------------------------------------гармошка блока faq
    $('.course-faq__ans').hide();
    $('.course-faq__question').click(function () { //при клике на вопрос
        $(this).toggleClass('open'); //применяются стили текущего вопроса
        $(this).siblings('.course-faq__ans').slideToggle('slow', function () { //появляется ответ текущего вопроса
            $('.course-faq__ans').not(this).hide('slow'); //скрывается ответ НЕ текущего вопроса
            $('.course-faq__ans').not(this).prev('.course-faq__question').removeClass('open'); //НЕ текущий вопрос теряет стили открытого
        });
    });


    //нужен только странице course-art-consciousness.html (возможно другим страницам курсов)
    $(".course-hero__button").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - 300
        }, 1500);
    });







    //попап сабавтора на странице курса

    $('.course-plan__module-subauthor-btn').click(function () {
        $(this).addClass('open');
        $('.subauthor-card').addClass('open');
    });
    $(document).mouseup(function (e) { // отслеживаем клик
        var block = $(".subauthor-card"); //кнопка, меню В ней
        if (!block.is(e.target) && block.has(e.target).length === 0) { //если клик не по кнопке/меню/чайлдам
            $('.course-plan__module-subauthor-btn').removeClass('open'); //кнопка неактивна
            $('.subauthor-card').removeClass('open'); //меню неактивно
        }
    });




});