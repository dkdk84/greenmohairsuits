// mobile drop down menu
$(function(){
	$('.title .drop').click(function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		$('.left').toggleClass('open');
	});
});