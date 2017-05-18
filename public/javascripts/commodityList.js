window.addEventListener('load', function() {
	//导航
	var mainclass = '',
		subclass = '';
	$.ajax({
		type: "get",
		url: "http://47.92.145.129:8000/users/nav",
		async: true,
		success: function(data) {
			$('.djs-navTop ul li').remove()
			$('.djs-navTop ul').append('<li index="0">全部</li>')
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
			obtainList(mainclass, subclass)
		} else {
			quan()
		}
		$.ajax({
			type: "post",
			url: "http://47.92.145.129:8000/users/nav2",
			async: true,
			data: {
				uid: id
			},
			success: function(data) {
				if(data.length > 0) {
					$('.djs-navBottom').css('display', 'block')
					$('.djs-navBottom ul li').remove()
					var html = ''
					for(var i = 0; i < data.length; i++) {
						html += '<li>' + data[i].names + '</li>'
					}
					$('.djs-navBottom ul').append(html)
				} else {
					$('.djs-navBottom').css('display', 'none')
				}

			}
		});
	})

	$('.djs-navBottom ul').delegate('li', 'mouseover', function() {
		$(this).css('color', '#EA5813');
	})
	$('.djs-navBottom ul').delegate('li', 'mouseout', function() {
		$(this).css('color', '#555555');
	})

	$('.djs-navBottom ul').delegate('li', 'click', function() {
		$(this).addClass("color").siblings().removeClass('color');
		subclass = $(this).text();
		obtainList(mainclass, subclass)
	})

	$('.djs-px li:nth-child(1)').mouseover(function() {
		$('.djs-px li:nth-child(1) ul').css("display", "block")
	})
	$('.djs-px li:nth-child(1)').mouseout(function() {
		$('.djs-px li:nth-child(1) ul').css("display", "none")
	})

	$('.djs-list ul').delegate('li', 'mouseover', function() {
		$(this).css("box-shadow", "0 3px 2px 2px #E9E9E9").css("transform", "translateY(-3px)");
	})
	$('.djs-list ul').delegate('li', 'mouseout', function() {
		$(this).css("box-shadow", "none").css("transform", "translateY(0)");
	})

	var arrList;
	var len;

	quan()

	function quan() {
		$.ajax({
			url: "http://47.92.145.129:8000/djsList/list",
			type: "get",
			success: function(data) {
				console.log(data)
				if(data.success == "查无数据") {
					return;
				} else {
					arrList = data.data;
					num = 1;
					len = Math.ceil(data.data.length / 12);
					list(num, len)
					$('.djs-fy li').remove()
					$('.djs-fy').append(showPages(1, len))
				}
			}
		})
	}

	function list(num, len) {
		console.log(num, len)
		$('.djs-list ul li').remove()
		var html = '';
		for(var i = ((num - 1) * 12); i < (num * 12); i++) {
			if(i == arrList.length) {
				break;
			} else {
				html += '<li><a href="listDetails.html?' + arrList[i].listid + '"><img src="' + $.base64.atob(arrList[i].cover) + '" alt="" /><p class="djs-title">' + arrList[i].tradename + '</p><div></div><p class="djs-price">' + arrList[i].pricing + '</p></a></li>';
			}
		}
		$('.djs-list ul').append(html)
	}

	//获取分类列表

	function obtainList(mainclass, subclass) {
		var html = '';
		$.ajax({
			url: "http://47.92.145.129:8000/djsList/obtainList",
			type: "get",
			data: {
				mainclass: mainclass,
				subclass: subclass
			},
			success: function(data) {
				console.log(data)
				if(data.success == "查无数据") {
					return;
				} else {
					arrList = data.data;
					num = 1;
					len = Math.ceil(data.data.length / 12);
					list(num, len)
					$('.djs-fy li').remove()
					$('.djs-fy').append(showPages(1, len))
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

	//点击销量排序
	$('.djs-px>li>ul>li:nth-child(2)').click(function() {
		$.ajax({
			url: "http://47.92.145.129:8000/resume/salespx",
			type: "get",
			data: {
				mainclass: mainclass,
				subclass: subclass
			},
			success: function(data) {
				console.log(data)
				if(data.success == "查无数据") {
					return;
				} else {
					arrList = data.data;
					num = 1;
					len = Math.ceil(data.data.length / 12);
					list(num, len)
					$('.djs-fy li').remove()
					$('.djs-fy').append(showPages(1, len))
				}
			}
		})
	})

	//点击价格排序
	$('.djs-px>li>ul>li:nth-child(1)').click(function() {
		$.ajax({
			url: "http://47.92.145.129:8000/resume/pricepx",
			type: "get",
			data: {
				mainclass: mainclass,
				subclass: subclass
			},
			success: function(data) {
				console.log(data)
				if(data.success == "查无数据") {
					return;
				} else {
					arrList = data.data;
					num = 1;
					len = Math.ceil(data.data.length / 12);
					list(num, len)
					$('.djs-fy li').remove()
					$('.djs-fy').append(showPages(1, len))
				}
			}
		})
	})

	//点击综合排序
	$('.djs-px>li>ul>li:nth-child(3)').click(function() {
		$.ajax({
			url: "http://47.92.145.129:8000/resume/salespx",
			type: "get",
			data: {
				mainclass: mainclass,
				subclass: subclass
			},
			success: function(data) {
				console.log(data)
				if(data.success == "查无数据") {
					return;
				} else {
					arrList = data.data;
					num = 1;
					len = Math.ceil(data.data.length / 12);
					list(num, len)
					$('.djs-fy li').remove()
					$('.djs-fy').append(showPages(1, len))
				}
			}
		})
	})

	//点击原创设计
	$('.djs-px>li:nth-child(3)').click(function() {
		$.ajax({
			url: "http://47.92.145.129:8000/djsList/originalClass",
			type: "get",
			data: {
				mainclass: mainclass,
				subclass: subclass
			},
			success: function(data) {
				console.log(data)
				if(data.success == "查无数据") {
					return;
				} else {
					arrList = data.data;
					num = 1;
					len = Math.ceil(data.data.length / 12);
					list(num, len)
					$('.djs-fy li').remove()
					$('.djs-fy').append(showPages(1, len))
				}
			}
		})
	})

}, false)