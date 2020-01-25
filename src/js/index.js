window.addEventListener('load', function(){

	setTimeout(function() {
		var body = document.body;
		body.classList.remove('ov-h');
		var preloader = document.querySelector('.preloader');
		preloader.classList.add('d-n');
	}, 5000);

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
});