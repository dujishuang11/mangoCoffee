var express=require("express");   //引入expres模块
var mysql=require("mysql");  //引入mysql
var router=express.Router();   //用router的方法


var pool = mysql.createPool({
	host:"127.0.0.1",
	user:"root",   
	password:'wang520',   //mysql安装时的密码
	database:"teamenter",  //数据库名称
	port:'3306'   //端口号
})

//跨域
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


//根据查询团队名称
function getUserByName(teamname,callback){
	pool.getConnection(function(err,conn){
		var sql='select * from team where ttitle = ?';
		conn.query(sql,[teamname],function(err,result){
			console.log('result:'+result);
			conn.release();
			callback(err,result);
		})
		
	})
}
//插入数据
function save(tavatar,tname,taddress,tleader,tinformation,tcard,tcardZheng,tcardFan,tkey,twork,taudit,callback){
	pool.getConnection(function(err,connection){
		var sql='insert into team (tuid,theader,ttitle,taddress,tpeople,ttel,tnumberid,tcardzheng,tcardfan,tkey,tworks,tpass) values (0,?,?,?,?,?,?,?,?,?,?,?)';
		connection.query(sql,[tavatar,tname,taddress,tleader,tinformation,tcard,tcardZheng,tcardFan,tkey,twork,taudit],function(err,result){
			if(err){
				console.log('insertUser_Sql Error:'+ err.message);
				return;
			}
			connection.release();
			callback(err,result);
		})
	})
}
//申请入驻团队信息
router.post('/team',function(req,res){  //请求参数，响应参数
	console.log("进入团队入驻  >>>");
	var Tavatar=req.body.TeamAvatar;//团队头像
	var Tname=req.body.TeamName; //：团队名称
	var Taddress=req.body.TeamAddress;//：地址
	var Tleader=req.body.TeamLeader;//：团队负责人
	var Tinformation=req.body.TContactInformation;//：联系方式
	var Tcard=req.body.IdentityCard;// ：负责人身份证号
	var TcardZheng=req.body.IdcardZheng;// ：负责人身份证正面照
	var TcardFan=req.body.IdcardFan;// ：负责人身份证反面照
	var Tkey=req.body.TeamKey;//：团队密钥
	var Twork=req.body.TeamWork; //：团队作品
	var Taudit=req.body.TeamAudit;//：审核
	getUserByName(Tname,function(err,result){ 
		if(result=='' || result==null){
			console.log('insert into mysql');
			save(Tavatar,Tname,Taddress,Tleader,Tinformation,Tcard,TcardZheng,TcardFan,Tkey,Twork,Taudit,function(err,result){
				if(result.insertId>0){
					console.log("okokok")
					res.send({flag:1}); //注册成功
				}
				console.log('result:'+result);
			});
		}else if(result!='' ||result != null){
			res.send({flag:2});//用户名已被占用
		}else{
			res.send({flag:3});//注册失败
		}
	})
	
});



//根据团队名称查询整条信息
router.get('/search',function(request,response){  //请求参数，响应参数
	var teamm=request.query.TeamName;
	console.log("sousousosso");
	console.log(teamm);
	getUserByName(teamm,function(err,result){
		if(err){
			response.send({flag:2,err});  //查不到，失败
			console.log("chen查不到ggong");
			
		}else if(result.length>0){
			response.send({flag:1,result}); //查询成功
			console.log("查到了");
		}else{
			response.send({flag:3,result}); //失败
		}
	})
});


//查看审核状态 ||       1 通过     2 审核不通过

//查询审核字段
function getUserBystaus(auditstu,callback){
	pool.getConnection(function(err,conn){
		var sql='select * from team where tpass = ?';
		conn.query(sql,[auditstu],function(err,result){
			console.log('result:'+result);
			conn.release();
			callback(err,result);
		})
	})
}

router.get('/auditstaus',function(request,response){  //请求参数，响应参数
	var auditus=request.query.TeamAudit;
	console.log("进入审核");
	console.log(auditus);
	getUserBystaus(auditus,function(err,result){
		if(err){
			response.send(err);  
		}else if(result){
			if(result == '' || result == null){
				response.send({flag:2}); // 审核不通过 2
			}else if(result != '' || result != null){
				response.send({flag:1,result}); //审核通过 1
			}
		}
	})
});

//修改信息(根据团队id来修改)

/*//获取信息列表的id
function getAllUsers(teid,callback){
	pool.getConnection(function(err,conn){
		var sql='select * from team where tuid = ?';
//		var us=req.body.aid;
		conn.query(sql,[teid],function(err,result){
			console.log('result:'+result);
			callback(err,result);
		})
	})
}
//获取修改数据
router.get('/change',function(request,response){  //请求参数，响应参数
//	getAllUsers();
	var tid=request.query.Teamuid;
	console.log(tid);
	getAllUsers(tid,function(err,result){
		if(err){
			response.send({flag:2,err});//获取失败id
		}else if(result){
			response.send({flag:1,result}); //获取成功
		}
	})
});*/

//修改数据
router.post('/change',function(req,response){  //请求参数，响应参数
	console.log("进入修改入驻  >>>");
	var xTavatar=req.body.TeamAvatar;//团队头像
	var xTname=req.body.TeamName; //：团队名称
	var xTaddress=req.body.TeamAddress;//：地址
	var xTleader=req.body.TeamLeader;//：团队负责人
	var xTinformation=req.body.TContactInformation;//：联系方式
	var xTcard=req.body.IdentityCard;// ：负责人身份证号
	var xTcardZheng=req.body.IdcardZheng;// ：负责人身份证正面照
	var xTcardFan=req.body.IdcardFan;// ：负责人身份证反面照
	var xTkey=req.body.TeamKey;//：团队密钥
	var xTwork=req.body.TeamWork; //：团队作品
	var xTaudit=req.body.TeamAudit;//：审核
   	pool.getConnection(function(err,connection){
		data_sql='update team set theader=?,taddress=?,tpeople=?,ttel=?,tnumberid=?,tcardzheng=?,tcardfan=?,tkey=?,tworks=?,tpass=? where ttitle=? ';
		connection.query(data_sql,[xTavatar,xTname,xTaddress,xTleader,xTinformation,xTcard,xTcardZheng,xTcardFan,xTkey,xTwork,xTaudit],function(err,result){
			console.log(result);
			if(err){
				err={flag:3}; //修改失败
				response.send(err);
				return;
			}
			if(result != ''){
				err={flag:1};//修改成功
				response.send(err);
			}else{
				err={flag:2}; //修改失败
			}
			connection.release();
		})
	})
});
//删除数据(通过团队名称)
router.get('/delete',function(request,response){  //请求参数，响应参数
	
	console.log("进入删除")
	var ttname=request.query.TeamName;
	delChange(ttname,function(err,result){
		if(err){
			response.send({flag:2,err});//删除失败
		}else{
			response.send({flag:2,result}); //删除成功
		}
	})
});
function delChange(a,callback){
	pool.getConnection(function(err,conn){
		var del_sql='delete from team where ttitle = ?';
		conn.query(del_sql,[a],function(err,result){  //这里的[a]要跟问号?的顺序相对应，与传的参数a值相对应
			if(err){
				return
			}
			conn.release();
			callback(err,result);
		})
	})
}

















module.exports=router;  //输出