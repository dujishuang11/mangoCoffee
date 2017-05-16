 $(function(){
        /*
         * 皮肤编号 lrkf_blue1 无图版，lrkf_blue2 图片版，更多皮肤敬请期待 懒人qq客服 - http://www.51xuediannao.com/qqkefu/
         * 参数配置参考正文中的参数配置说明
         */
        $("#lrkfwarp").lrkf({
			root:'http://img.lrjz100.com/lrkf/0.01/',	//客服代码文件夹的路径，例如: '/qqkefu/'
            skin:'lrkf_blue2',
            kfTop:'200',
            defShow:false,
            qqs:[
                {'name':'售前晓梅','qq':'2846331886'}		//注意最后一个{}不要英文逗号
            ],
			qrCode:'http://img.lrjz100.com/lrkf/0.01/qrcode.png',	//二维码的路径，自行修改
            more:" ",				//>>更多方式
//          foot:"8:30-18:00"                                  //底部在线时间，有些风格里面没有给这个预留位置

        });

    });