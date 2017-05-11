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