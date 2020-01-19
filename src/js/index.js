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
});