window.addEventListener("load",function(){
	
	
	var ip="localhost:1998"; //ip地址
	
//手机验证	
	/*var ttelRex=/^1[34578]\d{9}$/;  //手机号验证
	$("#yu_telh")[0].addEventListener("input",function(){
		var telVal=$("#yu_telh").val();
		if(telVal==""){
			console.log("请输入手机号")
	    }else if(!(telVal.match(ttelRex))){
	    	console.log("手机号格式不对")
	    }
	})*/
	
//身份证验证
	/*var shenfRex=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	$("#shenfid")[0].addEventListener("input",function(){
		var shenfVal=$("#shenfid").val();
		if(shenfVal==""){
			console.log("请输入身份证号")
	    }else if(!(shenfVal.match(shenfRex))){
	    	console.log("身份证号格式不对");
	    }
	})*/
	
	
	



	
//点击协议，点击审核
	var off=false;
	$("#yu_lab").click(function(){
		if(off){
			$("#yu-submit").attr("disabled",true);
			off=false;
		}else{
			$("#yu-submit").removeAttr("disabled");
			off=true;
			$("#yu-submit").click(function(){
				var shenfRex=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证正则
				var ttelRex=/^1[34578]\d{9}$/;  //手机号验证
				var headVal=$("#headfile").val(); //上传头像
				var sfzzVal=$("#sfzzfile").val(); //身份证正面照
				var sfzfVal=$("#sfzffile").val(); //身份证反面照
				var picVal=$("#picfile").val(); //上传作品
				var shenfVal=$("#shenfid").val(); //身份证
				var teanameVal=$("#yu_teamnamee").val(); //团队名称
				var tadsVal=$("#yu_address").val(); //团队地址
				var peonameVal=$("#yu_peopname").val(); //团队负责人
				var telVal=$("#yu_telh").val(); //负责人电话
//				if(headVal==""){
//					alert("您还未上传头像！")
//				}else 
//				if(teanameVal==""){
//					alert("请填写团队名称！")
//				}else if(tadsVal==""){
//					alert("请填写团队地址！")
//				}else if(peonameVal==""){
//					alert("请填写团队负责人！")
//				}else if(telVal==""){
//					alert("请填写联系方式！")
//				}else if(!(telVal.match(ttelRex))){
//			    	alert("手机号格式不对")
//			    }else if(shenfVal==''){
//					alert("请填写身份证号！")
//				}else if(!(shenfVal.match(shenfRex))){
//			    	alert("身份证号格式不对");
//			    }
//				else if(sfzzVal==""){
//					alert("请上传身份证正面照！")
//				}else if(picVal==""){
//					alert("请上传不少于5张作品！")
//				}
//				else{
//					console.log("审核通过");
//					
//				}
				//团队申请入驻表
/*				$.ajax({
					type:"post",
					url:"http://"+ip+"/tenter/team",
					async:true,
					data:{
						TeamAvatar: imgSrcheader,//团队头像
						TeamName:"1212小夏天咖芒公司啊",   //：团队名称
						TeamAddress:"abc",  //：地址
						TeamLeader: "王钰涵" , //：团队负责人
						TContactInformation:"13693013340",   //：联系方式
						IdentityCard:"411081199705209282" ,  // ：负责人身份证号
						IdcardZheng:imgSrczheng,  //身份证正面照
						IdcardFan:imgSrcfan,  //身份证正面照
						TeamKey: "sdouvubfibvoufvnods", //：团队密钥
						TeamWork:"dsvnodsbvosdn",   //：团队作品
						TeamAudit:"1"   //：审核
					},
					success:function(data){
						console.log(data)
					}
				});*/
				
				//查询团队名称
				/*$.ajax({
					type:"get",
					url:"http://"+ip+"/tenter/search",
					async:true,
					data:{
						TeamName:"咖芒公司啊",   //：团队名称
					},
					success:function(data){
						console.log(data)
//						console.log(data.result[0].tuid)
					}
				});
*/
				
				
				//审核状态
				/*$.ajax({
					type:"get",
					url:"http://"+ip+"/tenter/auditstaus",
					async:true,
					data:{
						TeamAudit:"2",   //：团队名称
					},
					success:function(data){
						console.log(data)
					}
				});*/
//				//修改信息
				/*$.ajax({
					type:"post",
					url:"http://"+ip+"/tenter/change",
					async:true,
					data:{
						TeamAvatar: imgSrcheader,//团队头像
						TeamName:"1212小夏天咖芒公司啊",   //：团队名称
						TeamAddress:"abc",  //：地址
						TeamLeader: "bbbb王钰涵111" , //：团队负责人
						TContactInformation:"13693013340",   //：联系方式
						IdentityCard:"411081199705209282" ,  // ：负责人身份证号
						IdcardZheng:imgSrczheng,  //身份证正面照
						IdcardFan:imgSrcfan,  //身份证正面照
						TeamKey: "sdouvubfibvoufvnods", //：团队密钥
						TeamWork:"dsvnodsbvosdn",   //：团队作品
						TeamAudit:"1"   //：审核
					},
					success:function(data){
						console.log(data)
					}
				});*/
				
				
			//删除信息
			/*$.ajax({
				type:"get",
				url:"http://"+ip+"/tenter/delete",
				async:true,
				data:{
					TeamName:"咖芒公司啊",   //：团队名称
				},
				success:function(data){
					console.log(data)
				}
			});*/
			
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
			})
		}
	})
	

//上传头像
	var fileH;
	var imgSrcheader = '';
	$('#headfile').change(function() {
		fileH = this.files[0];
		if(fileH.size > 153600) {
			alert("图片过大")
		} else {
		var fileReader = new FileReader();
		fileReader.readAsDataURL(fileH);
		fileReader.onload = function(event) {
			imgSrcheader = event.target.result; //返回的dataURL  
			console.log(imgSrcheader)
			$('.yu_imghead').attr('src', imgSrcheader);
		}
		var formdata = new FormData();
		formdata.append("uploadeFile", fileH);
		console.log("上传头像成功")
//			$.ajax({
//				url: "http://47.92.145.129:8000/users/huang",
//				type: "post",
//				data: formdata,
//				contentType: false,
//				processData: false,
//				success: function(data) {
//					console.log(data)
//					if(data.nem == '正常') {
//						imgSrcheader = $.base64.btoa(imgSrcheader)
//					}
//				}
//			})
		}
	})
	
	
//上传身份照正面	
	var fileZ;
	var imgSrczheng = '';
	$('#sfzzfile').change(function() {
		fileZ = this.files[0];
		if(fileZ.size > 153600) {
			alert("图片过大")
		} else {
		var fileReader = new FileReader();
		fileReader.readAsDataURL(fileZ);
		fileReader.onload = function(event) {
			imgSrczheng = event.target.result; //返回的dataURL  
			console.log(imgSrczheng)
			$('.imgsfz').attr('src', imgSrczheng);
		}
		var formdata = new FormData();
		formdata.append("uploadeFile", fileZ);
		console.log("上传身份正面照成功")
//			$.ajax({
//				url: "http://47.92.145.129:8000/users/huang",
//				type: "post",
//				data: formdata,
//				contentType: false,
//				processData: false,
//				success: function(data) {
//					console.log(data)
//					if(data.nem == '正常') {
//						imgSrczheng = $.base64.btoa(imgSrczheng)
//					}
//				}
//			})
		}
	})


//上传身份照反面	
	var fileF;
	var imgSrcfan = '';
	$('#sfzffile').change(function() {
		fileF = this.files[0];
		if(fileF.size > 153600) {
			alert("图片过大")
		} else {
		var fileReader = new FileReader();
		fileReader.readAsDataURL(fileF);
		fileReader.onload = function(event) {
			imgSrcfan = event.target.result; //返回的dataURL  
			console.log(imgSrcfan)
			$('.imgsfzf').attr('src', imgSrcfan);
		}
		var formdata = new FormData();
		formdata.append("uploadeFile", fileF);
		console.log("上传身份反面照成功")
//			$.ajax({
//				url: "http://47.92.145.129:8000/users/huang",
//				type: "post",
//				data: formdata,
//				contentType: false,
//				processData: false,
//				success: function(data) {
//					console.log(data)
//					if(data.nem == '正常') {
//						imgSrcfan = $.base64.btoa(imgSrcfan)
//					}
//				}
//			})
		}
	})

	
},false)
	
