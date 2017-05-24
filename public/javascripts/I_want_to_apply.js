window.addEventListener('load', function() {

	var lhqhref = location.href.split('?')[1];
	console.log(lhqhref)

	if(lhqhref) {
		$('.lhq_fhzplb_i').text('我的简历');
		$('.lhq_fhzplb').click(function(){
			location.href='personalData.html?2'
		})
		$.ajax({
			type: 'get',
			url: 'http://47.92.145.129:8000/resume/zpxq',
			async: true,
			data: {
				resumeId: lhqhref
			},
			success: function(data) {
				console.log(data[0])
				if(data[0].Gender == '男') {
					$('.Gone').attr('checked', 'checked')
				} else if(data[0].Gender == '女') {
					$('.Gtwo').attr('checked', 'checked')
				}
				$('.Fullname').val(data[0].Fullname);
				$('.Age').val(data[0].Age);
				$('.PlaceOfOrigin').val(data[0].PlaceOfOrigin);
				$('.ContactNumber').val(data[0].ContactNumber);
				$('.Mailbox').val(data[0].Mailbox);
				$('.HandsOnBackground').val(data[0].HandsOnBackground);
				$('.Education').val(data[0].Education);
				$('.WorkingProperty').val(data[0].WorkingProperty);
				$('.JobTitle').val(data[0].JobTitle);
				$('.Workarea').val(data[0].Workarea);
				$('.CurrentState').val(data[0].CurrentState);
				$('.HeadPortrait').attr('src', $.base64.atob(data[0].HeadPortrait))
				$('.lhq_onebox').append(data[0].ProfessionalSkills)
				$('.lhq_twobox').append(data[0].WorkExperience)
				$('.lhq_threebox').append(data[0].WorkProjectExperience)
				$('.lhq_fourbox').append(data[0].SelfEvaluation)
				imgSrc=data[0].HeadPortrait
			}
		})
		
		


		//邮箱正则
		var sb_yx = true;
		var youxiangRex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		$(".Mailbox")[0].addEventListener('input', function() {
			if(!youxiangRex.test($('.Mailbox').val())) {
				sb_yx = false;
				console.log(sb_yx)
			} else {
				sb_yx = true;
				console.log(sb_yx)
			}
		})

		//手机号正则
		var sb_sjh = true;
		var shoujiRex = /^1[34578]\d{9}$/;
		$(".ContactNumber")[0].addEventListener('input', function() {
			if(!shoujiRex.test($('.ContactNumber').val())) {
				sb_sjh = false;
				console.log(sb_sjh)
			} else {
				sb_sjh = true;
				console.log(sb_sjh)
			}
		})


		$('.lhq_button').on('click', function() {
				$('.lhq_file').click();
		})
		var file;
		var imgSrc = '';
		$('.lhq_file').change(function() {
			file = this.files[0];
			if(file.size > 153600) {
				alert("图片过大")
			} else {
				var fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				fileReader.onload = function(event) {
					imgSrc = event.target.result; //返回的dataURL  
					console.log(imgSrc)
					$('.HeadPortrait').attr('src', imgSrc);
				}
				var formdata = new FormData();
				formdata.append("uploadeFile", file);
				$.ajax({
					url: "http://47.92.145.129:8000/yanzhengs/huang",
					type: "post",
					data: formdata,
					contentType: false,
					processData: false,
					success: function(data) {
						console.log(data)
						if(data.nem == '正常') {
							imgSrc = $.base64.btoa(imgSrc)
						} else {
							alert('图片审核不通过')
						}
					}
				})
			}
		})

		$('.lhq_fb').on('click', function() {
			
			
			var Fullname = $('.Fullname').val()
			var Age = $('.Age').val()

			var PlaceOfOrigin = $('.PlaceOfOrigin').val()

			var Mailbox = $('.Mailbox').val()

			var ContactNumber = $('.ContactNumber').val()

			var Education = $('.Education').val()

			var HandsOnBackground = $('.HandsOnBackground').val()

			var WorkingProperty = $('.WorkingProperty').val()

			var JobTitle = $('.JobTitle').val()

			var Workarea = $('.Workarea').val()

			var CurrentState = $('.CurrentState').val()

			var lhq_onebox = $('.lhq_onebox').html()

			var lhq_twobox = $('.lhq_twobox').html()

			var lhq_threebox = $('.lhq_threebox').html()

			var lhq_fourbox = $('.lhq_fourbox').html()

			var obj = document.getElementsByClassName("Gender");
			for(var i = 0; i < obj.length; i++) {
				if(obj[i].checked) {
					var abc = obj[i].value;
				}
			}
			
			if(Fullname != '' && Age != '' && PlaceOfOrigin != '' && Mailbox != '' && ContactNumber != '' && Education != '' && HandsOnBackground != '' && WorkingProperty != '' && JobTitle != '' && Workarea != '' && CurrentState != '' && lhq_onebox != '' && lhq_twobox != '' && lhq_threebox != '' && lhq_fourbox != '' && abc != '' && imgSrc != '') {
				if(sb_sjh == false) {
					alert('您没有通过手机号验证！')
				} else if(sb_yx == false) {
					alert('您没有通过邮箱验证！')
				} else {
					$.ajax({
						type: 'post',
						url: 'http://47.92.145.129:8000/resume/lhqchange',
						async: true,
						data: {
							Fullname: Fullname,
							Age: Age,
							PlaceOfOrigin: PlaceOfOrigin,
							Mailbox: Mailbox,
							ContactNumber: ContactNumber,
							Education: Education,
							HandsOnBackground: HandsOnBackground,
							WorkingProperty: WorkingProperty,
							JobTitle: JobTitle,
							Workarea: Workarea,
							CurrentState: CurrentState,
							ProfessionalSkills: lhq_onebox,
							WorkExperience: lhq_twobox,
							WorkProjectExperience: lhq_threebox,
							SelfEvaluation: lhq_fourbox,
							Gender: abc,
							HeadPortrait: imgSrc,
							resumeId: lhqhref
						},
						success: function(data) {					
							if(data.success==1){
								alert('修改成功')
								location.href = 'personalData.html?2';
							}else if(data.success==3){
								alert('无任何修改项')
							}
						}
					})
				}

			} else {
				alert('请输入完整内容！')
			}

		})

	} else{
		$('.lhq_fhzplb_i').text('咖芒招聘');
		$('.lhq_fhzplb').click(function(){
			location.href='recruitList.html'
		})
		$('.lhq_button').on('click', function() {
			$('.lhq_file').click();
		})

		$('.lhq_zbjl_center_three').on('click', function() {
			console.log($('.lhq_threebox').html())
		})

		//邮箱正则
		var sb_yx = true;
		var youxiangRex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		$(".Mailbox")[0].addEventListener('input', function() {
			if(!youxiangRex.test($('.Mailbox').val())) {
				sb_yx = false;
				console.log(sb_yx)
			} else {
				sb_yx = true;
				console.log(sb_yx)
			}
		})

		//手机号正则
		var sb_sjh = true;
		var shoujiRex = /^1[34578]\d{9}$/;
		$(".ContactNumber")[0].addEventListener('input', function() {
			if(!shoujiRex.test($('.ContactNumber').val())) {
				sb_sjh = false;
				console.log(sb_sjh)
			} else {
				sb_sjh = true;
				console.log(sb_sjh)
			}
		})

		var file;
		var packageSrc = '';
		var imgSrc = '';
		$('.lhq_file').change(function() {
			file = this.files[0];
			if(file.size > 153600) {
				alert("图片过大")
			} else {
				var fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				fileReader.onload = function(event) {
					imgSrc = event.target.result; //返回的dataURL  
					console.log(imgSrc)
					$('.HeadPortrait').attr('src', imgSrc);
				}
				var formdata = new FormData();
				formdata.append("uploadeFile", file);
				$.ajax({
					url: "http://47.92.145.129:8000/yanzhengs/huang",
					type: "post",
					data: formdata,
					contentType: false,
					processData: false,
					success: function(data) {
						console.log(data)
						if(data.nem == '正常') {
							imgSrc = $.base64.btoa(imgSrc)
						} else {
							alert('图片审核不通过')
						}
					}
				})
			}
		})

		$('.lhq_fb').on('click', function() {
			//判断图片
			//性别
			var Fullname = $('.Fullname').val()
			var Age = $('.Age').val()
			var PlaceOfOrigin = $('.PlaceOfOrigin').val()
			var Mailbox = $('.Mailbox').val()
			var ContactNumber = $('.ContactNumber').val()
			var Education = $('.Education').val()
			var HandsOnBackground = $('.HandsOnBackground').val()
			var WorkingProperty = $('.WorkingProperty').val()
			var JobTitle = $('.JobTitle').val()
			var Workarea = $('.Workarea').val()
			var CurrentState = $('.CurrentState').val()
			var lhq_onebox = $('.lhq_onebox').html()
			var lhq_twobox = $('.lhq_twobox').html()
			var lhq_threebox = $('.lhq_threebox').html()
			var lhq_fourbox = $('.lhq_fourbox').html()

			var obj = document.getElementsByClassName("Gender");
			for(var i = 0; i < obj.length; i++) {
				if(obj[i].checked) {
					var abc = obj[i].value;
				}
			}

			function show() {
				var mydate = new Date();
				var str = "" + mydate.getFullYear() + "/";
				str += (mydate.getMonth() + 1) + "/";
				str += mydate.getDate();
				return str;
			}
			var lhqtime = show()
			console.log(lhqtime)

			if(Fullname != '' && Age != '' && PlaceOfOrigin != '' && Mailbox != '' && ContactNumber != '' && Education != '' && HandsOnBackground != '' && WorkingProperty != '' && JobTitle != '' && Workarea != '' && CurrentState != '' && lhq_onebox != '' && lhq_twobox != '' && lhq_threebox != '' && lhq_fourbox != '' && lhqtime != '' && abc != '' && imgSrc != '') {
				if(sb_sjh == false) {
					alert('您没有通过手机号验证！')
				} else if(sb_yx == false) {
					alert('您没有通过邮箱验证！')
				} else {
					$.ajax({
						type: 'post',
						url: 'http://47.92.145.129:8000/resume/meyp',
						async: true,
						data: {
							Fullname: Fullname,
							Age: Age,
							PlaceOfOrigin: PlaceOfOrigin,
							Mailbox: Mailbox,
							ContactNumber: ContactNumber,
							Education: Education,
							HandsOnBackground: HandsOnBackground,
							WorkingProperty: WorkingProperty,
							JobTitle: JobTitle,
							Workarea: Workarea,
							CurrentState: CurrentState,
							ProfessionalSkills: lhq_onebox,
							WorkExperience: lhq_twobox,
							WorkProjectExperience: lhq_threebox,
							SelfEvaluation: lhq_fourbox,
							Gender: abc,
							HeadPortrait: imgSrc,
							RPublisherId: 2,
							FBtime: lhqtime
						},
						success: function(data) {
							console.log(data)
							location.href = 'personalData.html?2';
						}
					})
				}

			} else {
				alert('请输入完整内容！')
			}

		})

	}

})
//修改
//window.addEventListener('load',function(){
//	$.ajax({
//		type: 'post',
//		url: 'http://localhost:3000/resume/lhqchange',
//		async: true,
//		data:{

//		},
//		success: function(data) {
//			console.log(data)
//		}
//	})
//})