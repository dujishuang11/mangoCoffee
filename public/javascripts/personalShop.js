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
//	$("#yu_lab").click(function(){
//		if(off){
//			$("#yu-submit").attr("disabled",true);
//			off=false;
//			console.log("aa")
//		}else{
//			$("#yu-submit").removeAttr("disabled");
//			off=true;
//			//
//			$("#yu-submit").click(function(){
//				var  nickname_val=$("#yu_nickname").val();
//				if(nickname_val==''){
//					alert("请输入您的昵称")
//				}
//			})
//		}
//	})
	
	
	//kabosu
	
//	$("#yu-submit").removeAttr("disabled");
	
	function getObjectURL(file) {
        var url = null;
        if (window.createObjectURL != undefined) {
            url = window.createObjectURL(file)
        } else if (window.URL != undefined) {
            url = window.URL.createObjectURL(file)
        } else if (window.webkitURL != undefined) {
            url = window.webkitURL.createObjectURL(file)
        }
        return url
    };
	
	var lxm_works = [];
	var photo_obj;
	var lxm_idpic_top;
	var lxm_idpic_bottom;
//	 $('.on_tpfil').onload = function (e) {
//                  console.log("成功读取....");
//          }
//	$('.on_tpfil').each(function(){
       
       $('.on_tpfil').change(function(evt){
       		var max_size=102400;
            var finput = $(this);   
            var files = evt.target.files; // 获得文件对象  
            var output = [];
            for (var i = 0, f; f = files[i]; i++){  
            	//检查文件大小
                if(f.size > max_size){   
                    alert("上传的图片不能超过100KB!");   
                    $(this).val('');   
                }else{
                	photo_obj = this.files[0]
//              	console.log(evt.target.result)
            		var fileReader = new FileReader();
					fileReader.readAsDataURL(this.files[0]);
					fileReader.onload = function(event) {
						var result = event.target.result; //返回的dataURL
						console.log($.base64.btoa(result))
//						$('.yu_imgon span').css('display','block')
						$('.yu_imgon img')[0].src = result
					}
					
//		            $('.yu_imgon span').click(function(){
//		            	$('.yu_imgon span').css('display','none')
//		            	$('.yu_imgon img')[0].src = '../images/hhou.png'
//		            	photo_obj = ''
//		            	console.log(photo_obj)
//		            })
                }
            }
        });
//      $(".wyh_teamthings").on("change",".yuh_pic",function() {

        $('.yuh_pic').change(function(e){
//      	alert(1)

			var files = e.target.files;
			var max_size=204800;
			
			for (var i = 0, f; f = files[i]; i++){
				if(f.size > max_size){   
                    alert("上传的图片不能超过200KB!");   
                    $(this).val('');   
                }else{
//              	console.log()
					var index = $(this).index('.han_imgg')
					var result;
                	var fileReader = new FileReader();
					fileReader.readAsDataURL(this.files[0]);
					fileReader.onload = function(event) {
						result = event.target.result; //返回的dataURL
						lxm_works.push(result)
						$('.han_imgg').eq(index-1).attr('src',result)
						$('.han_imgg').eq(index-1).css('position','relative')
						$('.han_imgg').eq(index-1).css('z-index','9')
						$('.yuhan_img_remover span').eq(index).css('display','block')
//						console.log(result)
//						$(this).siblings('img').attr('src',result)
//						console.log(index)
						console.log(big_obj)
					}
//					console.log($(this).parent().children('img').attr('src'))

					var html = '<div class="yuhan_img yuhan_img_remover"><input multiple class="yuh_pic cur" type="file"><img src="../images/onImg.png" class="han_imgg cur"><span class="yuhan_img_remove">删除</span>	</div>'
        			$(this).parent().before(html);	
					$(this).val('')

//					console.log(result)
					for(var i = 0; i < $('.yuhan_img_remove').length; i++){
						$('.yuhan_img_remove')[i].index = i
						$('.yuhan_img_remove')[i].onclick = function(){
							this.parentNode.remove()
							lxm_works.splice(this.index,1)
							console.log(big_obj)
//							alert(this.index)
						}
					}

                }
			}
        })
        
        
        $('.yu_sfzzheng').change(function(evt){
       		var max_size=102400;
            var finput = $(this);   
            var files = evt.target.files; // 获得文件对象  
            var output = [];
            for (var i = 0, f; f = files[i]; i++){  
//          	//检查文件大小
                if(f.size > max_size){   
                    alert("上传的图片不能超过100KB!");   
                    $(this).val('');   
                }else{
                	photo_obj = this.files[0]
//              	console.log(evt.target.result)
            		var fileReader = new FileReader();
					fileReader.readAsDataURL(this.files[0]);
					fileReader.onload = function(event) {
						var result = event.target.result; //返回的dataURL
						console.log($.base64.btoa(result))
						$('.yu_sfzzheng_top')[0].src = result
					}
                }
            }
        });
        
        $('.yu_sfzfan').change(function(evt){
       		var max_size=102400;
            var finput = $(this);   
            var files = evt.target.files; // 获得文件对象  
            var output = [];
            for (var i = 0, f; f = files[i]; i++){  
//          	//检查文件大小
                if(f.size > max_size){   
                    alert("上传的图片不能超过100KB!");   
                    $(this).val('');   
                }else{
                	photo_obj = this.files[0]
//              	console.log(evt.target.result)
            		var fileReader = new FileReader();
					fileReader.readAsDataURL(this.files[0]);
					fileReader.onload = function(event) {
						var result = event.target.result; //返回的dataURL
						console.log($.base64.btoa(result))
						$('.yu_sfzzheng_bottom')[0].src = result
					}
                }
            }
        });
        
//      $("#yu-submit").click(function(){
//			alert(1)
//		})
		console.log($('.yu_rekuang_check').is(':checked'))
//      if($('.yu_rekuang_check').prop('checked') != false){
//      	alert(1)
//      }else{
//      	alert(2)
//      }
        
//      if($('.yu_rekuang_check').is(':checked') == false) {
//      	alert(1)
//		    // do something
//		}else{
//			alert(2)
//		}
//      $("#yu-submit").removeAttr("disabled");
        
        
//  }); 
	
	
	
},false)