window.addEventListener("load",function(){
	
	
//	var ip="localhost:1998"; //ip地址
	var ip="192.168.43.246:1998"; //ip地址
	var aip="47.92.145.129:8000"; //ip地址

	
	



	
//点击协议，
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
//点击复选框
	var offf=false;
	$("#Job").click(function(){
		if(offf){
			$("#yu-submit").attr("disabled",true);
			offf=false;
		}else{
			$("#yu-submit").removeAttr("disabled");
			offf=true;
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
		if(headVal==""){
			$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("您还未上传头像");
			click_sure();
		}
		else if(teanameVal==""){
			$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("请填写团队名称");
			click_sure();
		}
		else if(tadsVal==""){
			$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("请填写团队地址");
			click_sure();
		}
		else if(peonameVal==""){
			$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("请填写团队负责人");
			click_sure();
		}
		else if(telVal==""){
			$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("请填写联系方式");
			click_sure();
		}
		else if(!(telVal.match(ttelRex))){
	    	$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("手机号格式不对");
			click_sure();
	    }
		else if(shenfVal==''){
			$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("请填写身份证号");
			click_sure();
		}
		else if(!(shenfVal.match(shenfRex))){
	    	$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("身份证号格式不对");
			click_sure();
	    }
		else if(sfzzVal==""){
			$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("请上传身份证正面照");
			click_sure();
		}else if(picVal==""){
			$(".yu_pop-up").css("display","block");
			$(".pop_up_content").html("请上传不少于5张作品");
			click_sure();
		}
		else{
			
//团队申请入驻表
			if(!sessionStorage.userId){
	    		alert('请先登录')
	    	}else{
				$.ajax({
					type:"post",
					url:"http://"+aip+"/tenter/team",
					async:true,
					data:{
//						TeamAvatar: dataURL,//团队头像
						TeamName:teanameVal,   //：团队名称
						TeamAddress:tadsVal,  //：地址
						TeamLeader: peonameVal , //：团队负责人
						TContactInformation:telVal,   //：联系方式
						IdentityCard:shenfVal ,  // ：负责人身份证号
						IdcardZheng:imgSrczheng,  //身份证正面照
						IdcardFan:imgSrcfan,  //身份证正面照
						TeamKey: "", //：团队密钥
						TeamWork:arr,   //：团队作品
						TeamAudit:"0"  , //：审核，默认不通过字段为0
						nameuid:sessionStorage.userId  //登录人uid
//						nameuid:"11"  //登录人uid
					},
					success:function(data){
						console.log("审核通过");
						console.log(data)
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
						else if(data.flag=="注册成功"){
							console.log("可以注册")
							//过去随机数（字母数字+时间戳+uid）
						    var timestamp = Date.parse(new Date()); //获取当前时间戳
							var dom=Math.random().toString(36).substr(2);
							var rand=timestamp+dom;
							$("#yu_Popup_window").css("display","block");
							$("#yu_Popup_window_keys").html(rand+sessionStorage.userId);
							$("#yu_Popup_window_btn").click(function(){
							//修改审核状态和密钥
								$.ajax({
									type:"post",
									url: "http://"+aip+"/tenter/tdetailPass",
									async:true,
									data:{
										TeamKey: rand+sessionStorage.userId, //：团队密钥（时间戳+uid)
										TeamAudit:"1", //：审核状态
										tuid:sessionStorage.userId 
									},
									success:function(data){
										console.log(data)
										$("#yu_Popup_window").css("display","none");
										location.reload()
//										$("#headfile,#sfzzfile,#sfzffile,#picfile,#shenfid,#yu_teamnamee,#yu_address,#yu_peopname,#yu_telh").val('');
									}
								})	
							})
						}
					}
				});
			}
		}
	
	
	
	
//		console.log("获取密钥");
		/*//查询企业名称
		$.ajax({
			type:"get",
			url:"http://"+ip+"/tenter/searchkeys",
			async:true,
			data:{
				companykeyss:'11'  //登录人uid
			},
			success:function(data){
				console.log(data)
//						console.log(data.result[0].tuid)
			}
		});*/
			
		//查询id名称
		/*$.ajax({
			type:"get",
			url:"http://"+ip+"/tenter/search",
			async:true,
			data:{
				Teamid:"33"  //：团队id
			},
			success:function(data){
				console.log(data)
//						console.log(data.result[0].tuid)
			}
		});*/

		
		
		//审核状态
		/*$.ajax({
			type:"get",
			url:"http://"+ip+"/tenter/auditstaus",
			async:true,
			data:{
				TeamAudit:"2"  //审核状态
			},
			success:function(data){
				console.log(data)
			}
		});*/
	//	
	
	
		//删除信息
		/*$.ajax({
			type:"get",
			url:"http://"+ip+"/tenter/delete",
			async:true,
			data:{
				teamidd:"40"   //：团队id
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
//			aaa = $.base64.btoa(dataURL)
//			fileH = this.files[0];
			if(fileH.size > 153600) {
//				alert("图片过大")
				$(".yu_pop-up").css("display","block");
				$(".pop_up_content").html("图片过大");
				click_sure();
				
			}else{
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
		}
	});
	
	
	


	
//上传身份照正面	
	$('#sfzzfile').change(function(evt){
   		var max_size=102400;
// 		var max_size=153600;
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
            			console.log(e)
            			imgSrczheng = e.lu;
            			if(e.nem!="身份证正面"){
//							alert("请上传有效证件");
							$(".yu_pop-up").css("display","block");
							$(".pop_up_content").html("请上传有效证件");
							click_sure();
						}else{
							console.log("身份证正面")
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

//上传身份照反面	
	 $('#sfzffile').change(function(evt){
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
            			console.log(e)
            			imgSrcfan = e.lu;
            			if(e.nem!="身份证反面"){
//							alert("请上传有效证件");
							$(".yu_pop-up").css("display","block");
							$(".pop_up_content").html("请上传有效证件");
							click_sure();
						}else{
							console.log("身份证反面")
							$('.imgsfzf')[0].src = 'http://47.92.145.129:8000/'+e.lu
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

//上传多张作品	
	var files;
    var fil = ''; 
    var arr = ''
    $('#yuh_pic').change(function() {
    	fil = this.files[0].name
    	console.log(this.files[0])
		console.log(this.value)  //获取到选取的图片
        files=this.files[0];
        var fd = new FormData();
        fd.append("uploadedFile", files);
        //鉴别黄图
        $.ajax({
			url: "http://47.92.145.129:8000/yanzhengs/huang",
			type: "post",
			data: fd,
			contentType: false,
			processData: false,
			success: function(data) {
				console.log(data)
				if(data.nem == '正常') {
//						imgSrcfan = $.base64.btoa(imgSrcfan)
				}
			}
		})
         $.ajax({
            url:"http://47.92.145.129:8000/yanzhengs/chan",
            type:"post",
            data:fd,
            contentType: false,
            processData: false,
            success:function(data){
            	console.log(data)
            	$("#yuhan_img").before('<img src="http://47.92.145.129:8000/'+data.nem+'" class="img">');
                arr+='<img src="http://47.92.145.129:8000/'+data.nem+'" class="img">'
                sessionStorage.setItem("arr",arr);
            },
            error:function(){
                console.log("上传图片错了！");
            }
        })
    })



/*
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
			$.ajax({
				url: "http://47.92.145.129:8000/users/huang",
				type: "post",
				data: formdata,
				contentType: false,
				processData: false,
				success: function(data) {
					console.log(data)
					if(data.nem == '正常') {
//						imgSrcheader = $.base64.btoa(imgSrcheader)
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
			$.ajax({
				url: "http://47.92.145.129:8000/users/huang",
				type: "post",
				data: formdata,
				contentType: false,
				processData: false,
				success: function(data) {
					console.log(data)
					if(data.nem == '正常') {
//						imgSrczheng = $.base64.btoa(imgSrczheng)
					}
				}
			})
		}
	})*/





	/*
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
			$.ajax({
				url: "http://47.92.145.129:8000/users/huang",
				type: "post",
				data: formdata,
				contentType: false,
				processData: false,
				success: function(data) {
					console.log(data)
					if(data.nem == '正常') {
//						imgSrcfan = $.base64.btoa(imgSrcfan)
					}
				}
			})
		}
	})*/


	
},false)
	
