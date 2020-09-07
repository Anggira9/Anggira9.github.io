$('.page').on('click', function() {
	let tujuan=$(this).attr('href');
	let elemenTujuan=$(tujuan);
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top-50
	});
});






// parallax
// about
$(window).on('load', function(){
	$('.kiri').addClass('ada');
	$('.kanan').addClass('ada');
});

$(window).scroll(function() {
		let wScroll = $(this).scrollTop();

		$('.jumbotron img').css({
			'transform' : 'translate(0px, '+ wScroll/4 + '%)'

	});

		$('.jumbotron h1').css({
			'transform' : 'translate(0px, '+ wScroll/3 + '%)'

	});

		$('.jumbotron h3').css({
			'transform' : 'translate(0px, '+ wScroll + '%)'

	});








		// portfolio
		if(wScroll > $('.portfolio').offset().top-300) {
			$('.portfolio .img-thumbnail').each(function(i){
				setTimeout(function(){
				$('.portfolio .img-thumbnail').eq(i).addClass("muncul");
				}, 300 * (i+1));
			})


			
		}
});