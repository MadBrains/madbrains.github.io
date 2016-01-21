(function ($) {

    $(function () {

		jQuery.scrollDepth();

		$('.scrolly').click(function(e){
			e.preventDefault();
			$('#projects').animatescroll({scrollSpeed:500});
		});

		$('#header').scrollex({
    		enter: function() {
        		$('.more').css('visibility', 'visible');

   			},
    		leave: function() {
        		$('.more').css('visibility', 'hidden');
    		}
  		});

	});

})(jQuery);