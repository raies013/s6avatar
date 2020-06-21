$(document).ready(function() {

	"use strict";

	jQuery("#contactForm").validator().on("submit", function (event) {

		"use strict";
		

		if (event.isDefaultPrevented()) {
			// fout gemaakt

			formError();
			submitMSG(false, "Voer alle velden correct in");
		} else {
			// goede invoer
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		
		"use strict";

		// form
		var name = $("#name").val();
		var email = $("#email").val();

		$.ajax({
			type: "POST",
			url: "php/form-process.php",
			data: "name=" + name + "&email=" + email,
			success : function(text){
				if (text == "success"){
					formSuccess();
				} else {
					formError();
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		
		"use strict";

		$("#contactForm")[0].reset();
		submitMSG(true, "Bedankt, wij nemen contact met je op. Je hoeft verder niks te doen.")
	}

	function formError(){
		
		"use strict";

		$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass();
		});
	}

	function submitMSG(valid, msg){
		
		"use strict";

		if(valid){
			var msgClasses = "success form-message";
		} else {
			var msgClasses = "error form-message";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}

//Terug naar boven knop
	initbackTop();
	function initbackTop() {
		
		"use strict";

		var jQuerybackToTop = jQuery("#back-top");
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > 100) {
				jQuerybackToTop.addClass('show');
			} else {
				jQuerybackToTop.removeClass('show');
			}
		});
		jQuerybackToTop.on('click', function(e) {
			jQuery("html, body").stop().animate({scrollTop: 0}, 1500, 'easeInOutExpo');
		});
	}
	
	$.scrollIt({
		topOffset: 0,
		scrollTime: 1500,
		easing: 'easeInOutExpo'
	});


// Video popup lightbox
	initLightbox();
	// modal popup 
	function initLightbox() {
		
		"use strict";

		jQuery('a.lightbox, a[rel*="lightbox"]').fancybox({
			padding: 0
		});
	}


//Scrollen logos
	initMarquee();

	function initMarquee() {
		"use strict";

		jQuery('.line-box').marquee({
			line: '.line',
			animSpeed: 50
		});
	}


}); 
$( window ).on( "load" , function() {
	"use strict";

	$( "#loader" ).delay( 600 ).fadeOut( 300 );
});

//FAQ Uitklappen
	const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
