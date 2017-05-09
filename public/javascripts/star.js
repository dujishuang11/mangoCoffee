window.addEventListener('load',function(){
	var indexNav = 0,
		indexnav = 0;
	$('.djs-navTop ul li:nth-child(1)').addClass("color");
	$('.djs-navTop ul li').mouseover(function() {
		$(this).css('color','#EA5813');
	})
	$('.djs-navTop ul li').mouseout(function() {
		$(this).css('color','black');
	})
	
	$('.djs-navBottom ul li').click(function(){
		console.log($('.djs-navBottom ul li').length)
		indexnav = $(this).index();
		$('.djs-navBottom ul li').removeClass("color");
		$('.djs-navBottom ul li').eq(indexnav).addClass("color");
	})
	
	$('.djs-navTop ul li').click(function(){
		indexNav = $(this).index();
		$('.djs-navTop ul li').removeClass("color");
		$('.djs-navTop ul li').eq(indexNav).addClass("color");
	})
	
	$('.djs-list ul li').mouseover(function() {
		$(this).css("box-shadow","0 3px 2px 2px #E9E9E9").css("transform","translateY(-3px)");
	})
	$('.djs-list ul li').mouseout(function() {
		$(this).css("box-shadow","none").css("transform","translateY(0)");
	})
},false)