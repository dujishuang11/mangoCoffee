window.addEventListener('load',function(){
	$('.lhq_button').on('click',function(){
		$('.lhq_file').click();
	})
	
	var lhq_zpxq = location.href.split('?')[1]
	console.log(lhq_zpxq)
	$.ajax({
		type: 'get',
		url: 'http://localhost:3000/resume/zpxq',
		async: true,
		data:{
			resumeId:lhq_zpxq
		},
		success: function(data){
			console.log(data)
		}
	})


	
	
	
	
})