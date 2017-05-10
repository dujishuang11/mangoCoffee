window.onload = function() {
	var indexNav = 0,
		indexnav = 0;
	$('.djs-navTop ul li:nth-child(1)').addClass("color");
	$('.djs-navTop ul li').mouseover(function() {
		$(this).css('color', '#EA5813');
	})
	$('.djs-navTop ul li').mouseout(function() {
		$(this).css('color', 'black');
	})

	$('.djs-navBottom ul li').mouseover(function() {
		$(this).css('color', '#EA5813');
	})
	$('.djs-navBottom ul li').mouseout(function() {
		$(this).css('color', 'black');
	})

	$('.djs-navBottom ul li').click(function() {
		console.log($('.djs-navBottom ul li').length)
		indexnav = $(this).index();
		$('.djs-navBottom ul li').removeClass("color");
		$('.djs-navBottom ul li').eq(indexnav).addClass("color");
	})

	$('.djs-navTop ul li').click(function() {
		indexNav = $(this).index();
		$('.djs-navTop ul li').removeClass("color");
		$('.djs-navTop ul li').eq(indexNav).addClass("color");
		if(indexNav == 0) {
			$('.djs-navBottom').css('display', 'none');
		} else if(indexNav == 1) {
			$('.djs-navBottom').css('display', 'block');
			$('.djs-navBottom > ul').css('display', 'none');
			$('.djs-logo').css('display', 'block');
		} else if(indexNav == 2) {
			$('.djs-navBottom').css('display', 'block');
			$('.djs-navBottom > ul').css('display', 'none');
			$('.djs-CI').css('display', 'block');
		} else if(indexNav == 3) {
			$('.djs-navBottom').css('display', 'block');
			$('.djs-navBottom > ul').css('display', 'none');
			$('.djs-BZ').css('display', 'block');
		} else if(indexNav == 5) {
			$('.djs-navBottom').css('display', 'block');
			$('.djs-navBottom > ul').css('display', 'none');
			$('.djs-SY').css('display', 'block');
		} else if(indexNav == 6) {
			$('.djs-navBottom').css('display', 'block');
			$('.djs-navBottom > ul').css('display', 'none');
			$('.djs-PM').css('display', 'block');
		} else if(indexNav == 7) {
			$('.djs-navBottom').css('display', 'block');
			$('.djs-navBottom > ul').css('display', 'none');
			$('.djs-SY').css('display', 'block');
		} else if(indexNav == 8) {
			$('.djs-navBottom').css('display', 'block');
			$('.djs-navBottom > ul').css('display', 'none');
			$('.djs-ZHSH').css('display', 'block');
		} else {
			$('.djs-navBottom').css('display', 'none');
		}
	})

	$('.djs-list ul li').mouseover(function() {
		$(this).css("box-shadow", "0 3px 2px 2px #E9E9E9").css("transform", "translateY(-3px)");
	})
	$('.djs-list ul li').mouseout(function() {
		$(this).css("box-shadow", "none").css("transform", "translateY(0)");
	})

	$('.djs-px li:nth-child(1)').mouseover(function() {
		$('.djs-px li:nth-child(1) ul').css("display", "block")
	})
	$('.djs-px li:nth-child(1)').mouseout(function() {
		$('.djs-px li:nth-child(1) ul').css("display", "none")
	})

	//分页
	function showPages(page, total) {
		var str = '<li class="page">' + page + '</li>';

		for(var i = 1; i <= 2; i++) {
			if(page - i > 1) {
				str = '<li>' + (page - i) + '</li>' + str;
			}
			if(page + i < total) {
				str = str + '<li>' + (page + i) + '</li>';
			}
		}
		if(page - 3 > 1) {
			str = '<li>···</li>' + str;
		}
		if(page > 1) {
			str = '<li>上一页</li><li>1</li>' + str;
		}
		if(page + 3 < total) {
			str = str + '<li>···</li>';
		}
		if(page < total) {
			str = str + '<li>' + total + '</li><li>下一页</li>';
		}
		return str;
	}
	$('.djs-fy').append(showPages(1, 20))

	var num = 0;
	$('.djs-fy').delegate('li', 'click', function() {
		$('.djs-fy li').remove()

		if($(this).text() == '上一页') {
			num--;
			$('.djs-fy').append(showPages(num, 20))
		} else if($(this).text() == '下一页') {
			num++;
			$('.djs-fy').append(showPages(num, 20))
		} else {
			num = Number($(this).text());
			$('.djs-fy').append(showPages(num, 20))
		}

	})

}