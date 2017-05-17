window.addEventListener('load', function() {
	var listId = location.href.split('?')[1],
		uid = 0,
		salas = 0,
		html = '',
		num = 0;

	$.ajax({
		url: "http://47.92.145.129:8000/djsList/listDetails",
		type: "get",
		data: {
			listId: listId
		},
		success: function(data) {
			console.log(data)
			uid = data.data[0].uid;
			$('.djs-returnTitle').text(data.data[0].mainclass)
			$('.djs-content>p').text(data.data[0].tradename)
			$('.djs-Content').text(data.data[0].content)
			$('.djs-price>p').text(data.data[0].pricing)
			personalData(uid)
			reputation(uid)
		}
	})

	function personalData(uid) {
		$.ajax({
			url: "http://47.92.145.129:8000/personal/people",
			type: "get",
			data: {
				Applicant: uid
			},
			success: function(data) {
				console.log(data)
				$('.djs-data img').src = data.results[0].portrait;//设计师头像
				$('.dis-name p').text(data.results[0].shopName)//设计师名称
				$('.djs-material').text(data.results[0].briefIntroduction)//设计师个人介绍
			}
		})
	}
	
	function reputation(uid){
		$.ajax({
			url: "http://47.92.145.129:8000/djsList/issueList",
			type: "get",
			data: {
				uid: uid
			},
			success: function(data) {
				console.log(data.data)
				salas = 0
				html = ''
				for(var i=0; i<data.data.length; i++){
					salas+=data.data[i].salas;
				}
				if(salas>0&&salas<=20){
					num=Math.ceil(salas/20)
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>20&&salas<=40){
					num=Math.ceil(salas/20)
					for(var i=0; i<num; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>40&&salas<=60){
					num=Math.ceil(salas/20)
					for(var i=0; i<num; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>60&&salas<=80){
					num=Math.ceil(salas/20)
					for(var i=0; i<num; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>80&&salas<=100){
					num=Math.ceil(salas/20)
					num = Math.ceil(num/5)
					for(var i=0; i<num; i++){
						html+='<img src="../images/icon/花.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>100&&salas<=120){
					num=Math.ceil(salas/20)
					num = Math.ceil(num/5)
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}
			}
		})
	}
	
	$('.buy').click(function(){
		location.href="buy.html?"+listId;
	})



		
}, false)