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

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });





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
