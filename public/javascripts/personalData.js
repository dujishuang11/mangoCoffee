window.addEventListener('load',function(){
//	alert(1)
	$(".zhj_reset").hover(function(){
		$(".zhj_hoverReset").css('opacity','1');
	},function(){
		$(".zhj_hoverReset").css('opacity','0');
	})
	
	$(".zhj_shop").hover(function(){
		$(".zhj_hoverShop").css('opacity','1');
	},function(){
		$(".zhj_hoverShop").css('opacity','0');
	})
	
	$(".zhj_Release").eq(0).css('color','black').css("border-bottom","2px solid black").css('font-weight','700').css("background","white");
	$(".zhj_Release").click(function(){
		var a = $(this).index(".zhj_Release")
		$(".zhj_Release").eq(a).css('color','black').css("border-bottom","2px solid black").css('font-weight','700').css("background","white");
		$(".zhj_Release").eq(a).siblings('div').css('color','rgba(0,0,0,0.6)').css("border-bottom","2px solid #dddddd").css('font-weight','500').css("background","#F7F7F7");
	})
	
	$(".zhj_wallet").css("display","none");
	$(".zhj_Releases").css("display","block");
	$(".zhj_purchase").css("display","none");
	$(".zhj_Release").eq(0).click(function(){
		$(".zhj_wallet").css("display","none");
		$(".zhj_Releases").css("display","block");
		$(".zhj_purchase").css("display","none");
	})
	
	$(".zhj_Release").eq(1).click(function(){
		$(".zhj_wallet").css("display","none");
		$(".zhj_Releases").css("display","none");
		$(".zhj_purchase").css("display","block");
	})
	
	$(".zhj_Release").eq(2).click(function(){
		$(".zhj_wallet").css("display","block");
		$(".zhj_Releases").css("display","none");
		$(".zhj_purchase").css("display","none");
	})
	
	
	
//提现金额	
		$(".walletCash").click(function(){
			$(".zhj_Withdrawals").css("display","block")
		})
	
	$(".cuo").click(function(){
		$(".zhj_Withdrawals").css("display","none")
	})
	
	
	
},false);