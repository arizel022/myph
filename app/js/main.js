$(function () {

    $('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
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

    var mixer = mixitup('.exhibitions__grid');



    //-----------------------------------------гармошка блока faq
    $('.course-faq__ans').hide();
    $('.course-faq__question').click(function () { //при клике на вопрос
        $(this).toggleClass('open'); //применяются стили текущего вопроса
        $(this).siblings('.course-faq__ans').slideToggle('slow', function () { //появляется ответ текущего вопроса
            $('.course-faq__ans').not(this).hide('slow'); //скрывается ответ НЕ текущего вопроса
            $('.course-faq__ans').not(this).prev('.course-faq__question').removeClass('open'); //НЕ текущий вопрос теряет стили открытого
        });
    });

    
    // Верхний код на jquery переписаный нейросеткой
    // const ansList = document.querySelectorAll('.course-faq__ans');
    // const questionList = document.querySelectorAll('.course-faq__question');

    // ansList.forEach(ans => ans.style.display = 'none');

    // questionList.forEach(question => {
    //     question.addEventListener('click', function () {
    //         this.classList.toggle('open');

    //         const siblingAns = this.nextElementSibling;
    //         siblingAns.style.maxHeight ? siblingAns.style.maxHeight = null : siblingAns.style.maxHeight = siblingAns.scrollHeight + 'px';

    //         ansList.forEach(ans => {
    //             if (ans !== siblingAns) {
    //                 ans.style.maxHeight = null;
    //                 ans.previousElementSibling.classList.remove('open');
    //             }
    //         });
    //     });
    // });

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
    $(document).mouseup(function (e) { // отслеживаем клик
        var block = $(".subauthor-card"); //кнопка, меню В ней
        if (!block.is(e.target) && block.has(e.target).length === 0) { //если клик не по кнопке/меню/чайлдам
            $('.course-plan__module-subauthor-btn').removeClass('open'); //кнопка неактивна
            $('.subauthor-card').removeClass('open'); //меню неактивно
        }
    });


    

    // $('.popup-gallery').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'image',
	// 	tLoading: 'Loading image #%curr%...',
	// 	mainClass: 'mfp-img-mobile',
	// 	gallery: {
	// 		enabled: true,
	// 		navigateByImgClick: true,
	// 		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	// 	},
	// 	image: {
	// 		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	// 		titleSrc: function(item) {
	// 			return item.el.attr('title');
	// 		}
	// 	}
	// });


});