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
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>20&&salas<=40){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>40&&salas<=60){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>60&&salas<=80){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>80&&salas<=100){
					html+='<img src="../images/icon/花.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>100&&salas<=120){
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>120&&salas<=140){
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>140&&salas<=160){
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>160&&salas<=180){
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>180&&salas<=200){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>200&&salas<=220){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>220&&salas<=240){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>240&&salas<=260){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>260&&salas<=280){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>300&&salas<=320){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>320&&salas<=340){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>360&&salas<=380){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>380&&salas<=400){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>400&&salas<=420){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>420&&salas<=440){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>440&&salas<=460){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>460&&salas<=480){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>480&&salas<=500){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>500&&salas<=520){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>520&&salas<=540){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>540&&salas<=560){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>560&&salas<=580){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>580&&salas<=600){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>600&&salas<=620){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>620&&salas<=640){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>640&&salas<=660){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>660&&salas<=680){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>680&&salas<=700){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>700&&salas<=720){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>720&&salas<=740){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>740&&salas<=760){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>760&&salas<=780){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>780&&salas<=800){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>800&&salas<=820){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>820&&salas<=840){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>840&&salas<=860){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>860&&salas<=880){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>880&&salas<=900){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>900&&salas<=920){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>920&&salas<=940){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>940&&salas<=960){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>960&&salas<=980){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}
			}
		})
	}
	
	$('.buy').click(function(){
		location.href="buy.html?"+listId;
	})



		
}, false)