window.addEventListener("load", function() {
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

	var num = 1;
	$('.djs-fy').delegate('li', 'click', function() {
		$('.djs-fy li').remove()

		if($(this).text() == '上一页') {
			num--;
			lhqfyhan(num)
			$('.djs-fy').append(showPages(num, lhqzy))
		} else if($(this).text() == '下一页') {
			num++;
			lhqfyhan(num)
			$('.djs-fy').append(showPages(num, lhqzy))
		} else if($(this).text() == '···'){
			return
		} else {
			num = Number($(this).text());
			$('.djs-fy').append(showPages(num, lhqzy))
			lhqfyhan(num)
		}

	})
	
	$('.lhq_zpfl_one').delegate("span",'click',function(){
		var lhq_zpfl = $(this).html();
		$.ajax({
			type: 'get',
			url:'http://47.92.145.129:8000/resume/lhqsearch',
			async: true,
			data:{
				Workarea:lhq_zpfl
			},
			success: function(data) {
					console.log(data)
			}
		})
	})
	
	
	
	
	
	
	
	
	
	
	var lhqzy = '';
	var lhqnewsarr = [];
	//查询
	var html = '';
	$.ajax({
		type: 'get',
		url: 'http://47.92.145.129:8000/resume/list',
		async: true,
		success: function(data) {
			lhqzy = Math.ceil(data.length / 8)
			lhqnewsarr = data;
			console.log(lhqnewsarr)
			$('.djs-fy').append(showPages(1, lhqzy))
			lhqfyhan(num)
		}
	})

	function lhqfyhan(newsindex) {
		$('.lhq_rlist_ul li').remove();
		html = ''
		console.log(newsindex)
		for(var i = ((newsindex - 1) * 8); i < (newsindex * 8); i++) {
			if(i == lhqnewsarr.length){
				break;
			}else{
				html += '<li><a href="recruitDetails.html?' + lhqnewsarr[i].resumeId + '"><span>' + lhqnewsarr[i].Workarea + '</span><span>' + lhqnewsarr[i].JobTitle + '</span><span>' + lhqnewsarr[i].HandsOnBackground + '</span><span>' + lhqnewsarr[i].FBtime + '</span></a></li>'
			}
		}
		$('.lhq_rlist_ul').append(html)
	}
	
	
	$('.lhq_ypbutton').click(function(){
			location.href='I_want_to_apply.html'
	})
	
	
	
	
})
