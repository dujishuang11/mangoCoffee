window.addEventListener('load',function(){
	//点击获取封面
	$('.lhq_pP_img').on('click',function(){
		console.log('1234th')
		$('.lhq_fff').click();
	})
	
	$.ajax({
		type: "get",
		url: "http://47.92.145.129:8000/users/nav",
		async: true,
		success: function(data) {
			console.log(data)
			$('.lhq_pP select option').remove()
			var html = ''
			for(var i = 0; i < data.length; i++) {
				html += '<option index="' + data[i].uid + '">' + data[i].names + '</option>'
			}
			$('.lhq_pP select').append(html)
		}
	});
	
},false)