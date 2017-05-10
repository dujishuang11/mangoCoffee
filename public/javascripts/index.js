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

var phone = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/; //手机号
var email = /^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.){1,4}[a-z]{2,3}$/; //邮箱
$('.lxm_login_one').click(function(){
	var lxm_yzm = verifyCode.validate($('.lxm_login_one_yzm').val());
	if($('.lxm_login_one_user').val() == ''){
		layer.msg('请输入手机号或邮箱');
	}else if($('.lxm_login_one_pass').val() == ''){
		layer.msg('请输入密码');
	}else if($('.lxm_login_one_yzm').val() == ''){
		layer.msg('请输入验证码');
	}else{
//		console.log(email.test($('.lxm_login_one_user').val()))
		
		if(!lxm_yzm){
			layer.msg('验证码错误，请重新输入');
			$('.lxm_login_one_yzm').val('')
//			parent.refresh();
		}else{
			if(!phone.test($('.lxm_login_one_user').val()) && !email.test($('.lxm_login_one_user').val())){
				layer.msg('请输入正确的手机号或邮箱');
			}else{
				layer.msg('成功');
				console.log($('.lxm_login_one_user').val(),$('.lxm_login_one_pass').val())	
			}

		}
	}
})

$('.register_sub').click(function(){
//	alert(1)		
	if($('.resgister_user').val() == ''){
		layer.msg('请输入昵称');
	}else if($('.resgister_pass').val() == ''){
		layer.msg('请输入密码');
	}else if($('.resgister_pass_agin').val() == ''){
		layer.msg('请再次输入密码');
	}else if($('.resgister_pass_agin').val() != $('.resgister_pass').val()){
		layer.msg('两次输入密码不同');
	}else if($('.resgister_Answer').val() == ''){
		layer.msg('请输入答案');
	}else if($('.resgister_Check').is(':checked') == false){
		layer.msg('请阅读协议');
	}else{		
		layer.msg('成功');
	}
})