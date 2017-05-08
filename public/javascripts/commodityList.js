window.addEventListener('load',function(){
	var indexNav = 0;
	$('.djs-navTop ul li:nth-child(1)').css('color','#EA5813');
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
	
	$('.djs-navTop ul li').click(function(){
		indexNav = $(this).index();
//		$('.djs-navTop ul li').css('color','black');
		$(this).css('color','#EA5813');
		if(indexNav == 0){
			$('.djs-navBottom').css('display','none');
		}else if(indexNav > 0){
			$('.djs-navBottom').css('display','block');
			$('.djs-navBottom > ul').css('display','none');
			$('.djs-navBottom > ul').eq(indexNav-1).css('display','block');
		}
	})
},false)