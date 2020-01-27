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

	var linkTab = $('.open_tab');
	var menuTab = $('.catalog__content_li');

	linkTab.on('click', function(clickTab){
		clickTab.preventDefault();
		var target = $(clickTab.target);
		target.addClass('active');

		var link = target.attr('href');
		var activeTab = $(link);
		menuTab.addClass('d-n');
		activeTab.removeClass('d-n');
	});
});