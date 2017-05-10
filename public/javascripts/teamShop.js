window.addEventListener("load",function(){
	
	
	
	
	
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
	
	
	
	
	//昵称监控
	var  aa=/^\s*$/g;
	$("#yu_nickname")[0].addEventListener("input",function(){
		var  nickname_val=$("#yu_nickname").val();
		if(nickname_val==''){
			alert("请输入您的昵称")
		}
	})
	
//真实姓名
//	var truenameRex=/[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/;
var truenameRex= /^[\u4e00-\u9fa5 ]{2,20}$/;
var truenameRexY= /^[a-z\/ ]{2,20}$/i;
	//^([\u4E00-\u9FA5]{2,}+|[a-zA-Z]+)$
	$("#yu_tname")[0].addEventListener("input",function(){
		var  truename_val=$("#yu_tname").val();
//		var truenameRex=/^([\u4E00-\u9FA5]{2,}+|[a-zA-Z]+)$/;
		if(truename_val==""){
			alert("请输入您的真实姓名");
		}else if(truename_val!=truename_val.match(truenameRex)){
			console.log("您的真实姓名格式不对")
		}
	})
	
	
	
	//点击协议
	var off=false;
	$("#yu_lab").click(function(){
		if(off){
			$("#yu-submit").attr("disabled",true);
			off=false;
			console.log("aa")
		}else{
			$("#yu-submit").removeAttr("disabled");
			off=true;
			//
			$("#yu-submit").click(function(){
				var  nickname_val=$("#yu_nickname").val();
				if(nickname_val==''){
					alert("请输入您的昵称")
				}
			})
		}
	})
	
	
	
	
	
	
},false)