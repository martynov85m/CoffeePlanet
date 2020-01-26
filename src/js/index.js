window.addEventListener('load', function(){

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

	var firstTab = document.querySelector('.catalog__tab > li:first-child');
	var secondTab = document.querySelector('.catalog__tab > li:nth-child(2)');
	var thirdTab = document.querySelector('.catalog__tab > li:last-child');
	var firstContent = document.querySelector('.catalog__content > li:first-child');
	var secondContent = document.querySelector('.catalog__content > li:nth-child(2)');
	var thirdContent = document.querySelector('.catalog__content > li:last-child');

	firstTab.addEventListener('click', function(){
		firstTab.classList.add('active');
		secondTab.classList.remove('active');
		thirdTab.classList.remove('active');
		firstContent.classList.remove('d-n');
		secondContent.classList.add('d-n');
		thirdContent.classList.add('d-n');
	});

	secondTab.addEventListener('click', function(){
		firstTab.classList.remove('active');
		secondTab.classList.add('active');
		thirdTab.classList.remove('active');
		firstContent.classList.add('d-n');
		secondContent.classList.remove('d-n');
		thirdContent.classList.add('d-n');
	});

	thirdTab.addEventListener('click', function(){
		firstTab.classList.remove('active');
		secondTab.classList.remove('active');
		thirdTab.classList.add('active');
		firstContent.classList.add('d-n');
		secondContent.classList.add('d-n');
		thirdContent.classList.remove('d-n');
	});
});