window.addEventListener('load', function() {
	//点击获取封面
	$('.lhq_bjt').on('click', function() {
		$('.lhm').click();
	})
	var indexx = '';
	$.ajax({
		type: "get",
		url: "http://47.92.145.129:8000/users/nav",
		async: true,
		success: function(data) {
			console.log(data)
			$('.lhq_pP .select_onelhq option').remove()
			var html = ''
			for(var i = 0; i < data.length; i++) {
				html += '<option index="' + data[i].uid + '">' + data[i].names + '</option>'
			}
			$('.lhq_pP .select_onelhq').append(html)
		}
	});

	var file;
	var imgSrc = '';
	$('.lhm').change(function() {
		file = this.files[0];
		if(file.size > 153600) {
			alert("图片过大")
		} else {
			var fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = function(event) {
				imgSrc = event.target.result; //返回的dataURL 
				$('.lhq_bjt img').remove()
				$('.lhq_bjt').append('<img src="' + imgSrc + '" class="lhq_bjt_tu"/>')
				console.log(imgSrc)
			}
			var formdata = new FormData();
			formdata.append("uploadeFile", file);
			$.ajax({
				url: "http://47.92.145.129:8000/users/huang",
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

	if(indexx == '') {
		$.ajax({
			type: "post",
			url: "http://47.92.145.129:8000/users/nav2",
			data: {
				uid: 1
			},
			async: true,
			success: function(data) {
				console.log(data)
				if(data.length > 0) {
					$('.lhq_pP .select_twolhq option').remove()
					$('.lhq_pP .select_twolhq').css('display', 'block')
					var html = ''
					for(var i = 0; i < data.length; i++) {
						html += '<option index="' + data[i].uid + '">' + data[i].names + '</option>'
					}
					$('.lhq_pP .select_twolhq').append(html)
				} else {
					$('.lhq_pP .select_twolhq').css('display', 'none')
				}

			}
		})
	}

	$('.select_onelhq').bind('change', function() {
		var indexx = $(this).find("option:selected").attr("index");
		console.log(indexx)
		$.ajax({
			type: "post",
			url: "http://47.92.145.129:8000/users/nav2",
			data: {
				uid: indexx
			},
			async: true,
			success: function(data) {
				console.log(data)
				if(data.length > 0) {
					$('.lhq_pP .select_twolhq option').remove()
					$('.lhq_pP .select_twolhq').css('display', 'block')
					var html = ''
					for(var i = 0; i < data.length; i++) {
						html += '<option index="' + data[i].uid + '">' + data[i].names + '</option>'
					}
					$('.lhq_pP .select_twolhq').append(html)
				} else {
					$('.lhq_pP .select_twolhq').css('display', 'none')
				}

			}
		})
	})

	//上传多张作品	
	var files;
	var fil = '';
	var arrr = '';
	$('#yuh_pic').change(function() {
		fil = this.files[0].name
		console.log(this.files[0])
		console.log(this.value) //获取到选取的图片
		files = this.files[0];
		var fd = new FormData();
		fd.append("uploadedFile", files);

		$.ajax({
			url: "http://47.92.145.129:8000/users/chan",
			type: "post",
			data: fd,
			contentType: false,
			processData: false,
			success: function(data) {
				console.log(data)
				$("#yuhan_img").before('<img src="http://47.92.145.129:8000/' + data.nem + '" class="img">');
				arrr += '<img src="http://47.92.145.129:8000/' + data.nem + '">'
				console.log(arrr)
			}
		})
	})
	var lhqdata_name = ''
	$('.lhq_scysb').on('click', function() {
		$('.ysb_input').click();
	})
	var packageSrc = '';
	$('.ysb_input').change(function() {
		file = this.files[0];
		console.log(file)
		if(file.size > 204800) {
			alert("压缩包文件过大")
		} else {
			var formdata = new FormData();
			formdata.append("uploadeFile", file);
			console.log(formdata)
			$.ajax({
				url: "http://47.92.145.129:8000/users/up",
				type: "post",
				data: formdata,
				contentType: false,
				processData: false,
				success: function(data) {
					console.log(data.name)
					lhqdata_name = data.name
				}
			})
		}

	})

	$('.lhq_fbb').on('click', function() {
		var lhq_fwmc = $('.lhq_fwmc').val();
		var select_twolhq = $('.select_twolhq').val()
		var select_onelhq = $('.select_onelhq').val()
		var lhq_dj = $('.lhq_dj').val()

		if(lhq_fwmc != '' && select_onelhq != '' && lhq_dj != '' && imgSrc != '' && arrr != '' && lhqdata_name != '') {
			$.ajax({
				url: "http://47.92.145.129:8000/djsList/addList",
				type: "post",
				data: {
					cover: imgSrc,
					tradename: lhq_fwmc,
					mainclass: select_onelhq,
					subclass: select_twolhq,
					content: arrr,
					pricing: lhq_dj,
					uid: 10,
					salas: 0,
					package: lhqdata_name
				},
				success: function(data) {
					console.log(data)
				}
			})
		}
	})

}, false)