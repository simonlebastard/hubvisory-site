// Menu class when scrolled
$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});


