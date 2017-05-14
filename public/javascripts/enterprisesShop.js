window.addEventListener("load",function(){
	
	var ip="localhost:1998"; //ip地址
	
	
	
	
//点击协议
	var off=false;
	$("#yu_lab").click(function(){
		if(off){
			$("#yu-submit").attr("disabled",true);
			off=false;
		}else{
			$("#yu-submit").removeAttr("disabled");
			off=true;
			$("#yu-submit").click(function(){
				var tpfileVal=$("#tpfile").val(); //上传头像
				var qnameVal=$("#yu_qyname").val(); //企业名称
				var qadsVal=$("#yu_ads").val(); //企业地址
				var qpeonameVal=$("#yu_qypeoname").val(); //企业负责人
				var qtelVal=$("#yu_qitel").val(); //企业联系电话
				var qtelRex=/^1[34578]\d{9}$/;  //手机号验证
				var qpicVal=$("#fileid").val(); //企业营业执照
//				if(tpfileVal==""){
//					alert("请上传头像！")
//				}else if(qnameVal==""){
//					alert("请填写企业名称！")
//				}else if(qadsVal==""){
//					alert("请填写企业地址！")
//				}else if(qpeonameVal==""){
//					alert("请填写企业负责人！")
//				}else if(qtelVal==""){
//					alert("请填写负责人联系方式！")
//				}else if(!(qtelVal.match(qtelRex))){
//			    	alert("手机号格式不对")
//			    }else if(qpicVal==""){
//					alert("请企业营业执照！")
//				}else{
//					alert("审核通过")
//				}
				
				
				/*//申请入驻表
				$.ajax({
					type:"post",
					url:"http://"+ip+"/qenter/enterprise",
					async:true,
					data:{
						CorporateHead: imgSrcheader,//企业头像
						CompanyName:"哦我哎呀我是小钰",   //：企业名称
						CompanyAddress:"北京大兴",  //：地址
						CompanyLeader: "王钰涵" , //：企业负责人
						CompanyInformation:"13693013340",   //：联系方式
						CompanyKey: "111", //：企业密钥
						CompanyWork:imgSrczheng,   //：企业营业执行照
						CompanyAudit:"2"   //：企业审核
					},
					success:function(data){
						console.log(data)
					}
				});*/
				//查询企业名称
				/*$.ajax({
					type:"get",
					url:"http://"+ip+"/qenter/searchq",
					async:true,
					data:{
						CompanyName:"我是小钰",   //：团队名称
					},
					success:function(data){
						console.log(data)
//						console.log(data.result[0].tuid)
					}
				});*/
				//审核状态
				/*$.ajax({
					type:"get",
					url:"http://"+ip+"/qenter/auditstausq",
					async:true,
					data:{
						CompanyAudit:"3",   //：团队审核
					},
					success:function(data){
						console.log(data)
					}
				});*/
				//删除信息
				/*$.ajax({
					type:"get",
					url:"http://"+ip+"/qenter/deleteq",
					async:true,
					data:{
						CompanyName:"哦我哎呀我是小钰",   //：团队名称
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
		
	
//上传企业营业执照
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
	
	
	
	
	
	
},false)






