$(function () {

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
            scrollTop: top - 100
        }, 1500);
    });



    //попап сабавтора на странице курса

    $('.course-plan__module-subauthor-btn').click(function () {
        $(this).addClass('open');
        $('.subauthor-card').addClass('open');
    });
    $(document).mouseup(function (e){ // отслеживаем клик
		var block = $(".subauthor-card"); //кнопка, меню В ней
		if (!block.is(e.target)&& block.has(e.target).length === 0) { //если клик не по кнопке/меню/чайлдам
			$('.course-plan__module-subauthor-btn').removeClass('open'); //кнопка неактивна
			$('.subauthor-card').removeClass('open'); //меню неактивно
		}
    });



    
    // (() => {
    //     const refs = {
    //         openModalBtn: document.querySelector("[data-modal-open]"),
    //         modal: document.querySelector("[data-modal]"),
    //     };

    //     refs.openModalBtn.addEventListener("click", toggleModal);

    //     function toggleModal() {
    //         refs.modal.classList.toggle("open");
    //         refs.openModalBtn.classList.toggle("open");
    //     }
    // })();



});