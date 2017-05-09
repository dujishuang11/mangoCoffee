$.ajax({
	type:"get",
	url:"http://47.92.145.129:8000/users/nav",
	async:true,
	success:function(e){
		var html = ''
		for(var i = 0; i < e.length; i++){
			html += '<li><a href="#?'+e[i].uid+'">'+e[i].names+'</a></li>'
		}
		$('.nav_hide_list').append(html)
	}
});

$('.search_con').focus(function(){
	$('.nav_search').css('background','#fff')
	$('.nav_search i').css('color','#999')
})

$('.search_con').blur(function(){
	$('.nav_search').css('background','#F1F1F1')
	$('.nav_search i').css('color','#d1d1d1')
})

$('.nav_search i').hover(function(){
	$('.nav_search i').css('color','#999')
},function(){
	$('.nav_search i').css('color','#d1d1d1')
})


$('.nav_one')[0].style.borderBottom = '2px #C0A75E solid'
$('.nav_list > ul').find('.nav_one').click(function(){
	var index = $(this).index('.nav_one')
	$('.nav_one').eq(index).css('border-bottom','2px #C0A75E solid')
	$('.nav_one').eq(index).siblings('.nav_one').css('border-bottom','none')
//	alert(index)
})

//$('.nav_list > ul li:nth-child(2)').hover(function(){
//	$('.nav_hide').css('display','block')
//},function(){
//	$('.nav_hide').css('display','none')
//})