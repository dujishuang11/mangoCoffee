window.addEventListener('load', function() {
	var listId = location.href.split('?')[1];

	$.ajax({
		url: "http://47.92.145.129:8000/djsList/listDetails",
		type: "get",
		data: {
			listId: listId
		},
		success: function(data) {
			console.log(data)
			$('.djs-left img').attr("src", $.base64.atob(data.data[0].cover));
			$('.djs-text h4').text(data.data[0].tradename)
			$('.djs-price').text(data.data[0].pricing)
			$('.djs-pr').text(data.data[0].pricing)
			$('.djs-right div span:last-child').text("￥" + parseInt(data.data[0].pricing.split('￥')[1]) * Number($('.djs-right div span:nth-child(2)').text()));

			$.ajax({
				url: "http://47.92.145.129:8000/personal/people",
				type: "get",
				data: {
					Applicant: data.data[0].uid
				},
				success: function(data) {
					console.log(data)
					$('.djs-name span:last-child').text(data.results[0].shopName) //卖家姓名
				}
			})

			$('.djs-name span:last-child').text() //卖家姓名
		}
	})
})