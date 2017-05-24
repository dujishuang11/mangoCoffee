window.addEventListener('load', function() {
	var ip = "http://47.92.145.129:8000"   //ip地址

//个人资料

	function imgben(){
		$.ajax({
			type: "post",
			url: ""+ip+"/users/gerenaing",
			async: true,
			data: {
				uid:10
			},
			success: function(data) {
				console.log(data);
				$(".zhj_personTopName").text(data[0].name);
				$(".upImg").attr('src',$.base64.atob(data[0].images))
			}
		})
	
	}
    imgben();


// 初始我的发布

     
     function fbb(){
     	$.ajax({
			type: "get",
			url: ""+ip+"/djsList/issueList",
			async: true,
			data: {
				uid:10
			},
			success: function(data) {
				console.log(data)
				if(data.success=="查无数据"){
					return
				}else{
				var fbTxt=''		
				for(var i=0;i<data.data.length;i++){
					fbTxt+='<a href="listDetails.html?'+data.data[i].listid+'"><div class="zhj_Modular"><div class="zhj_ModularImg"><img src="'+$.base64.atob(data.data[i].cover)+'" alt="" /></div><div class="zhj_Title">'+data.data[i].tradename+'</div><div class="zhj_price">'+data.data[i].pricing+'</div></div></a>'
				}
				$(".allFB").append(fbTxt);
//              $('.allFB').append('<a href="publishProject.html"><div class="zhj_jiajia"><img src="../images/onImg.png" alt="" /></div></a>');				
				}		
		  }		
		})
     }
    fbb()


	$(".zhj_reset").hover(function() {
		$(".zhj_hoverReset").css('opacity', '1');
	}, function() {
		$(".zhj_hoverReset").css('opacity', '0');
	})

	$(".zhj_shop").hover(function() {
		$(".zhj_hoverShop").css('opacity', '1');
	}, function() {
		$(".zhj_hoverShop").css('opacity', '0');
	})

	$(".zhj_Release").eq(0).css('color', '#555555').css("border-bottom", "2px solid #555555").css("background", "white");
	$(".zhj_Release").click(function() {
		var a = $(this).index(".zhj_Release")
		$(".zhj_Release").eq(a).css('color', '#555555').css("border-bottom", "2px solid #555555").css("background", "white");
		$(".zhj_Release").eq(a).siblings('div').css('color', 'rgba(0,0,0,0.6)').css("border-bottom", "2px solid #dddddd").css("background", "#F7F7F7");
	})

	$(".zhj_wallet").css("display", "none");
	$(".zhj_Releases").css("display", "block");
	$(".zhj_purchase").css("display", "none");
	$(".zhj_resume").css("display", "none");
	$(".zhj_Release").eq(0).click(function() {
		$(".zhj_wallet").css("display", "none");
		$(".zhj_Releases").css("display", "block");
		$(".zhj_purchase").css("display", "none");
		$(".zhj_resume").css("display", "none");
		
//我的发布            

   	   fbb()		 
	})

	$(".zhj_Release").eq(1).click(function() {
		$(".zhj_wallet").css("display", "none");
		$(".zhj_Releases").css("display", "none");
		$(".zhj_purchase").css("display", "block");
		$(".zhj_resume").css("display", "none");
		
//购买记录		
         function gmjl2(){
        	$.ajax({
			type: "get",
			url: ""+ip+"/djsList/buyList",
			async: true,
			data: {
				purchaserid:10
			},
			success: function(data) {				
				console.log(data);
				if(data.success=="查无数据"){
					return
				}else{
					$(".allJL").children().remove();
				for(var i=0;i<data.data.length;i++){
				$.ajax({
				type: "get",
				url: ""+ip+"/djsList/listDetails",
				async: true,
				data: {
					listId:data.data[i].commodityid
				},
				success: function(data) {
					console.log(data)
					var JlTxt='';						
					for(var i=0;i<data.data.length;i++){
					JlTxt+='<div class="zhj_purchaseModule"><div class="zhj_purchaseModules"><img src="'+$.base64.atob(data.data[i].cover)+'" alt="" /></div><div class="zhj_purchaseTitle">'+data.data[i].tradename+'</div><div class="zhj_purchaseprice">下载</div></div>'
				}
				$(".allJL").append(JlTxt);
				}
			  })
			}
		  }			
		}
	   })
     }
               
       gmjl2()					
	})

	$(".zhj_Release").eq(2).click(function() {
		$(".zhj_wallet").css("display", "block");
		$(".zhj_Releases").css("display", "none");
		$(".zhj_purchase").css("display", "none");
		$(".zhj_resume").css("display", "none");
	})

	$(".zhj_Release").eq(3).click(function() {
		$(".zhj_wallet").css("display", "none");
		$(".zhj_Releases").css("display", "none");
		$(".zhj_purchase").css("display", "none");
		$(".zhj_resume").css("display", "block");
		
//我的简历	      
      function jl2(){
   	    $.ajax({
		type: "get",
		url: ""+ip+"/resume/fbrxx",
		async: true,
		data: {
			RPublisherId:sessionStorage.uid
		},
		success: function(data) {
			console.log(data)
			$(".allJls").children().remove();
		   var Jltext ='';
           console.log(data);
           for(var i=0;i<data.length;i++){
           	 Jltext+='<div class="resumeAll"><div class="resumeAll_left">'+data[i].Fullname+'</div><div class="resumeAll_line"></div><div class="resumeAll_nickName">'+data[i].JobTitle+'</div><div class="resumeBtnO" id='+data[i].resumeId+'>删除</div><div class="resumeBtnT" id='+data[i].resumeId+'>编辑</div></div>'
           }
           $(".allJls").append(Jltext);
		}
	  })
   }
   
     	jl2()
     	
	})
	
//点击编辑	
	$(".allJls").delegate(".resumeBtnT","click",function(){
		console.log($(this).attr("id"))
		var tiaoId=$(this).attr("id");
		location.href="I_want_to_apply.html?"+tiaoId
	})	
	
//点击删除	
	$(".allJls").delegate(".resumeBtnO","click",function(){
		console.log($(this).attr("id"));
		var jlId = $(this).attr("id");
		var index = $(this).index(".resumeBtnO");
		console.log(index)
		$.ajax({
		type: "get",
		url: ""+ip+"/resume/jldel",
		async: true,
		data: {
			resumeId:jlId
		},
		success: function(data) {
			console.log(data)
			if(data.flag==2){
				console.log("删除成功");				
				$(".resumeAll").eq(index).remove()
			}else if(data.flag==1){
				console.log("后台错误");
			}else{
				console.log("删除失败");
			}
		}
	})
})
	

	

//提现金额	
	$(".walletCash").click(function() {
		$(".zhj_Withdrawals").css("display", "block")
	})

	$(".cuo").click(function() {
		$(".zhj_Withdrawals").css("display", "none")
	})

	$(".cancel").click(function() {
		$(".zhj_Withdrawals").css("display", "none");
	})

//提现交易明细
	 function txmx2(){
   	  $.ajax({
		type: "get",
		url: ""+ip+"/tixian/qianbao",
		async: true,
		data: {
			TuseId:sessionStorage.uid
		},
		success: function(data) {
			console.log(data);
			var html = '';
			for(var i = 0; i < data.length; i++) {
				if(data[i].speed==0){					
					data[i].speed="审核不通过";
				}else{
					data[i].speed="审核已通过";
				}
												
				html += '<div class="jine"><span class="allje">' + data[i].tMoney + '</span><span class="allLine"></span><span class="allNumb">' + data[i].baoBao + '</span><span class="allLine2"></span><span class="alljindu">'+data[i].speed+'</span></div>'					
			}
			$(".allList").append(html);			
		}
	  })
   }
	
	 	txmx2()
	
	
//插入初始钱包钱数	   点击头像名字实现效果
$(".zhj_personTopName").click(function(){
	function crqbb2(){
		$.ajax({
		type: "post",
		url: ""+ip+"/tixian/crqb",
		async: true,
		data: {
			qMoney:0,
			qUserId:sessionStorage.uid
		},
		success: function(data) {
			console.log(data);
		   }
        })
	}
		crqbb2()
	
})
	
	

//获取钱包钱数  
function hqqb2(){
	$.ajax({
		type: "get",
		url: ""+ip+"/tixian/qb",
		async: true,
		data: {
			qUserId:10
		},
		success: function(data) {
			console.log(data)
			console.log(data[0].qMoney);
			$(".inputTxt").val(data[0].qMoney);
		   }
        })
}
    
    hqqb2()

//修改钱包    点击购买时   测试版点击 钱包里的弹出提示模板几个字
$(".qianb").click(function(){
	function xiuqb2(){
		$.ajax({
			type: "post",
			url: ""+ip+"/tixian/qbc",
			async: true,
			data: {
				qMoney:1000,
				qUserId:sessionStorage.uid
				},
				success:function(data) {
					console.log(data);
				}
		 })
	 }
	
	   	xiuqb2()
		
     })

    var telExp = /^1[3'/4578]\d{9}$/;
    var regEmail = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    var pasExp = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,}$/;
    
    $(".AlipayInp").focus(function(){
		$(".datazhb").css("display","block");
		$(".datazhb").text('支护宝格式为手机号或邮箱');
	})
    $(".AlipayInp").blur(function(){
		var telText= $(".AlipayInp").val();
		if(telText.match(telExp) || telText.match(regEmail)){
		   $(".datazhb").css("display","block");
		   $(".datazhb").text('');
		}else{
		   $(".datazhb").css("display","block");
		   $(".datazhb").text('支护宝格式不正确哦！');
		}
	})
    
     $(".VerificationInp").focus(function(){
		$(".datapas").css("display","block");
		$(".datapas").text('密码格式为数字加英文哦！');
	})
    $(".VerificationInp").blur(function(){
		var pasText= $(".VerificationInp").val();
		if(pasText.match(pasExp)){
		   $(".datapas").css("display","block");
		   $(".datapas").text('');
		}else{
		   $(".datapas").css("display","block");
		   $(".datapas").text('密码格式不正确哦！');
		}
	})
    
    
	$(".beSure").click(function() {
		var newM = $(".priceInp").val();
		var zhb = $(".AlipayInp").val();
		var kmPas = $(".VerificationInp").val();
		function allqb2(){
			$.ajax({
			type: "get",
			url: ""+ip+"/tixian/qianbao",
			async: true,
			data: {
				TuseId:sessionStorage.uid
			},
			success: function(data) {
			$.ajax({
			type: "get",
			url: ""+ip+"/tixian/qb",
			async: true,
			data: {
				qUserId:sessionStorage.uid
			},
			success: function(data) {
			console.log(data);
//			  console.log(data[0].qMoney);
			   var sMoney = data[0].qMoney;
			     if(newM < sMoney){
			     	console.log('你的钱包钱数大于你输入的钱数，可以提现哦！');
			     	  if(newM != "") {
			     	  	if(zhb != "" ){
			     	  		if(kmPas != ""){
			     	  			if(zhb.match(telExp) || zhb.match(regEmail)){
			     	  				if(kmPas.match(pasExp)){			     	  				
			     	  				console.log("密码正确");
			     	  				$.ajax({
										type: "post",
										url: ""+ip+"/tixian/tixian",
										async: true,
										data: {
											tMoney: newM,
											baoBao: zhb,
											speed: 0,
											TuseId:sessionStorage.uid
										},
										success: function(data) {
											$(".priceInp").val("");
											$(".AlipayInp").val("");
											$(".VerificationInp").val("");
											console.log(data);									
											$(".zhj_Withdrawals").css("display", "none");
												
												$(".zhj_wallet").css("display", "block");
						$(".zhj_Releases").css("display", "none");
						$(".zhj_purchase").css("display", "none");
						$(".zhj_resume").css("display", "none");								
										}
									})						
			     	  				
			     	  				}else{
			     	  					console.log("密码错误")
			     	  				}
			     	  			}else{
			     	  				console.log('no')
			     	  			}		
			     	  		}else{
			     	  			console.log("咖芒密码为空哦！")
			     	  		}
			     	  	}else{
			     	  		console.log("支护宝为空哦！")
			     	  	}
					}else {
						console.log("提现为空哦！")
					} 	
			     }else if(newM == sMoney){
			     	console.log('你的钱包钱数等于你输入的钱数，提现后就没有了哦！');
			     }else{
			     	console.log('你的钱包里得钱数不够了哦，快去充值哦！');
			     }	    
			   }			
			 })
		   }
		  })
		}	
		
			allqb2()		
		
//		$.ajax({
//			type: "get",
//			url: ""+ip+"/tixian/qianbao",
//			async: true,
//			data: {
//				TuseId:sessionStorage.uid
//			},
//			success: function(data) {
//			$.ajax({
//			type: "get",
//			url: ""+ip+"/tixian/qb",
//			async: true,
//			data: {
//				qUserId:sessionStorage.uid
//			},
//			success: function(data) {
//			console.log(data);
////			  console.log(data[0].qMoney);
//			   var sMoney = data[0].qMoney;
//			     if(newM < sMoney){
//			     	console.log('你的钱包钱数大于你输入的钱数，可以提现哦！');
//			     	  if(newM != "") {
//			     	  	if(zhb != "" ){
//			     	  		if(kmPas != ""){
//			     	  			if(zhb.match(telExp) || zhb.match(regEmail)){
//			     	  				if(kmPas.match(pasExp)){			     	  				
//			     	  				console.log("密码正确");
//			     	  				$.ajax({
//										type: "post",
//										url: ""+ip+"/tixian/tixian",
//										async: true,
//										data: {
//											tMoney: newM,
//											baoBao: zhb,
//											speed: 0,
//											TuseId:sessionStorage.uid
//										},
//										success: function(data) {
//											$(".priceInp").val("");
//											$(".AlipayInp").val("");
//											$(".VerificationInp").val("");
//											console.log(data);									
//											$(".zhj_Withdrawals").css("display", "none");
//												
//												$(".zhj_wallet").css("display", "block");
//						$(".zhj_Releases").css("display", "none");
//						$(".zhj_purchase").css("display", "none");
//						$(".zhj_resume").css("display", "none");								
//										}
//									})						
//			     	  				
//			     	  				}else{
//			     	  					console.log("密码错误")
//			     	  				}
//			     	  			}else{
//			     	  				console.log('no')
//			     	  			}		
//			     	  		}else{
//			     	  			console.log("咖芒密码为空哦！")
//			     	  		}
//			     	  	}else{
//			     	  		console.log("支护宝为空哦！")
//			     	  	}
//					}else {
//						console.log("提现为空哦！")
//					} 	
//			     }else if(newM == sMoney){
//			     	console.log('你的钱包钱数等于你输入的钱数，提现后就没有了哦！');
//			     }else{
//			     	console.log('你的钱包里得钱数不够了哦，快去充值哦！');
//			     }	    
//			   }			
//			 })
//		   }
//		})
	})
	
	
	$(".zhj_personReset").click(function(){
		location.href="personalSet.html"
	})
	
	$(".zhj_personShop").click(function(){
		location.href="personalShop.html"
	})
	
	$(".zhj_shop").click(function(){
		location.href="personalShop.html"
	})
	
	$(".zhj_reset").click(function(){
		location.href="personalSet.html"
	})
		
	
}, false);