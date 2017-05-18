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
				$('.djs-data img').src = $.base64.atob(data.results[0].portrait);//设计师头像
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
				}else if(salas>280&&salas<=300){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>300&&salas<=320){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>320&&salas<=340){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>340&&salas<=360){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>360&&salas<=380){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>380&&salas<=400){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>400&&salas<=420){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>420&&salas<=440){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>440&&salas<=460){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>460&&salas<=480){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>480&&salas<=500){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>500&&salas<=520){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>520&&salas<=540){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>540&&salas<=560){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>560&&salas<=580){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>580&&salas<=600){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>600&&salas<=620){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>620&&salas<=640){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>640&&salas<=660){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>660&&salas<=680){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>680&&salas<=700){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>700&&salas<=720){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>720&&salas<=740){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>740&&salas<=760){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>760&&salas<=780){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>780&&salas<=800){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>800&&salas<=820){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>820&&salas<=840){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>840&&salas<=860){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>860&&salas<=880){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>880&&salas<=900){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>900&&salas<=920){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>920&&salas<=940){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>940&&salas<=960){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>960&&salas<=980){
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>980&&salas<=1000){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1000&&salas<=1020){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1020&&salas<=1040){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1040&&salas<=1060){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1060&&salas<=1080){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1080&&salas<=1100){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1100&&salas<=1120){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1120&&salas<=1140){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1140&&salas<=1160){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1160&&salas<=1180){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1180&&salas<=1200){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1200&&salas<=1220){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1220&&salas<=1240){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1240&&salas<=1260){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1260&&salas<=1280){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1280&&salas<=1300){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1300&&salas<=1320){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1320&&salas<=1340){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1340&&salas<=1360){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1360&&salas<=1380){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1380&&salas<=1400){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1400&&salas<=1420){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1420&&salas<=1440){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1440&&salas<=1460){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1460&&salas<=1480){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1480&&salas<=1500){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1500&&salas<=1520){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1520&&salas<=1540){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1540&&salas<=1560){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1560&&salas<=1580){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1580&&salas<=1600){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1600&&salas<=1620){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1620&&salas<=1640){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1640&&salas<=1660){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1660&&salas<=1680){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1680&&salas<=1700){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1700&&salas<=1720){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1720&&salas<=1740){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1740&&salas<=1760){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1760&&salas<=1780){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1780&&salas<=1800){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1800&&salas<=1820){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1820&&salas<=1840){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1840&&salas<=1860){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1860&&salas<=1880){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1880&&salas<=1900){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1900&&salas<=1920){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1920&&salas<=1940){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1940&&salas<=1960){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1960&&salas<=1980){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1980&&salas<=2000){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2000&&salas<=2020){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>2020&&salas<=2040){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2040&&salas<=2060){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2060&&salas<=2080){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2080&&salas<=2100){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>2100&&salas<=2120){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2120&&salas<=2140){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2140&&salas<=2160){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2160&&salas<=2180){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2180&&salas<=2200){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2200&&salas<=2220){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2220&&salas<=2240){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2240&&salas<=2260){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2260&&salas<=2280){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2280&&salas<=2300){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2300&&salas<=2320){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>2320&&salas<=2340){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2340&&salas<=2360){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2360&&salas<=2380){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2380&&salas<=2400){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2400&&salas<=2420){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2420&&salas<=2440){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2440&&salas<=2460){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2460&&salas<=2500){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2500&&salas<=2520){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2520&&salas<=2540){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2540&&salas<=2560){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2560&&salas<=2580){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2580&&salas<=2600){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2600&&salas<=2620){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/花.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2620&&salas<=2640){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>2640&&salas<=2660){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2660&&salas<=2680){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2680&&salas<=2700){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2700&&salas<=2720){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2720&&salas<=2740){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2740&&salas<=2760){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2760&&salas<=2780){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2780&&salas<=2800){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2800&&salas<=2820){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2820&&salas<=2840){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2840&&salas<=2860){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2860&&salas<=2880){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2880&&salas<=2900){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2900&&salas<=2920){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2920&&salas<=2940){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2940&&salas<=2960){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2960&&salas<=2980){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2980&&salas<=3000){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3000&&salas<=3020){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>3020&&salas<=3040){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>3040&&salas<=3060){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3060&&salas<=3080){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3080&&salas<=3100){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3100&&salas<=3120){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>3120&&salas<=3140){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>3140&&salas<=3160){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3160&&salas<=3180){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3180&&salas<=3200){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3200&&salas<=3220){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>3220&&salas<=3240){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>3240&&salas<=3260){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3260&&salas<=3280){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3280&&salas<=3300){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3300&&salas<=3320){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>3320&&salas<=3340){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>3340&&salas<=3360){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3360&&salas<=3380){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3380&&salas<=3400){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3400&&salas<=3420){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>3420&&salas<=3440){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>3440&&salas<=3460){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3460&&salas<=3480){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3480&&salas<=3500){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3500&&salas<=3520){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>3520&&salas<=3540){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>3540&&salas<=3560){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3560&&salas<=3580){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3580&&salas<=3600){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3600&&salas<=3620){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>3620&&salas<=3640){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>3640&&salas<=3660){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3660&&salas<=3680){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3680&&salas<=3700){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3700&&salas<=3720){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>3720&&salas<=3740){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>3740&&salas<=3760){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3760&&salas<=3780){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3780&&salas<=3800){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3800&&salas<=3820){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>3820&&salas<=3840){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>3840&&salas<=3860){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3860&&salas<=3880){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3880&&salas<=3900){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3900&&salas<=3920){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>3920&&salas<=3940){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>3940&&salas<=3960){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3960&&salas<=3980){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>3980&&salas<=4000){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4000&&salas<=4020){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>4020&&salas<=4040){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>4040&&salas<=4060){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4060&&salas<=4080){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4080&&salas<=4100){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4100&&salas<=4120){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>4120&&salas<=4140){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>4140&&salas<=4160){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4160&&salas<=4180){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4180&&salas<=4200){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4200&&salas<=4220){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>4220&&salas<=4240){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>4240&&salas<=4260){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4260&&salas<=4280){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4280&&salas<=4300){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4300&&salas<=4320){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>4320&&salas<=4340){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>4340&&salas<=4360){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4360&&salas<=4380){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4380&&salas<=4400){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4400&&salas<=4420){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>4420&&salas<=4440){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>4440&&salas<=4460){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4460&&salas<=4480){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4480&&salas<=4500){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4500&&salas<=4520){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>4520&&salas<=4540){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>4540&&salas<=4560){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4560&&salas<=4580){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4580&&salas<=4600){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4600&&salas<=4620){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>4620&&salas<=4640){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>4640&&salas<=4660){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4660&&salas<=4680){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4680&&salas<=4700){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4700&&salas<=4720){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>4720&&salas<=4740){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>4740&&salas<=4760){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4760&&salas<=4780){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4780&&salas<=4800){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4800&&salas<=4820){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>4820&&salas<=4840){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>4840&&salas<=4860){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4860&&salas<=4880){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4880&&salas<=4900){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4900&&salas<=4920){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>4920&&salas<=4940){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>4940&&salas<=4960){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4960&&salas<=4980){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>4980&&salas<=5000){
					html+='<img src="../images/icon/黄芒果.png" alt="" />'
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>5000&&salas<=5020){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>5020&&salas<=5040){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>5040&&salas<=5060){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>5060&&salas<5080){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>5080&&salas<=5100){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>5100&&salas<5120){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>5120&&salas<=5140){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>5140&&salas<=5160){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>5160&&salas<=5180){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>160&&salas<=180){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>180&&salas<=200){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>200&&salas<=220){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>220&&salas<=240){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>240&&salas<=260){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>260&&salas<=280){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>300&&salas<=320){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>320&&salas<=340){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>360&&salas<=380){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>380&&salas<=400){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>400&&salas<=420){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>420&&salas<=440){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>440&&salas<=460){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>460&&salas<=480){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>480&&salas<=500){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>500&&salas<=520){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>520&&salas<=540){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>540&&salas<=560){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>560&&salas<=580){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>580&&salas<=600){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>600&&salas<=620){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>620&&salas<=640){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>640&&salas<=660){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>660&&salas<=680){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>680&&salas<=700){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>700&&salas<=720){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>720&&salas<=740){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>740&&salas<=760){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>760&&salas<=780){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>780&&salas<=800){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>800&&salas<=820){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>820&&salas<=840){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>840&&salas<=860){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>860&&salas<=880){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>880&&salas<=900){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>900&&salas<=920){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>920&&salas<=940){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>940&&salas<=960){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>960&&salas<=980){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>980&&salas<=1000){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1000&&salas<=1020){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1020&&salas<=1040){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1040&&salas<=1060){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1060&&salas<=1080){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1080&&salas<=1100){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1100&&salas<=1120){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1120&&salas<=1140){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1140&&salas<=1160){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1160&&salas<=1180){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1180&&salas<=1200){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1200&&salas<=1220){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1220&&salas<=1240){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1240&&salas<=1260){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1260&&salas<=1280){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1280&&salas<=1300){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1300&&salas<=1320){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1320&&salas<=1340){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1340&&salas<=1360){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1360&&salas<=1380){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1380&&salas<=1400){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1400&&salas<=1420){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1420&&salas<=1440){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1440&&salas<=1460){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1460&&salas<=1480){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1480&&salas<=1500){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1500&&salas<=1520){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1520&&salas<=1540){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1540&&salas<=1560){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1560&&salas<=1580){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1580&&salas<=1600){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1600&&salas<=1620){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1620&&salas<=1640){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1640&&salas<=1660){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1660&&salas<=1680){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1680&&salas<=1700){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1700&&salas<=1720){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1720&&salas<=1740){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1740&&salas<=1760){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1760&&salas<=1780){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1780&&salas<=1800){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1800&&salas<=1820){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1820&&salas<=1840){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1840&&salas<=1860){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1860&&salas<=1880){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1880&&salas<=1900){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1900&&salas<=1920){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1920&&salas<=1940){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1940&&salas<=1960){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1960&&salas<=1980){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1980&&salas<=2000){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2000&&salas<=2020){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2020&&salas<=2040){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2040&&salas<=2060){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>2060&&salas<=2080){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2080&&salas<=2100){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2100&&salas<=2120){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2120&&salas<=2140){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>2140&&salas<=2160){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2160&&salas<=2180){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2180&&salas<=2200){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2200&&salas<=2220){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2220&&salas<=2240){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2240&&salas<=2260){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2260&&salas<=2280){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2280&&salas<=2300){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2300&&salas<=2320){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2320&&salas<=2340){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2340&&salas<=2360){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>2360&&salas<=2380){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2380&&salas<=2400){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2400&&salas<=2420){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2420&&salas<=2440){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2440&&salas<=2460){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2460&&salas<=2480){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2480&&salas<=2500){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2500&&salas<=2520){
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2520&&salas<=2540){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>0&&salas<=20){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>20&&salas<=40){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>40&&salas<=60){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>60&&salas<=80){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>80&&salas<=100){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>100&&salas<=120){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>120&&salas<=140){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>140&&salas<=160){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>160&&salas<=180){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>180&&salas<=200){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>200&&salas<=220){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>220&&salas<=240){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>240&&salas<=260){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>260&&salas<=280){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>300&&salas<=320){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>320&&salas<=340){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>360&&salas<=380){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>380&&salas<=400){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>400&&salas<=420){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>420&&salas<=440){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>440&&salas<=460){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>460&&salas<=480){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>480&&salas<=500){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>500&&salas<=520){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>520&&salas<=540){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>540&&salas<=560){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>560&&salas<=580){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>580&&salas<=600){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>600&&salas<=620){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>620&&salas<=640){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>640&&salas<=660){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>660&&salas<=680){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>680&&salas<=700){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>700&&salas<=720){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>720&&salas<=740){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>740&&salas<=760){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>760&&salas<=780){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>780&&salas<=800){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>800&&salas<=820){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>820&&salas<=840){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>840&&salas<=860){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>860&&salas<=880){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>880&&salas<=900){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>900&&salas<=920){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>920&&salas<=940){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>940&&salas<=960){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>960&&salas<=980){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>980&&salas<=1000){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1000&&salas<=1020){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1020&&salas<=1040){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1040&&salas<=1060){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1060&&salas<=1080){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1080&&salas<=1100){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1100&&salas<=1120){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1120&&salas<=1140){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1140&&salas<=1160){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1160&&salas<=1180){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1180&&salas<=1200){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1200&&salas<=1220){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1220&&salas<=1240){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1240&&salas<=1260){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1260&&salas<=1280){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1280&&salas<=1300){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1300&&salas<=1320){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1320&&salas<=1340){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1340&&salas<=1360){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1360&&salas<=1380){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1380&&salas<=1400){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1400&&salas<=1420){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1420&&salas<=1440){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1440&&salas<=1460){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1460&&salas<=1480){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1480&&salas<=1500){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1500&&salas<=1520){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1520&&salas<=1540){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1540&&salas<=1560){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1560&&salas<=1580){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1580&&salas<=1600){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1600&&salas<=1620){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1620&&salas<=1640){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1640&&salas<=1660){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1660&&salas<=1680){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1680&&salas<=1700){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1700&&salas<=1720){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1720&&salas<=1740){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1740&&salas<=1760){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1760&&salas<=1780){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1780&&salas<=1800){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1800&&salas<=1820){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1820&&salas<=1840){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1840&&salas<=1860){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1860&&salas<=1880){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1880&&salas<=1900){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1900&&salas<=1920){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1920&&salas<=1940){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1940&&salas<=1960){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1960&&salas<=1980){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1980&&salas<=2000){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2000&&salas<=2020){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2020&&salas<=2040){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2040&&salas<=2060){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>2060&&salas<=2080){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2080&&salas<=2100){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2100&&salas<=2120){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2120&&salas<=2140){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>2140&&salas<=2160){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2160&&salas<=2180){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2180&&salas<=2200){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2200&&salas<=2220){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2220&&salas<=2240){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2240&&salas<=2260){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2260&&salas<=2280){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2280&&salas<=2300){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2300&&salas<=2320){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2320&&salas<=2340){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2340&&salas<=2360){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>2360&&salas<=2380){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2380&&salas<=2400){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2400&&salas<=2420){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2420&&salas<=2440){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2440&&salas<=2460){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2460&&salas<=2480){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2480&&salas<=2500){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2500&&salas<=2520){
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2520&&salas<=2540){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>0&&salas<=20){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>20&&salas<=40){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>40&&salas<=60){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>60&&salas<=80){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>80&&salas<=100){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>100&&salas<=120){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>120&&salas<=140){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>140&&salas<=160){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>160&&salas<=180){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>180&&salas<=200){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>200&&salas<=220){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>220&&salas<=240){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>240&&salas<=260){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>260&&salas<=280){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>300&&salas<=320){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>320&&salas<=340){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>360&&salas<=380){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>380&&salas<=400){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>400&&salas<=420){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>420&&salas<=440){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>440&&salas<=460){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>460&&salas<=480){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>480&&salas<=500){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>500&&salas<=520){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>520&&salas<=540){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>540&&salas<=560){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>560&&salas<=580){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>580&&salas<=600){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>600&&salas<=620){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>620&&salas<=640){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>640&&salas<=660){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>660&&salas<=680){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>680&&salas<=700){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>700&&salas<=720){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>720&&salas<=740){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>740&&salas<=760){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>760&&salas<=780){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>780&&salas<=800){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>800&&salas<=820){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>820&&salas<=840){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>840&&salas<=860){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>860&&salas<=880){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>880&&salas<=900){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>900&&salas<=920){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>920&&salas<=940){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>940&&salas<=960){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>960&&salas<=980){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>980&&salas<=1000){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1000&&salas<=1020){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					html+='<img src="../images/icon/青芒.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1020&&salas<=1040){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1040&&salas<=1060){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1060&&salas<=1080){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1080&&salas<=1100){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1100&&salas<=1120){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1120&&salas<=1140){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1140&&salas<=1160){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1160&&salas<=1180){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1180&&salas<=1200){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1200&&salas<=1220){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1220&&salas<=1240){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1240&&salas<=1260){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1260&&salas<=1280){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1280&&salas<=1300){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1300&&salas<=1320){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1320&&salas<=1340){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1340&&salas<=1360){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1360&&salas<=1380){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1380&&salas<=1400){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1400&&salas<=1420){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1420&&salas<=1440){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1440&&salas<=1460){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1460&&salas<=1480){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1480&&salas<=1500){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1500&&salas<=1520){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1520&&salas<=1540){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1540&&salas<=1560){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1560&&salas<=1580){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1580&&salas<=1600){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1600&&salas<=1620){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1620&&salas<=1640){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1640&&salas<=1660){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1660&&salas<=1680){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1680&&salas<=1700){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1700&&salas<=1720){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1720&&salas<=1740){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1740&&salas<=1760){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1760&&salas<=1780){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1780&&salas<=1800){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1800&&salas<=1820){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1820&&salas<=1840){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1840&&salas<=1860){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>1860&&salas<=1880){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1880&&salas<=1900){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1900&&salas<=1920){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1920&&salas<=1940){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>1940&&salas<=1960){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>1960&&salas<=1980){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>1980&&salas<=2000){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2000&&salas<=2020){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2020&&salas<=2040){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2040&&salas<=2060){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>2060&&salas<=2080){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2080&&salas<=2100){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2100&&salas<=2120){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2120&&salas<=2140){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>2140&&salas<=2160){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2160&&salas<=2180){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2180&&salas<=2200){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2200&&salas<=2220){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					html+='<img src="../images/icon/花.png" alt="" />';
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2220&&salas<=2240){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2240&&salas<=2260){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2260&&salas<=2280){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2280&&salas<=2300){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2300&&salas<=2320){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2320&&salas<=2340){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2340&&salas<=2360){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />';
					$('.dis-name div').append(html)
				}else if(salas>2360&&salas<=2380){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2380&&salas<=2400){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2400&&salas<=2420){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2420&&salas<=2440){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					$('.dis-name div').append(html)
				}else if(salas>2440&&salas<=2460){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					html+='<img src="../images/icon/叶子.png" alt="" />'
					$('.dis-name div').append(html)
				}else if(salas>2460&&salas<=2480){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<2; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2480&&salas<=2500){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<3; i++){
						html+='<img src="../images/icon/叶子.png" alt="" />'
					}
					$('.dis-name div').append(html)
				}else if(salas>2500&&salas<=2520){
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/黄芒果.png" alt="" />'
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/青芒.png" alt="" />';
					}
					for(var i=0; i<4; i++){
						html+='<img src="../images/icon/花.png" alt="" />';
					}
					for(var i=0; i<4; i++){
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