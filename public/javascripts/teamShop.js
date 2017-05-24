window.addEventListener("load",function(){
	
	
	var ip="localhost:1998"; //ip地址
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
			alert("您还未上传头像！")
		}
		else if(teanameVal==""){
			alert("请填写团队名称！")
		}
		else if(tadsVal==""){
			alert("请填写团队地址！")
		}
		else if(peonameVal==""){
			alert("请填写团队负责人！")
		}
		else if(telVal==""){
			alert("请填写联系方式！")
		}
		else if(!(telVal.match(ttelRex))){
	    	alert("手机号格式不对")
	    }
		else if(shenfVal==''){
			alert("请填写身份证号！")
		}
		else if(!(shenfVal.match(shenfRex))){
	    	alert("身份证号格式不对");
	    }
		else if(sfzzVal==""){
			alert("请上传身份证正面照！")
		}else if(picVal==""){
			alert("请上传不少于5张作品！")
		}
		else{
			console.log("审核通过");
//团队申请入驻表
			if(!sessionStorage.userId){
	    		alert('请先登录')
	    	}else{
				$.ajax({
					type:"post",
					url:"http://"+aip+"/tenter/team",
					async:true,
					data:{
						TeamAvatar: imgSrcheader,//团队头像
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
						nameuid:"1"  //登录人uid
					},
					success:function(data){
						console.log(data)
						sessionStorage.setItem('uidt',data.insertId)
					}
				});
			}
		}
	
	//团队申请入驻表	
		/*$.ajax({
			type:"post",
			url:"http://"+ip+"/tenter/team",
			async:true,
			data:{
				TeamAvatar: imgSrcheader,//团队头像
				TeamName:teanameVal,   //：团队名称
				TeamAddress:tadsVal,  //：地址
				TeamLeader: peonameVal , //：团队负责人
				TContactInformation:telVal,   //：联系方式
				IdentityCard:shenfVal ,  // ：负责人身份证号
				IdcardZheng:imgSrczheng,  //身份证正面照
				IdcardFan:imgSrcfan,  //身份证正面照
				TeamKey: "", //：团队密钥
				TeamWork:arr,   //：团队作品
				TeamAudit:""   //：审核
			},
			success:function(data){
				console.log(data)
				sessionStorage.setItem('uidt',data.insertId)
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
	
	//过去随机数（字母数字+时间戳+uid）
//	    var timestamp = Date.parse(new Date()); //获取当前时间戳
//		var dom=Math.random().toString(36).substr(2);
//		var rand=timestamp+dom;
//		console.log(rand);


	//修改信息
		/*$.ajax({
			type:"post",
			url:"http://"+ip+"/tenter/change",
			async:true,
			data:{
				TeamKey: rand+"28", //：团队密钥（时间戳+uid)
				TeamAudit:"1",
				tuid:28 //：审核状态
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
                alert("上传的图片不能超过100KB!");   
                $(this).val('');   
            }else{
            	var fd = new FormData();
            	fd.append("uploadedFile", this.files[0]);
            	$.ajax({
            		type:"post",
            		url:"http://47.92.145.129:8000/users/chan",
            		async:true,
            		data:fd,
            		contentType: false,
        			processData: false,
            		success:function(e){
            			console.log(e)
            			imgSrczheng = e.nem
            			$('.imgsfz')[0].src = 'http://47.92.145.129:8000/'+e.nem
            		},
            		error:function(){
		                alert("图片不合法");
		            }
            	});
            }
        }
    });




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


//上传身份照反面	
	 $('#sfzffile').change(function(evt){
   		var max_size=102400;
        var finput = $(this);   
        var files = evt.target.files; // 获得文件对象  
        var output = [];
        for (var i = 0, f; f = files[i]; i++){  
//          	//检查文件大小
            if(f.size > max_size){   
                alert("上传的图片不能超过100KB!");   
                $(this).val('');   
            }else{
            	var fd = new FormData();
            	fd.append("uploadedFile", this.files[0]);
            	$.ajax({
            		type:"post",
            		url:"http://47.92.145.129:8000/users/chan",
            		async:true,
            		data:fd,
            		contentType: false,
        			processData: false,
            		success:function(e){
            			console.log(e)
            			imgSrcfan = e.nem
            			$('.imgsfzf')[0].src = 'http://47.92.145.129:8000/'+e.nem
            		},
            		error:function(){
		                alert("图片不合法");
		            }
            	});
            }
        }
    });




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
			url: "http://47.92.145.129:8000/users/huang",
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
            url:"http://47.92.145.129:8000/users/chan",
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


	
},false)
	
