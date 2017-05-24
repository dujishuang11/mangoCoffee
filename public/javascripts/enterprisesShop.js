window.addEventListener("load",function(){
	
	var ip="localhost:1998"; //ip地址
	var aip="47.92.145.129:8000"; //ip地址
//点击协议
	var off=false;
	$("#yu_lab").click(function(){
		if(off){
			$("#yu-submit").attr("disabled",true);
			off=false;
		}else{
			$("#yu-submit").removeAttr("disabled");
			off=true;
		}
	})
	var offo=false;
	$("#Job").click(function(){
		if(offo){
			$("#yu-submit").attr("disabled",true);
			offo=false;
		}else{
			$("#yu-submit").removeAttr("disabled");
			offo=true;
		}
	})
	//弹框函数
	function click_sure(){
		$(".yuhan_ok").click(function(){
			$(".yu_pop-up").css("display","none");
		})
		$(".yu_login_remove").click(function(){
			$(".yu_pop-up").css("display","none");
		})
	}
//点击审核
	$("#yu-submit").click(function(){
		var tpfileVal=$("#headfile").val(); //上传头像
		var qnameVal=$("#yu_qyname").val(); //企业名称
		var qadsVal=$("#yu_ads").val(); //企业地址
		var qpeonameVal=$("#yu_qypeoname").val(); //企业负责人
		var qtelVal=$("#yu_qitel").val(); //企业联系电话
		var qtelRex=/^1[34578]\d{9}$/;  //手机号验证
		var qpicVal=$("#fileid").val(); //企业营业执照
		if(tpfileVal==""){
			$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("请上传头像");
			click_sure();
		}
		else if(qnameVal==""){
			$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("请填写企业名称");
			click_sure();
		}
		else if(qadsVal==""){
			$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("请填写企业地址");
			click_sure();
		}
		else if(qpeonameVal==""){
			$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("请填写企业负责人");
			click_sure();
		}
		else if(qtelVal==""){
			$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("请填写负责人联系方式");
			click_sure();
		}
		else if(!(qtelVal.match(qtelRex))){
	    	$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("手机号格式不对");
			click_sure();
	    }
		else if(qpicVal==""){
			$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("请企业营业执照");
			click_sure();
		}
		else{
			//申请入驻表
			if(!sessionStorage.userId){
	    		alert('请先登录')
	    	}else{
				$.ajax({
					type:"post",
					url:"http://"+aip+"/qenter/enterprise",
					async:true,
					data:{
//						CorporateHead: imgSrcheader,//企业头像
						CompanyName:qnameVal,   //：企业名称
						CompanyAddress:qadsVal,  //：地址
						CompanyLeader: qpeonameVal , //：企业负责人
						CompanyInformation:qtelVal,   //：联系方式
						CompanyKey: "", //：企业密钥
						CompanyWork:imgSrczheng,   //：企业营业执行照
						CompanyAudit:0,   //：企业审核
						nameuid:sessionStorage.userId  //登录人uid
//						nameuid:"11"  //登录人uid
					},
					success:function(data){
						console.log(data)
						console.log("审核通过")
						if(data.flag=="企业已注册"){
//							alert("您已经注册过")
							$(".yu_pop-up").css("display","block");
							$(".pop_up_content").html("企业已经注册过");
							click_sure();
//							location.reload()
						}
						else if(data.flag=="团队已注册"){
//							alert("team您已经注册过")
							$(".yu_pop-up").css("display","block");
							$(".pop_up_content").html("团队已经注册过");
							click_sure();
//							location.reload()
						}
						else if(data.flag=="个人已注册"){
//							alert("team您已经注册过")
							$(".yu_pop-up").css("display","block");
							$(".pop_up_content").html("个人已经注册过");
							click_sure();
//							location.reload()
						}
						else if(data.flag==1){
							console.log("可以注册")
//							过去随机数（字母数字+时间戳+uid）
						    var timestamp = Date.parse(new Date()); //获取当前时间戳
							var dom=Math.random().toString(36).substr(2);
							var rand=timestamp+dom;
							$("#yu_Popup_window").css("display","block");
							$("#yu_Popup_window_keys").html(rand+sessionStorage.userId);
							$("#yu_Popup_window_btn").click(function(){
							//修改审核状态和密钥
								$.ajax({
									type:"post",
									url: "http://"+aip+"/qenter/qdetailPass",
									async:true,
									data:{
										qiyKey: rand+sessionStorage.userId, //：团队密钥（时间戳+uid)
										qiyAudit:"1", //：审核状态
										quid:sessionStorage.userId 
									},
									success:function(data){
										console.log(data)
										$("#yu_Popup_window").css("display","none");
										location.reload()
//										$("#headfile,#yu_qyname,#yu_ads,#yu_qypeoname,#yu_qitel,#fileid").val('');
									}
								})	
							})
						}
//						
						
					}
				});
			}
		}
		
		/*console.log("获取密钥");
		//查询企业名称
		$.ajax({
			type:"get",
			url:"http://"+ip+"/qenter/searchkeys",
			async:true,
			data:{
				companykeyss:'11'  //登录人uid
			},
			success:function(data){
				console.log(data)
//						console.log(data.result[0].tuid)
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
				Companyid:"2",   //：企业id
			},
			success:function(data){
				console.log(data)
			}
		});*/
		
	
})


//上传头像
	var fileH;
	var imgSrcheader = '';
	$('#headfile').change(function() {
		tops.style.top = 0
		fileH = this.files[0];
		console.log(fileH)
		var formdata = new FormData();
		formdata.append("uploadeFile", fileH);
		$.ajax({
			url: "http://47.92.145.129:8000/yanzhengs/huang",
			type: "post",
			data: formdata,
			contentType: false,
			processData: false,
			success: function(data) {
				console.log(data)
				sessionStorage.nem=data.nem;
				console.log(sessionStorage.nem)
				if(data.nem == '正常') {
					formdata = $.base64.btoa(formdata)
					console.log(formdata);
				}
			}
		})
	})
	$('#clipBtn').click(function() {
		tops.style.top = '-100%'
	})
	$("#clipArea").photoClip({
		width: 200,
		height: 200,
		file: "#headfile",
		view: "#view",
		ok: "#clipBtn",
		loadStart: function() {
			console.log("照片读取中");
		},
		loadComplete: function() {
			console.log("照片读取完成");
		},
		clipFinish: function(dataURL) {
			console.log(dataURL);
			$('.yu_imghead').attr('src', dataURL);
			if(sessionStorage.nem){
				$.ajax({
					type:"post",
					url:"http://"+aip+"/qenter/enterprise",
					async:true,
					data:{
						CorporateHead: dataURL    //企业头像
					},
					success:function(e){
						console.log(e)
						if(sessionStorage.nem=="正常"){
							console.log("ok")
						}else{
							console.log("no")
						}
						console.log("aaaaaaaaok")
					}
				})
			}else{
				console.log("没有nem")
			}
		}
	});
	
//上传企业营业执照
	$('#sfzzfile').change(function(evt){
   		var max_size=102400;
        var finput = $(this);   
        var files = evt.target.files; // 获得文件对象  
        var output = [];
        for (var i = 0, f; f = files[i]; i++){  
//          	//检查文件大小
            if(f.size > max_size){   
//              alert("上传的图片不能超过100KB!"); 
                $(".yu_pop-up").css("display","block");
				$(".pop_up_content").html("上传的图片不能超过100KB");
				click_sure();
                $(this).val('');   
            }else{
            	var fd = new FormData();
            	fd.append("uploadedFile", this.files[0]);
            	$.ajax({
            		type:"post",
            		url:"http://47.92.145.129:8000/yanzhengs/shenfene",
            		async:true,
            		data:fd,
            		contentType: false,
        			processData: false,
            		success:function(e){
            			console.log(e);
            			imgSrczheng = e.lu;
            			console.log(imgSrczheng)
						if(e.nem!="营业执照"){
//							alert("请上传有效证件");
							$(".yu_pop-up").css("display","block");
							$(".pop_up_content").html("请上传有效证件");
							click_sure();
						}else{
							console.log("是营业执照")
							$('.imgsfz')[0].src = 'http://47.92.145.129:8000/'+e.lu;
						}
            			
            		},
            		error:function(){
//		                alert("图片不合法");
		                $(".yu_pop-up").css("display","block");
							$(".pop_up_content").html("图片不合法");
							click_sure();
		            }
            	});
            }
        }
    });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
/*//上传头像
	var fileH;
	var imgSrcheader = '';
	$('#headfile').change(function() {
		fileH = this.files[0];
		if(fileH.size > 153600) {
			alert("图片过大")
		} else {
		var fileReader = new FileReader();
		fileReader.readAsDataURL(fileH);
		console.log(fileH)
		fileReader.onload = function(event) {
			imgSrcheader = event.target.result; //返回的dataURL  
			console.log(imgSrcheader)
			$('.yu_imghead').attr('src', imgSrcheader);
		}
		var formdata = new FormData();
		formdata.append("uploadeFile", fileH);
		console.log("上传头像成功")
			$.ajax({
				url: "http://47.92.145.129:8000/users/huang",
				type: "post",
				data: formdata,
				contentType: false,
				processData: false,
				success: function(data) {
					console.log(data)
					if(data.nem == '正常') {
						imgSrcheader = $.base64.btoa(imgSrcheader)
					}
				}
			})
		}
	})
		*/
	

	/*var fileZ;
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
	})*/
	
	
	
	
	
	
},false)






