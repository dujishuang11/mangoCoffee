window.addEventListener('load',function(){
     var ip = "http://47.92.145.129:8000"   //ip地址
     var uid = location.href.split('?')[1]
     
//  用户名
    var nickName = /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/;
    $(".nText").focus(function(){
		$(".nickNText").css("display","block");
		$(".nickNText").text('不支持特殊字符哦！')
	})
	$(".nText").blur(function(){
		var nText = $(".nText").val();
		if(nText.match(nickName)){
		   $(".nickNText").css('display','block');
		$(".nickNText").text("")   
		}else{
			$(".nickNText").css('display','block');
		$(".nickNText").html("用户名不匹配")   
		}		
	});
	
//城市	
   var userName = /[\u4e00-\u9fa5]/;
	$(".addText").focus(function(){		
		$(".addTex").css("display","block");
		$(".addTex").text('地址精确到区哦！')
		
	})
	
	$(".addText").blur(function(){
		var addText = $(".addText").val();
		if(addText.match(userName)){
			if(addText.length>4){			
			$(".addTex").css("display","block");
			$(".addTex").text('')
			}else{
				$(".addTex").css("display","block");
			    $(".addTex").text('地址不详细！')
			}
		}else{
			$(".addTex").css("display","block");
			$(".addTex").text('地址不正确！')
		}
		
	})
	
//	手机号
var regExp = /^1[3'/4578]\d{9}$/;
	$(".telText").focus(function(){
		$(".telTex").css("display","block");
		$(".telTex").text('请输入正确手机号');
	})
	
	$(".telText").blur(function(){
		var telText= $(".telText").val();
		if(telText.match(regExp)){
		   $(".telTex").css("display","block");
		   $(".telTex").text('');
		}else{
		   $(".telTex").css("display","block");
		   $(".telTex").text('手机号不正确');
		}
	})
	
//  密码	
	var pasExp = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,}$/;
	 $(".pasText").focus(function(){
	 	$(".passO").css("display","block");
	 	$(".passO").text("请输入正确密码")
	 })
	
	$(".pasText").blur(function(){
		var pasText = $(".pasText").val();
		if(pasText.match(pasExp)){
			$(".passO").css("display","block");
	 	    $(".passO").text("");
		}else{
			$(".passO").css("display","block");
	 	    $(".passO").text("密码不正确哦！");
		}	 	
	 })
	
	 $(".newTwoText").focus(function(){
	 	$(".passTwo").css("display","block");
	 	$(".passTwo").text("请输入正确密码")
	 })
	
	$(".newTwoText").blur(function(){
		var newTwoText = $(".newTwoText").val();
		if($(".pasText").val() == $(".newTwoText").val() ){
			 if(newTwoText.match(pasExp)){
			$(".passTwo").css("display","block");
	 	    $(".passTwo").text("");
		}else{
			$(".passTwo").css("display","block");
	 	    $(".passTwo").text("密码不正确哦！");
		}	
	}else{
		$(".passTwo").css("display","block");
	 	$(".passTwo").text("密码不相等！");
	}
		 	
	 })
	
	
	 $(".beSureText").focus(function(){
	 	$(".passThree").css("display","block");
	 	$(".passThree").text("请输入正确密码")
	 })
	
	$(".beSureText").blur(function(){
		if($(".beSureText").val() == $(".newTwoText").val()){
		var beSureText = $(".beSureText").val();
		if(beSureText.match(pasExp)){
			$(".passThree").css("display","block");
	 	    $(".passThree").text("");
		}else{
			$(".passThree").css("display","block");
	 	    $(".passThree").text("密码不正确哦！");
		}
	}else{
		$(".passThree").css("display","block");
	 	$(".passThree").text("密码不相等！");
	}
		
})
	
	
function person(){
	$.ajax({
	type: "post",
	url: ""+ip+"/users/gerenaing",
	async: true,
	data: {
		uid:uid
	},
	success: function(data) {
		console.log(data);
		$(".nText").val(data[0].name);
		$(".addText").val(data[0].suozaichengs);
		$(".telText").val(data[0].shoujih);
		$(".pasText").val(data[0].password);
		$(".newTwoText").val(data[0].password);
		$(".beSureText").val(data[0].password);
		$(".upImg").attr('src',$.base64.atob(data[0].images))
//		console.log(data[0].xingbye)
		if(data[0].xingbye=="女"){
			$(".girl").attr("checked","checked")
		}else if(data[0].xingbye=="男"){
			$(".boy").attr("checked","checked")
		}else if(data[0].xingbye=="保密"){
			$(".Preservation").attr("checked","checked")
		}
	}
   })
}
	
function person2(){
	$.ajax({
	type: "post",
	url: ""+ip+"/users/gerenaing",
	async: true,
	data: {
		uid:sessionStorage.uid
	},
	success: function(data) {
		console.log(data);
		$(".nText").val(data[0].name);
		$(".addText").val(data[0].suozaichengs);
		$(".telText").val(data[0].shoujih);
		$(".pasText").val(data[0].password);
		$(".newTwoText").val(data[0].password);
		$(".beSureText").val(data[0].password);
		$(".upImg").attr('src',$.base64.atob(data[0].images))
//		console.log(data[0].xingbye)
		if(data[0].xingbye=="女"){
			$(".girl").attr("checked","checked")
		}else if(data[0].xingbye=="男"){
			$(".boy").attr("checked","checked")
		}else if(data[0].xingbye=="保密"){
			$(".Preservation").attr("checked","checked")
		}
	}
   })
}

   if(uid){
   	  person()
   }else{
   	  person2()
   }
	
	
var file;
var packageSrc = '';
var imgSrc = '';
$('.img').change(function() {
	file = this.files[0];
	if(file.size > 153600) {
		alert("图片过大")
	} else {
		var fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = function(event) {
			imgSrc = event.target.result; //返回的dataURL  
			console.log(imgSrc)
			$('.upImg').attr('src', imgSrc);
		}
		var formdata = new FormData();
		formdata.append("uploadeFile", file);
		$.ajax({
			url: ""+ip+"/users/huang",
			type: "post",
			data: formdata,
			contentType: false,
			processData: false,
			success: function(data) {
				console.log(data)
				if(data.nem == '正常') {
					imgSrc = $.base64.btoa(imgSrc)
				}
			}
		})
	}

})

	
	function upperson(){
		var obj = document.getElementsByClassName("zhj_sex");
    	for(var i=0;i<obj.length;i++){
      	 	 if(obj[i].checked){
           		var abc = obj[i].value;
       		 }
   		}
		var nText = $(".nText").val();
		var addText = $(".addText").val();
		var telText= $(".telText").val();
		var pasText = $(".pasText").val();
		if(nText.match(nickName)){
			if(addText.match(userName)){
				if(telText.match(regExp)){
					if(pasText.match(pasExp)){
						$.ajax({
							type: "post",
							url: ""+ip+"/users/ziliao",
							async: true,
							data: {
								uid:uid,
								name:nText,
								suozaichengs:addText,
								images:imgSrc,
								xingbye:abc,
								shoujih:telText,
								password:pasText
							},
							success: function(data) {
								console.log(data);
								console.log(data[0].images)
							}
						})		
					}else{
						alert("密码不对")
					}
				}else{
					alert("手机号不对")
				}
			}else{
				alert("地址不对")
			}
		}else{
			alert("用户名不对")
		}	
	}
	
	function upperson2(){
		var obj = document.getElementsByClassName("zhj_sex");
    	for(var i=0;i<obj.length;i++){
      	 	 if(obj[i].checked){
           		var abc = obj[i].value;
       		 }
   		}
		var nText = $(".nText").val();
		var addText = $(".addText").val();
		var telText= $(".telText").val();
		var pasText = $(".pasText").val();
		if(nText.match(nickName)){
			if(addText.match(userName)){
				if(telText.match(regExp)){
					if(pasText.match(pasExp)){
						$.ajax({
							type: "post",
							url: ""+ip+"/users/ziliao",
							async: true,
							data: {
								uid:sessionStorage.uid,
								name:nText,
								suozaichengs:addText,
								images:imgSrc,
								xingbye:abc,
								shoujih:telText,
								password:pasText
							},
							success: function(data) {
								console.log(data);
								console.log(data[0].images)
							}
						})		
					}else{
						alert("密码不对")
					}
				}else{
					alert("手机号不对")
				}
			}else{
				alert("地址不对")
			}
		}else{
			alert("用户名不对")
		}	
	}
	
	$(".baoCun").click(function(){
		if(uid){
			upperson()
		}else{
			upperson2()
		}
	})
	
	
	
	
},false);