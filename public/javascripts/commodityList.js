window.onload=function() {
	var indexNav = 0,
		indexnav = 0;
	$('.djs-navTop ul li:nth-child(1)').addClass("color");
	$('.djs-navTop ul li').mouseover(function() {
		$(this).css('color','#EA5813');
	})
	$('.djs-navTop ul li').mouseout(function() {
		$(this).css('color','black');
	})
	
	$('.djs-navBottom ul li').mouseover(function() {
		$(this).css('color','#EA5813');
	})
	$('.djs-navBottom ul li').mouseout(function() {
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
		if(indexNav == 0){
			$('.djs-navBottom').css('display','none');
		}else if(indexNav == 1){
			$('.djs-navBottom').css('display','block');
			$('.djs-navBottom > ul').css('display','none');
			$('.djs-logo').css('display','block');
		}else if(indexNav == 2){
			$('.djs-navBottom').css('display','block');
			$('.djs-navBottom > ul').css('display','none');
			$('.djs-CI').css('display','block');
		}else if(indexNav == 3){
			$('.djs-navBottom').css('display','block');
			$('.djs-navBottom > ul').css('display','none');
			$('.djs-BZ').css('display','block');
		}else if(indexNav == 5){
			$('.djs-navBottom').css('display','block');
			$('.djs-navBottom > ul').css('display','none');
			$('.djs-SY').css('display','block');
		}else if(indexNav == 6){
			$('.djs-navBottom').css('display','block');
			$('.djs-navBottom > ul').css('display','none');
			$('.djs-PM').css('display','block');
		}else if(indexNav == 7){
			$('.djs-navBottom').css('display','block');
			$('.djs-navBottom > ul').css('display','none');
			$('.djs-SY').css('display','block');
		}else if(indexNav == 8){
			$('.djs-navBottom').css('display','block');
			$('.djs-navBottom > ul').css('display','none');
			$('.djs-ZHSH').css('display','block');
		}else {
			$('.djs-navBottom').css('display','none');
		}
	})
	
	$('.djs-list ul li').mouseover(function() {
		$(this).css("box-shadow","0 3px 2px 2px #E9E9E9").css("transform","translateY(-3px)");
	})
	$('.djs-list ul li').mouseout(function() {
		$(this).css("box-shadow","none").css("transform","translateY(0)");
	})
	
	$('.djs-px li:nth-child(1)').mouseover(function() {
		$('.djs-px li:nth-child(1) ul').css("display","block")
	})
	$('.djs-px li:nth-child(1)').mouseout(function() {
		$('.djs-px li:nth-child(1) ul').css("display","none")
	})
	
	
	
}