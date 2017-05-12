window.addEventListener("load",function(){
//	var select = document.getElementById("test");
	/*$("#yu_sure").click(function(){
		
	    var str = [];
	    for(i=0;i<$("#test").length;i++){
	        if($("#test").options[i].selected){
	            str.push($("#test")[i].value);
	        }
	    }
	    alert(str);
	})
	*/
	
/*$(function(){
    $("#btn").click(function() {
        var all = "";
        $("#multi-sel option").each(function() {
            all += $(this).attr("value")+" ";
            console.log(all)
        });
        var sel = $("#multi-sel").val();
         console.log(sel)
        alert("多选列表所有的value值:"+all+"，其中被选中的是:"+sel+"。");
    });
})
	*/
	
	

	


/*	//手机验证	
	var ttelRex=/^1[34578]\d{9}$/;  //手机号验证
	$("#yu_telh")[0].addEventListener("input",function(){
		var tel_val=$("#yu_telhao").val(); //联系方式
		if(tel_val==""){
			console.log("请输入手机号")
	    }else if(!(tel_val.match(ttelRex))){
	    	console.log("手机号格式不对")
	    }
	})*/
	
	
	
	
	
	
	
	
	
	
	

//下拉多选
	 $('.selectpicker').selectpicker({
        'selectedText': 'cat'
     });
	
//选项卡	
	$("#geren_single").click(function(){
		//个人
		$("#peopl_gr").css("display","block");
		$("#geren_single").css("height","51px").css("border","1px solid #DDDDDD").css("background","white").css("border-bottom","none");
		//团队
		$("#yu_aboutTeam").css("display","none");
		$("#team_single").css("background","#F7F7F7").css("height","49px").css("border","none");
		//企业
		$("#yu_aboutQiye").css("display","none");
		$("#qiye_single").css("height","49px").css("border","none").css("background","#F7F7F7");
	})
	//点击团队
	$("#team_single").click(function(){
		$("#yu_aboutQiye").css("display","none");
		$("#yu_aboutTeam").css("display","block");
		$("#peopl_gr").css("display","none");
		//团队
		$("#yu_aboutTeam").css("display","block");
		$("#team_single").css("height","51px").css("border","1px solid #DDDDDD").css("background","white").css("border-bottom","none");
		//个人
		$("#geren_single").css("background","#F7F7F7").css("height","49px").css("border","none");
		//企业
		$("#qiye_single").css("height","49px").css("border","none").css("background","#F7F7F7");
		
	})
	$("#qiye_single").click(function(){
		$("#peopl_gr").css("display","none");
		$("#yu_aboutTeam").css("display","none");
		$("#yu_aboutQiye").css("display","block");
		//个人
		$("#geren_single").css("background","#F7F7F7").css("height","49px").css("border","none");
		//团队
		$("#team_single").css("background","#F7F7F7").css("height","49px").css("border","none");
		//企业
		$("#qiye_single").css("height","51px").css("border","1px solid #DDDDDD").css("background","white").css("border-bottom","none");
	})
	
//上部分验证
	function prove(){
		var telRex=/^1[34578]\d{9}$/;  //手机号验证
		var emailRex =  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//邮箱验证
		var qqRex=/^\d{5,10}$/;    //qq验证
		var shenfRex=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证正则
		var nickname_val=$("#yu_nickname").val(); //昵称
		var select_val=$("#id_select").val();  //设计领域
		var truename_val=$("#yu_tname").val(); //真实姓名
		var email_val=$("#yu_email").val(); //邮箱
		var tel_val=$("#yu_telhao").val(); //联系方式
		var qq_val=$("#yu_qqhao").val(); //qq
		var person_val=$("#yu_person").val(); //个人介绍
		var headfile_val=$("#on_tpfil").val(); //上传头像
		var personworks_val=$("#yuh_pic").val(); //个人作品
		var address_val=$("#yu_ads").val(); //地址
		var idcard_val=$("#yu_idhao").val(); //身份证号
		var idpicz_val=$("#yu_sfzzheng").val(); //身份证正面照
		var idpicf_val=$("#yu_sfzfan").val(); //身份证反面照
		if(nickname_val==''){
			alert("请输入昵称")
		}
	}
	
	
//点击协议----个人
	var off1=false;
	$("#yu_lab").click(function(){
		if(off1){
			$("#yu-submit").attr("disabled",true);
			off1=false;
			console.log("aa")
		}else{
			$("#yu-submit").removeAttr("disabled");
			off1=true;
			//
			$("#yu-submit").click(function(){
				var telRex=/^1[34578]\d{9}$/;  //手机号验证
				var emailRex =  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//邮箱验证
    			var qqRex=/^\d{5,10}$/;    //qq验证
    			var shenfRex=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证正则
				var nickname_val=$("#yu_nickname").val(); //昵称
				var select_val=$("#id_select").val();  //设计领域
				var truename_val=$("#yu_tname").val(); //真实姓名
				var email_val=$("#yu_email").val(); //邮箱
				var tel_val=$("#yu_telhao").val(); //联系方式
				var qq_val=$("#yu_qqhao").val(); //qq
				var person_val=$("#yu_person").val(); //个人介绍
				var headfile_val=$("#on_tpfil").val(); //上传头像
				var personworks_val=$("#yuh_pic").val(); //个人作品
				var address_val=$("#yu_ads").val(); //地址
				var idcard_val=$("#yu_idhao").val(); //身份证号
				var idpicz_val=$("#yu_sfzzheng").val(); //身份证正面照
				var idpicf_val=$("#yu_sfzfan").val(); //身份证反面照
				if(nickname_val==''){
					alert("请输入昵称")
				}
				else if(select_val==""){
					alert("请输入设计领域")
				}
				else if(truename_val==""){
					alert("请输入真实姓名")
				}
				else if(email_val==""){
					alert("请输入邮箱")
				}
				else if(!(email_val.match(emailRex))){
			    	alert("邮箱格式输入有误")
			    }
				else if(tel_val==""){
					alert("请输入联系方式")
				}
				else if((tel_val.match(telRex))){
			    	alert("手机号输入有误")
			    }
				else if(qq_val==""){
					alert("请输入QQ")
				}
				else if(!(qq_val.match(qqRex))){
			    	alert("QQ输入有误")
			    }
				else if(person_val==""){
					alert("请输入个人介绍")
				}
				else if(headfile_val==""){
					alert("请上传头像")
				}
				else if(personworks_val==""){
					alert("请上传个人作品")
				}
				else if(address_val==""){
					alert("请填写地址")
				}
				else if(idcard_val==""){
					alert("请输入身份证号")
				}
				else if(!(idcard_val.match(shenfRex))){
			    	alert("身份证号输入有误")
			    }
				else if(idpicz_val==""){
					alert("请上传身份证正面照")
				}
				else if(idpicf_val==""){
					alert("请上传身份证反面照")
				}
			    else{
					alert("都输入正确");
					
				}
			    
			})
		}
	})
//点击协议----团队
	var off2=false;
	$("#yu_labt").click(function(){
		if(off2){
			$("#yu-submitt").attr("disabled",true);
			off2=false;
			console.log("aa")
		}else{
			$("#yu-submitt").removeAttr("disabled");
			off2=true;
			//
			$("#yu-submitt").click(function(){
				var telRex=/^1[34578]\d{9}$/;  //手机号验证
				var emailRex =  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//邮箱验证
    			var qqRex=/^\d{5,10}$/;    //qq验证
				var nickname_val=$("#yu_nickname").val(); //昵称
				var select_val=$("#id_select").val();  //设计领域
				var truename_val=$("#yu_tname").val(); //真实姓名
				var email_val=$("#yu_email").val(); //邮箱
				var tel_val=$("#yu_telhao").val(); //联系方式
				var qq_val=$("#yu_qqhao").val(); //qq
				var person_val=$("#yu_person").val(); //个人介绍
				var tname_val=$("#yu_tName").val(); //团队名称
				var tkey_val=$("#yu_tkyes").val(); //团队密钥
				if(nickname_val==''){
					alert("请输入昵称")
				}
				else if(select_val==""){
					alert("请输入设计领域")
				}
				else if(truename_val==""){
					alert("请输入真实姓名")
				}
				else if(email_val==""){
					alert("请输入邮箱")
				}
				else if(!(email_val.match(emailRex))){
			    	alert("邮箱格式输入有误")
			    }
				else if(tel_val==""){
					alert("请输入联系方式")
				}
				else if((tel_val.match(telRex))){
			    	alert("手机号输入有误")
			    }
				else if(qq_val==""){
					alert("请输入QQ")
				}
				else if(!(qq_val.match(qqRex))){
			    	alert("QQ输入有误")
			    }
				else if(person_val==""){
					alert("请输入个人介绍")
				}
				else if(tname_val==""){
					alert("请输入团队名称")
				}
				else if(tkey_val==""){
					alert("请输入团队密钥")
				}
			    else{
					alert("都输入正确");
					
				}
			    
			})
		}
	})
//点击协议----企业
	var off3=false;
	$("#yu_labq").click(function(){
		if(off3){
			$("#yu-submitq").attr("disabled",true);
			off3=false;
			console.log("aa")
		}else{
			$("#yu-submitq").removeAttr("disabled");
			off3=true;
			//
			$("#yu-submitq").click(function(){
				var telRex=/^1[34578]\d{9}$/;  //手机号验证
				var emailRex =  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//邮箱验证
    			var qqRex=/^\d{5,10}$/;    //qq验证
				var nickname_val=$("#yu_nickname").val(); //昵称
				var select_val=$("#id_select").val();  //设计领域
				var truename_val=$("#yu_tname").val(); //真实姓名
				var email_val=$("#yu_email").val(); //邮箱
				var tel_val=$("#yu_telhao").val(); //联系方式
				var qq_val=$("#yu_qqhao").val(); //qq
				var person_val=$("#yu_person").val(); //个人介绍
				var qname_val=$("#yu_qName").val(); //企业名称
				var qkey_val=$("#yu_qikyes").val(); //企业密钥
				if(nickname_val==''){
					alert("请输入昵称")
				}
				else if(select_val==""){
					alert("请输入设计领域")
				}
				else if(truename_val==""){
					alert("请输入真实姓名")
				}
				else if(email_val==""){
					alert("请输入邮箱")
				}
				else if(!(email_val.match(emailRex))){
			    	alert("邮箱格式输入有误")
			    }
				else if(tel_val==""){
					alert("请输入联系方式")
				}
				else if((tel_val.match(telRex))){
			    	alert("手机号输入有误")
			    }
				else if(qq_val==""){
					alert("请输入QQ")
				}
				else if(!(qq_val.match(qqRex))){
			    	alert("QQ输入有误")
			    }
				else if(person_val==""){
					alert("请输入个人介绍")
				}
				else if(qname_val==""){
					alert("请输入企业名称")
				}
				else if(qkey_val==""){
					alert("请输入企业密钥")
				}
			    else{
					alert("都输入正确");
					
				}
			    
			})
		}
	})
	
	
	
	
},false)