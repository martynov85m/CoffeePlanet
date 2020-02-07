$(function(){

	var mobileBtn = document.querySelector('.mobile-menu');
	var navigation = document.querySelector('.navigation__ul');
	mobileBtn.addEventListener('click', function(){
		navigation.classList.toggle('isOpened');
		mobileBtn.classList.toggle('closer');
	});
	navigation.addEventListener('click', function(){
		navigation.classList.remove('isOpened');
		mobileBtn.classList.remove('closer');
	});

	/* Modals */
	var btnModals = $('.btn_modal');

	btnModals.on('click', function(event){
		event.preventDefault();
		var target = $(event.target);
		var link = target.attr('href');

		var modal = $(link);
		modal.addClass('active');

		var container = modal.parents('.modal-container');
		container.removeClass('d-n');

	});

	var closer = $('.closer');

	closer.on('click', function(event){
		var target = $(event.target);
		var container = target.parents('.modal-container');
		container.addClass('d-n');
		var active = $('.modal-container .active');
		active.removeClass('active');
	});


	/* Tabs */
	var linkTab = $('.catalog__tab_a');
	var menuTab = $('.catalog__content_li');

	linkTab.on('click', function(event){
		event.preventDefault();
		var target = $(event.target);
		target.addClass('active');

		var link = target.attr('href');
		var activeTab = $(link);
		menuTab.addClass('d-n');
		activeTab.removeClass('d-n');
	});

	/* Slider */
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: 'ease-in-out',
		pauseOnHover: false,
		prevArrow: $('.slider-container__btn_prev'),
		nextArrow: $('.slider-container__btn_next')

	});
	/* Ease scroll */
	var navLinks = $('.navigation__link');

	navLinks.on('click', function(event){
		event.preventDefault();
		var target = $(event.target);
		var href = target.attr('href');
		var elemToScroll = $(href);

		$('html, body').animate({
			scrollTop: elemToScroll.offset().top - 50
		}, 900);
	});
	/* Fix head */
	$(window).on('scroll', function(event){
		var target = $(event.target);
		var scrolledPixels = target.scrollTop();
		var header = $('.header');
		if(scrolledPixels > 400){
			header.addClass('scrolled');
		} else {
			header.removeClass('scrolled');
		}
	});
	


});