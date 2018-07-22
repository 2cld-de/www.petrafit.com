

(function ($) {
   	$(document).ready(function() {
		
		/* WINDOW RESIZE ACTIONS */   		
   		$(window).resize(function(){
			fullsizeBanner ();
			stickyFooter ();
		});
		
		/* WINDOW LOAD ACTIONS */   		
   		$(window).load(function(){
			fullsizeBanner ();
			stickyFooter ();
		});
		
		function fullsizeBanner (){
			$("#banner").height( $(window).height() - 90 );
		}
		

	
		$("#bannerbutton").click(function(){
			$("body").animate({
				scrollTop: $(window).height()
			});
		});
	
		//menu button with overlay
		$("#menuicon").click(function() {
   			$("#hauptmenu").slideToggle();
			
		});
		
		// Sticky Footer
		function stickyFooter ()
		{
			var headerHeight = $("header").height();
			var contentHeight = $("#wrapper").height();
			var footerHeight = $("footer").height();
			var wrapperPaddingTop = $("#wrapper").css('padding-top').slice(0, -2);
			var wrapperPaddingBottom = $("#wrapper").css('padding-bottom').slice(0, -2);
			var windowHeight = $(window).height();
			if (headerHeight + contentHeight + footerHeight < windowHeight)
			{
				//alert(headerHeight + contentHeight + footerHeight);
				$("#wrapper").height(windowHeight - headerHeight - footerHeight - wrapperPaddingTop - wrapperPaddingBottom);
			}
		}
		
		
	});
		
}(jQuery));