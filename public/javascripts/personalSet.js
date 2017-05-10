window.addEventListener('load',function(){
	var off1=true;
//	var off2=true;
	
	$(".zhj_edits").bind("click",function(){
		$(".zhj_personAll").slideToggle(800);
//		  if($(".zhj_personAll").css("display","block")){		  	  	
//		  	  $(".zhj_ImgShow").hide(500);
//		  	  $(".zhj_showEmail").hide(500);
//		  	  $(".zhj_showtel").hide(500);
//		  	  $(".zhj_showpassword").hide(500);
//		  	  $(".passwordShow a").text("编辑").css("color","#666666");
//		  	  $(".zhj_touEdits a").text("编辑").css("color","#666666");
//		  	  $(".emailShow a").text("编辑").css("color","#666666");
//		  	  $(".telShow a").text("编辑").css("color","#666666");
//		  	  $(".passwordShow i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".zhj_touEdits i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".emailShow i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".telShow i").attr("class","glyphicon glyphicon-menu-down");
//		  }		    
       })

    
   $(".zhj_edits").click(function(){
	   	if(off1){
	        $(".zhj_edits i").attr("class","glyphicon glyphicon-menu-up");
	        	$(".zhj_name").css("opacity","0");
	        	$(".zhj_data").css("background","");
	        	$(".zhj_data").css("border-bottom","1px dashed #DDDDDD");
	        	$(".zhj_edits a").text("收起");
	        	off1=false;
	    }else{	 
	    	$(".zhj_edits i").attr("class","glyphicon glyphicon-menu-down");
	    	$(".zhj_data").css("border-bottom","1px solid #DDDDDD");
	    	$(".zhj_name").css("opacity","1");
	    	$(".zhj_data").css("background","#F7F7F7");
	    	$(".zhj_edits a").text("编辑");
	    	off1=true;
	    }
   })
    
     $(".zhj_data").hover(function(){
     	$(".zhj_data").css("background","#F7F7F7");
     },function(){
     	$(".zhj_data").css("background","");
     })

	$(".zhj_edits").hover(function(){
		$(".zhj_edits a").css("color","#C90000");
	},function(){
		$(".zhj_edits a").css("color","#797979");
	})
	
	
//头像部分	
	$(".zhj_touEdits").bind("click",function(){
		$(".zhj_ImgShow").slideToggle(800);	
//		if($(".zhj_ImgShow").css("display","block")){
//		  	  $(".zhj_personAll").hide(500);
//		  	  $(".zhj_showEmail").hide(500);
//		  	  $(".zhj_showtel").hide(500);
//		  	  $(".zhj_showpassword").hide(500);
//		  	  $(".passwordShow a").text("编辑").css("color","#666666");
//		  	  $(".zhj_edits a").text("编辑").css("color","#666666");
//		  	  $(".emailShow a").text("编辑").css("color","#666666");
//		  	  $(".telShow a").text("编辑").css("color","#666666");
//		  	  $(".passwordShow i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".zhj_edits i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".emailShow i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".telShow i").attr("class","glyphicon glyphicon-menu-down");
//		}
    })
	
	var off1=true;
   $(".zhj_touEdits").click(function(){
	   	if(off1){
	        $(".zhj_touEdits i").attr("class","glyphicon glyphicon-menu-up");
	        	$(".zhj_touImg").css("opacity","0");
	        	$(".zhj_portrait").css("background","");
	        	$(".zhj_portrait").css("border-bottom","1px dashed #DDDDDD");
	        	$(".zhj_touEdits a").text("收起");
	        off1=false;
	    }else{
	    	
	    	$(".zhj_touEdits i").attr("class","glyphicon glyphicon-menu-down");
	    	$(".zhj_portrait").css("border-bottom","1px solid #DDDDDD");
	    $(".zhj_touImg").css("opacity","1");
	    $(".zhj_portrait").css("background","#F7F7F7");
	    $(".zhj_touEdits a").text("编辑");
	    	off1=true;
	    }
   })
	
	$(".zhj_touEdits").hover(function(){
		$(".zhj_touEdits a").css("color","#C90000");
	},function(){
		$(".zhj_touEdits a").css("color","#797979");
	})
	
	$(".zhj_portrait").hover(function(){
     	$(".zhj_portrait").css("background","#F7F7F7");
     },function(){
     	$(".zhj_portrait").css("background","");
     })
	
//登录邮箱		
	$(".emailShow").bind("click",function(){
		$(".zhj_showEmail").slideToggle(800);	
//		if($(".zhj_showEmail").css("display","block")){
//		  	  $(".zhj_personAll").hide(500);
//		  	  $(".zhj_ImgShow").hide(500);
//		  	  $(".zhj_showtel").hide(500);
//		  	  $(".zhj_showpassword").hide(500);
//		  	  $(".passwordShow a").text("编辑").css("color","#666666");
//		  	  $(".zhj_edits a").text("编辑").css("color","#666666");
//		  	  $(".zhj_touEdits a").text("编辑").css("color","#666666");
//		  	  $(".telShow a").text("编辑").css("color","#666666");
//		  	  $(".passwordShow i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".zhj_edits i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".zhj_ImgShow i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".telShow i").attr("class","glyphicon glyphicon-menu-down");
//		  }
    })
	
   $(".emailShow").click(function(){
	   	if(off1){
	        $(".emailShow i").attr("class","glyphicon glyphicon-menu-up");
	        	$(".email").css("opacity","0").css('background','#dddddd');
	        	$(".zhj_loginEmail").css("background","");
	        	$(".zhj_loginEmail").css("border-bottom","1px dashed #DDDDDD");
	        	$(".emailShow a").text("收起");
	        off1=false;
	    }else{
	    	
	    	$(".emailShow i").attr("class","glyphicon glyphicon-menu-down");
	    	$(".zhj_loginEmail").css("border-bottom","1px solid #DDDDDD");
		    $(".email").css("opacity","1").css('background','white');
		    $(".zhj_loginEmail").css("background","#F7F7F7");
		    $(".emailShow a").text("编辑");
	    	off1=true;
	    }
   })
	
	$(".emailShow").hover(function(){
		$(".emailShow a").css("color","#C90000");
	},function(){
		$(".emailShow a").css("color","#797979");
	})
	
	$(".zhj_loginEmail").hover(function(){
     	$(".zhj_loginEmail").css("background","#F7F7F7");
     	$(".email").css('background','#f7f7f7');
     },function(){
     	$(".zhj_loginEmail").css("background","");
     	$(".email").css('background','white');
     })
	
	
//绑定手机号		
	$(".telShow").bind("click",function(){
		$(".zhj_showtel").slideToggle(800);	
//		if($(".zhj_showtel").css("display","block")){
//		  	  $(".zhj_personAll").hide(500);
//		  	  $(".zhj_ImgShow").hide(500);
//		  	  $(".zhj_showEmail").hide(500);
//		  	  $(".zhj_showpassword").hide(500);
//		  	  $(".passwordShow a").text("编辑").css("color","#666666");
//		  	  $(".zhj_edits a").text("编辑").css("color","#666666");
//		  	  $(".zhj_touEdits a").text("编辑").css("color","#666666");
//		  	  $(".emailShow a").text("编辑").css("color","#666666");
//		  	  $(".passwordShow i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".zhj_edits i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".emailShow i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".telShow i").attr("class","glyphicon glyphicon-menu-down");
//		  }
    })	
	
	 $(".telShow").click(function(){
	   	if(off1){
	        $(".telShow i").attr("class","glyphicon glyphicon-menu-up");
	        	$(".bindingTel").css("opacity","0").css('background','#dddddd');
	        	$(".zhj_binding").css("background","");
	        	$(".zhj_binding").css("border-bottom","1px dashed #DDDDDD");
	        	$(".telShow a").text("收起");
	        off1=false;
	    }else{	    	
	    	$(".telShow i").attr("class","glyphicon glyphicon-menu-down");
	    	$(".zhj_binding").css("border-bottom","1px solid #DDDDDD");
			$(".bindingTel").css("opacity","1").css('background','white');
			$(".zhj_binding").css("background","#F7F7F7");
			$(".telShow a").text("编辑");
	    	off1=true;
	    }
   })
	
	$(".telShow").hover(function(){
		$(".telShow a").css("color","#C90000");
	},function(){
		$(".telShow a").css("color","#797979");
	})
	
	$(".zhj_binding").hover(function(){
     	$(".zhj_binding").css("background","#F7F7F7");
     	$(".bindingTel").css('background','#f7f7f7');
     },function(){
     	$(".zhj_binding").css("background","");
     	$(".bindingTel").css('background','white');
     })
	
	
// 确认密码	
	$(".passwordShow").bind("click",function(){
		$(".zhj_showpassword").slideToggle(800);
//		if($(".zhj_showpassword").css("display","block")){
//		  	  $(".zhj_personAll").hide(500);
//		  	  $(".zhj_ImgShow").hide(500);
//		  	  $(".zhj_showEmail").hide(500);
//		  	  $(".zhj_showtel").hide(500);
//		  	  $(".telShow a").text("编辑").css("color","#666666");
//		  	  $(".zhj_edits a").text("编辑").css("color","#666666");
//		  	  $(".zhj_touEdits a").text("编辑").css("color","#666666");
//		  	  $(".emailShow a").text("编辑").css("color","#666666");
//		  	  $(".telShow i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".zhj_edits i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".emailShow i").attr("class","glyphicon glyphicon-menu-down");
//		  	  $(".zhj_touEdits i").attr("class","glyphicon glyphicon-menu-down");
//		  }
    })
	
		 $(".passwordShow").click(function(){
	   	if(off1){
	        $(".passwordShow i").attr("class","glyphicon glyphicon-menu-up");
	        $(".passwordTxt").css("opacity","0").css('background','#dddddd');
	        $(".zhj_password").css("background","");
	        $(".zhj_password").css("border-bottom","1px dashed #DDDDDD");
	        $(".passwordShow a").text("收起");
	        off1=false;
	    }else{
	    	
	    	$(".passwordShow i").attr("class","glyphicon glyphicon-menu-down");
	    	$(".zhj_password").css("border-bottom","1px solid #DDDDDD");
		    $(".passwordTxt").css("opacity","1").css('background','white');
		    $(".zhj_password").css("background","#F7F7F7");
		    $(".passwordShow a").text("编辑");
	    	off1=true;
	    }
   })
	
	$(".passwordShow").hover(function(){
		$(".passwordShow a").css("color","#C90000");
	},function(){
		$(".passwordShow a").css("color","#797979");
	})
	
	$(".zhj_password").hover(function(){
     	$(".zhj_password").css("background","#F7F7F7");
     	$(".passwordTxt").css('background','#f7f7f7');
     },function(){
     	$(".zhj_password").css("background","");
     	$(".passwordTxt").css('background','white');
     })
	
	
	
//	修改资料详情时当前开 其他收起
    
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
},false);