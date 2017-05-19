window.addEventListener('load', function() {
	//导航
	var mainclass = '';
	$.ajax({
		type: "get",
		url: "http://47.92.145.129:8000/users/nav",
		async: true,
		success: function(data) {
			$('.djs-navTop ul li').remove()
			$('.djs-navTop ul').append('<li index="0">全部</li>')
			console.log(data)
			var html = ''
			for(var i = 0; i < data.length; i++) {
				html += '<li index="' + data[i].uid + '">' + data[i].names + '</li>'
			}
			$('.djs-navTop ul').append(html)
			$('.djs-navTop ul li:nth-child(1)').addClass("color");
		}
	});

	$('.djs-navTop ul').delegate('li', 'mouseover', function() {
		$(this).css('color', '#EA5813');
	})
	$('.djs-navTop ul').delegate('li', 'mouseout', function() {
		$(this).css('color', '#555555');
	})

	$('.djs-navTop ul').delegate('li', 'click', function() {
		$(this).addClass("color").siblings().removeClass('color');
		var id = $(this).attr('index');
		mainclass = $(this).text();
		if(id > 0) {
			obtainList(mainclass)
		} else {
			quan()
		}
	})

	$('.djs-px li:nth-child(1)').mouseover(function() {
		$('.djs-px li:nth-child(1) ul').css("display", "block")
	})
	$('.djs-px li:nth-child(1)').mouseout(function() {
		$('.djs-px li:nth-child(1) ul').css("display", "none")
	})

	var arrList;
	var len;
	var project = [];
	quan()

	function quan() {
		$.ajax({
			url: "http://47.92.145.129:8000/personal/all",
			type: "get",
			success: function(data) {
				console.log(data)
				if(data.flag == 1) {
					arrList = data.results;
					num = 1;
					len = Math.ceil(data.results.length / 12);
					$('.djs-fy li').remove()
					$('.djs-fy').append(showPages(1, len))
					list(num, len)
				} else {
					return;
				}
			}
		})
	}

	function list(num, len) {
		console.log(num, len)
//		var now = 0;
		$('.djs-list ul li').remove()
		var html = '';
		for(var i = ((num - 1) * 12); i < (num * 12); i++) {
			if(i == arrList.length) {
				break;
			} else {
				fuLength(i)
			}
		}
	}

	function fuLength(i) {
		$.ajax({
			url: "http://47.92.145.129:8000/djsList/issueList",
			type: "get",
			data: {
				uid: arrList[i].Applicant
			},
			success: function(data) {
				console.log(data, data.data.length)
				if(i < arrList.length) {
					djsList(i, data.data.length)
				}
			}
		})
	}

	function djsList(i, data) {
		console.log(i, data)
		$('.djs-list>ul').append('<li class="djs-List"><a href="personalData.html?' + arrList[i].Applicant + '"><div class = "djs-top"><img src = "' + $.base64.atob(arrList[i].portrait) + '" alt = ""/><div class = "djs-text fl"><p class = "djs-name">' + arrList[i].shopName + '</p><div><span class = "djs-num">' + data + '</span><span>个设计服务 </span></div><ul class="djs-category"></ul></div></div><div class = "djs-bottom">' + arrList[i].briefIntroduction + '</div></a></li>');
		var shopType = arrList[i].shopType.split(",")
		for(var j = 0; j < shopType.length; j++) {
			$(".djs-category").eq(i).append("<li>" + shopType[j] + "</li>")
		}
	}

	//获取分类列表

	function obtainList(mainclass) {
		console.log(mainclass)
		var html = '';
		var now = 0;
		$.ajax({
			url: "http://47.92.145.129:8000/personal/search",
			type: "get",
			data: {
				name: mainclass
			},
			success: function(data) {
				console.log(data)
				if(data.flag == 2) {
					return;
				} else {
					arrList = data;
					num = 1;
					len = Math.ceil(data.length / 12);
					$('.djs-fy li').remove()
					$('.djs-fy').append(showPages(1, len))
					list(num, len)
				}
			}
		})
	}

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

	var num = 1;
	$('.djs-fy').delegate('li', 'click', function() {
		$('.djs-fy li').remove()

		if($(this).text() == '上一页') {
			num--;
			list(num, len)
			$('.djs-fy').append(showPages(num, len))
		} else if($(this).text() == '下一页') {
			num++;
			list(num, len)
			$('.djs-fy').append(showPages(num, len))
		} else if($(this).text() == '···') {

		} else {
			num = Number($(this).text());
			list(num, len)
			$('.djs-fy').append(showPages(num, len))
		}

	})
}, false)