var verifyCode = new GVerify("v_container");
var lxm_on = true;
var lxm_on_two = true;

$('.forget_pass').click(function(){
	if(lxm_on){
		$('.forget_pass').text('又想起来了')
		$('.login_enter_main').css('display','none')
		$('.login_enter_resgister').css('display','none')
		$('.login_enter_forget').css('display','block')
		lxm_on = !lxm_on
	}else{
		$('.forget_pass').text('忘记密码')
		$('.login_enter_resgister').css('display','none')
		$('.login_enter_main').css('display','block')
		$('.login_enter_forget').css('display','none')
		lxm_on = !lxm_on
	}
})

$('.resgister_now').click(function(){
	if(lxm_on_two){
		$('.resgister_now')[0].innerHTML = '立即登录'
		$('.login_user')[0].innerHTML = '已有账号？'
		$(".login_con p:nth-child(1)")[0].innerHTML = '用第三方帐号注册咖芒'
		$(".login_email p:nth-child(2)	")[0].innerHTML = '用邮箱/手机号注册咖芒'
		$('.login_enter_main').css('display','none')
		$('.login_enter_forget').css('display','none')
		$('.login_enter_resgister').css('display','block')
		lxm_on_two = !lxm_on_two
	}else{
		$('.resgister_now')[0].innerHTML = '立即注册'
		$('.login_user')[0].innerHTML = '还没有账号？'
		$(".login_con p:nth-child(1)")[0].innerHTML = '用第三方帐号登录咖芒'
		$(".login_email p:nth-child(2)	")[0].innerHTML = '用邮箱/手机号登录咖芒'
		$('.login_enter_main').css('display','block')
		$('.login_enter_forget').css('display','none')
		$('.login_enter_resgister').css('display','none')
		lxm_on_two = !lxm_on_two
	}
})

$('.resgister_list').click(function(){
	$('.resgister').css('display','block')
})

$('.resgister_back').click(function(){
	$('.resgister').css('display','none')
})

$('.resgister_remove').click(function(){
	$('.login_wrapper').css('opacity','0')
	$('.login_wrapper').css('z-index','-1')
})

$('.login_remove').click(function(){
	$('.login_wrapper').css('opacity','0')
	$('.login_wrapper').css('z-index','-1')
})

$('.login').click(function(){
	$('.login_wrapper').css('opacity','1')
	$('.login_wrapper').css('z-index','1')
})

$('.res').click(function(){
	$('.login_wrapper').css('opacity','1')
	$('.login_wrapper').css('z-index','1')
})
