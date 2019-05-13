$(document).ready(function(){

	$('.btn').on('click', function(){

		$(this).siblings().removeClass('greenBg');
		$(this).siblings().children().removeClass('whiteTxt');
		$(this).addClass('greenBg');
		$(this).children().addClass('whiteTxt');

		var elem = $(this).attr('id');
		$('.page').hide();

		if(elem == $('#btn_js').attr('id')) $('#page_1').show();
		if(elem == $('#btn_jq').attr('id')) $('#page_2').show();
		if(elem == $('#btn_dom').attr('id')) $('#page_3').show();
		if(elem == $('#btn_css').attr('id')) $('#page_4').show();

	});

	$('#openTxt').on('click', function(){
		$(this).toggleClass('blueGround');
		$(this).children().toggleClass('whiteTxt');
		$('#openTxt1').slideToggle();
	});

});