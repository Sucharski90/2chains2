//add sticky to header, taken off because it would mess up the image rotation
// window.onscroll = function() {myFunction()};
// let header = document.querySelector("header");
// let sticky = header.offsetTop;
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


$(window).load(function() {
	let InfiniteRotator =
	{
		init: function()
		{
			let initialFadeIn = 1000;

			let itemInterval = 5000;

			let fadeTime = 2500;

			let numberOfItems = $('.rotating-item').length;

			let currentItem = 0;

			$('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

			let infiniteLoop = setInterval(function(){
				$('.rotating-item').eq(currentItem).fadeOut(fadeTime);

				if(currentItem == numberOfItems -1){
					currentItem = 0;
				}   else {

				}{
					currentItem++;
				}
				$('.rotating-item').eq(currentItem).fadeIn(fadeTime);

			}, itemInterval);
		}
	};

	InfiniteRotator.init();

});
