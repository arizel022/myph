    // плавный скролл на Партнеры на главной, с других страниц - перенаправление
    // $(document).ready(function () {
    //     var isHomepage = $("body.home").length > 0;

    //     $('a[href="#partners-main-section"]').on('click', function (e) {
    //         e.preventDefault();
    //         var target = $($(this).attr('href'));

    //         if (isHomepage) {
    //             if (target.length) {
    //                 $('html, body').animate({
    //                     scrollTop: target.offset().top - $('header').height() - 100
    //                 }, 1000);
    //             }
    //         } else {
    //             window.location.href = '/#partners-main-section';
    //         }
    //     });


    // });


    $('.form__input').on('focus blur', function () {
        var label = $(this).parent('.form__label');
        if ($(this).val() === '') {
            if (event.type === 'focus') {
                label.addClass('focused');
            } else if (event.type === 'blur') {
                label.removeClass('focused');
            }
        } else {
            label.addClass('focused');
        }
    });


    $(function () {

        $('.vertical-gallery__content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            speed: 500,
            cssEase: 'linear',
            asNavFor: '.vertical-gallery__nav'
        });
        $('.vertical-gallery__nav').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.vertical-gallery__content',
            dots: false,
            vertical: true,
            prevArrow: '<button class="slick-arrow slick-prev" type="button"><span class="sr-only">Попередній слайд</span><svg class="slick-arrow__icon" width="24" height="24"><use xlink:href="images/sprite.svg#icon-arrow-slider"></use></svg></button>',
            nextArrow: '<button class="slick-arrow slick-next" type="button"><span class="sr-only">Наступний слайд</span><svg class="slick-arrow__icon" width="24" height="24"><use xlink:href="images/sprite.svg#icon-arrow-slider"></use></svg></button>',
            arrows: true,
            centerMode: true,
            focusOnSelect: true
        });

        //галерею можно использовать на любой странице
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
                duration: 300,
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
        $(document).ready(function () {
            // Назначаем обработчик на все кнопки с классом .exhibitions__filter-btn
            $('.exhibitions__filter-btn').click(function () {
                var filterValue = $(this).data('filter');
                // Добавляем класс .active на нажатую кнопку и удаляем этот класс у других кнопок
                $(this).addClass('active').parent().siblings().find('.exhibitions__filter-btn').removeClass('active');
                // Удаляем текущее фоновое изображение и добавляем новое, соответствующее нажатой кнопке
                $('.exhibitions__grid').removeClass('bg-ukr bg-germ bg-neth bg-norv').addClass('bg-' + $(this).data('filter').substr(1));
            });
        });





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