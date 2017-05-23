window.addEventListener("load",function(){
	
	var ip="localhost:1998"; //ip地址
	var aip="47.92.145.129:8000"; //ip地址
//	var browser={
//	    versions:function(){
//	        var u = navigator.userAgent, app = navigator.appVersion;
//	        return {
//	            trident: u.indexOf('Trident') > -1, //IE内核
//	            presto: u.indexOf('Presto') > -1, //opera内核
//	            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
//	            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
//	            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
//	            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
//	            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
//	            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
//	            iPad: u.indexOf('iPad') > -1, //是否iPad
//	            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
//	            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
//	            qq: u.match(/\sQQ/i) == " qq" //是否QQ
//	        };
//	    }(),
//	    language:(navigator.browserLanguage || navigator.language).toLowerCase()
//	}
	//判断是否IE内核
//	if(browser.versions.trident){ 
//		alert("is IE"); 
//	}
//	//判断是否webKit内核
//	if(browser.versions.webKit){ alert("is webKit"); }
//	//判断是否移动端
//	if(browser.versions.mobile||browser.versions.android||browser.versions.ios){ alert("移动端"); }
	
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
			alert("请上传头像！")
		}else 
		if(qnameVal==""){
			alert("请填写企业名称！")
		}
		else if(qadsVal==""){
			alert("请填写企业地址！")
		}
		else if(qpeonameVal==""){
			alert("请填写企业负责人！")
		}
		else if(qtelVal==""){
			alert("请填写负责人联系方式！")
		}
		else if(!(qtelVal.match(qtelRex))){
	    	alert("手机号格式不对")
	    }
		else if(qpicVal==""){
			alert("请企业营业执照！")
		}
		else{
			console.log("审核通过")
			//申请入驻表
			if(!sessionStorage.userId){
	    		alert('请先登录')
	    	}else{
				$.ajax({
					type:"post",
					url:"http://"+aip+"/qenter/enterprise",
					async:true,
					data:{
						CorporateHead: imgSrcheader,//企业头像
						CompanyName:qnameVal,   //：企业名称
						CompanyAddress:qadsVal,  //：地址
						CompanyLeader: qpeonameVal , //：企业负责人
						CompanyInformation:qtelVal,   //：联系方式
						CompanyKey: "", //：企业密钥
						CompanyWork:imgSrczheng,   //：企业营业执行照
						CompanyAudit:"",   //：企业审核
						nameuid:"1"  //登录人uid
					},
					success:function(data){
						console.log(data)
					}
				});
			}
		}
		
		
		//申请入驻表
		/*$.ajax({
			type:"post",
			url:"http://"+ip+"/qenter/enterprise",
			async:true,
			data:{
				CorporateHead: imgSrcheader,//企业头像
				CompanyName:qnameVal,   //：企业名称
				CompanyAddress:"北京大兴",  //：地址
				CompanyLeader: "王钰涵" , //：企业负责人
				CompanyInformation:"13693013340",   //：联系方式
				CompanyKey: "", //：企业密钥
				CompanyWork:imgSrczheng,   //：企业营业执行照
				CompanyAudit:""   //：企业审核
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
				Companyid:"2",   //：企业id
			},
			success:function(data){
				console.log(data)
			}
		});*/
		
		
//过去随机数（时间戳+uid）
	/*var timestamp = Date.parse(new Date()); //获取当前时间戳
	console.log(timestamp+"25");
//修改信息
	$.ajax({
		type:"post",
		url:"http://"+ip+"/qenter/changeq",
		async:true,
		data:{
			CompanyKey: timestamp+"11", //：企业密钥（时间戳+uid)
			CompanyAudit:"1",
			quid:"1"//：审核状态
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

	$('#sfzzfile').change(function(evt){
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






