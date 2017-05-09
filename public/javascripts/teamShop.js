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
	
	
	
	
	
	
	
	
	
	
	
	
},false)