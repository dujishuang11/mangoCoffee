window.addEventListener('load', function() {
	var listId = location.href.split('?')[1],
		uid = 0;

	$.ajax({
		url: "http://47.92.145.129:8000/djsList/listDetails",
		type: "get",
		data: {
			listId: listId
		},
		success: function(data) {
			uid = data.data[0].uid;
			$('.djs-returnTitle').text(data.data[0].mainclass)
			$('.djs-content>p').text(data.data[0].tradename)
			$('.djs-Content').text(data.data[0].content)
			$('.djs-price>p').text(data.data[0].pricing)
			personalData(uid)
		}
	})

	function personalData(uid) {
		$.ajax({
			url: "http://47.92.145.129:8000/users/gerenaing",
			type: "post",
			data: {
				uid: uid
			},
			success: function(data) {
				console.log(data)
//				$('.djs-data img').src = data[0].images;//设计师头像
//				$('.dis-name p').text(data[0].name)//设计设名称
//				$('.djs-material').text()//设计师个人介绍
			}
		})
	}
	
	$('.buy').click(function(){
		location.href="buy.html?"+listId;
	})



		
}, false)