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


//根据查询团队id名称
function getUserByName(teamid,callback){
	pool.getConnection(function(err,conn){
		var sql='select * from team where tuid = ?';
		conn.query(sql,[teamid],function(err,result){
			console.log('result:'+result);
			conn.release();
			callback(err,result);
		})
	})
}
//插入数据
function save(tavatar,tname,taddress,tleader,tinformation,tcard,tcardZheng,tcardFan,tkey,twork,taudit,companykeys,callback){
	pool.getConnection(function(err,connection){
		var sql='insert into team (tuid,theader,ttitle,taddress,tpeople,ttel,tnumberid,tcardzheng,tcardfan,tkey,tworks,tpass,nameuid) values (0,?,?,?,?,?,?,?,?,?,?,?,?)';
		connection.query(sql,[tavatar,tname,taddress,tleader,tinformation,tcard,tcardZheng,tcardFan,tkey,twork,taudit,companykeys],function(err,result){
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
	var companykeys=req.body.nameuid;//：审核
	
	getUserByNamekey(companykeys,function(err,result){
		if(result=="" || result==null){
			//团队进行判断
			getUserByNamekeyteam(companykeys,function(err,result){
				if(result=="" || result==null){
					//个人
					getUserByNamekeysingle(companykeys,function(err,result){
						if(result=="" || result==null){
							console.log("个人没注册过");
							//个人进行判断
							save(Tavatar,Tname,Taddress,Tleader,Tinformation,Tcard,TcardZheng,TcardFan,Tkey,Twork,Taudit,companykeys,function(err,result){
								if(result.insertId>0){
									console.log("okokok")
									res.send({flag:"注册成功",result})
								}
								console.log('result:'+result);
							});
						}else if(result.length>0){
							res.send({flag:"个人已注册"}); //查询成功
						}else{
							res.send({flag:6}); //失败
						}
					})
				}else if(result.length>0){
					res.send({flag:"团队已注册"}); //查询成功
				}else{
					res.send({flag:6}); //失败
				}
			})
			
		}else if(result.length>0){
			res.send({flag:"企业已注册",result}); //该用户已注册
			console.log("查到了");
		}else{
			res.send({flag:8}); //失败
		}
	})
	
	
	
	/*getUserByNamekeys(companykeys,function(err,result){
		if(result=="" || result==null){
			getUserByName(Tname,function(err,result){ 
				if(result=='' || result==null){
					console.log('insert into mysql');
					save(Tavatar,Tname,Taddress,Tleader,Tinformation,Tcard,TcardZheng,TcardFan,Tkey,Twork,Taudit,companykeys,function(err,result){
						if(result.insertId>0){
							console.log("okokok")
							res.send(result)
						}
						console.log('result:'+result);
					});
				}else if(result!='' ||result != null){
					res.send({flag:2});//用户名已被占用
				}else{
					res.send({flag:3});//注册失败
				}
			})
			
		}else if(result.length>0){
			res.send({flag:4}); //该登录人已经注册过
			console.log("查到了");
		}else{
			res.send({flag:5}); //失败
		}
	})*/
	
	
	
});


//查询个人的nameuid
function getUserByNamekeysingle(conpanyname,callback){
	console.log("进入团队查询nameuid")
	pool.getConnection(function(err,conn){
		var sql='select * from settled where Applicant = ?';
		conn.query(sql,[conpanyname],function(err,result){
			console.log('result:'+result);
			conn.release();
			callback(err,result);
		})
	})
}
//查询团队的nameuid
function getUserByNamekeyteam(conpanyname,callback){
	pool.getConnection(function(err,conn){
		var sql='select * from team where nameuid = ?';
		conn.query(sql,[conpanyname],function(err,result){
			console.log('result:'+result);
			conn.release();
			callback(err,result);
		})
	})
}

//查询企业的nameuid
function getUserByNamekey(conpanyname,callback){
	pool.getConnection(function(err,conn){
		var sql='select * from qiye where nameuid = ?';
		conn.query(sql,[conpanyname],function(err,result){
			console.log('result:'+result);
			conn.release();
			callback(err,result);
		})
	})
}





//根据团队名称查询整条信息
router.get('/search',function(request,response){  //请求参数，响应参数
	console.log("查id");
	var teamidd=request.query.Teamid;
	console.log("sousousosso");
	getUserByName(teamidd,function(err,result){
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

//获取信息列表的id
function getAllUsers(teid,callback){
	console.log("获取id");
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
	console.log("<<<进入修改")
	var tid=request.query.Teamuid;
	console.log(tid);
	getAllUsers(tid,function(err,result){
		if(err){
			response.send({flag:2,err});//获取失败id
		}else if(result){
			response.send({flag:1,result}); //获取成功
		}
	})
});

//修改数据
router.post('/tdetailPass',function(req,response){  //请求参数，响应参数
	console.log("进入修改入驻  >>>");
	var xTkey=req.body.TeamKey;//：团队密钥
	var xTaudit=req.body.TeamAudit;//：审核
	var uid = req.body.tuid; //获取id
   	pool.getConnection(function(err,connection){
		data_sql='update team set tkey=?,tpass=? where tuid=? ';
		connection.query(data_sql,[xTkey,xTaudit,uid],function(err,result){
			console.log(result);
			if(err){
				response.send({flag:3});//修改失败
//				return;
			}
			if(result != ''){
				response.send({flag:1,result});//修改成功
			}else{
				response.send({flag:2});//修改失败
			}
			connection.release();
		})
	})
});
//删除数据(通过团队名称)
router.get('/delete',function(request,response){  //请求参数，响应参数
	
	console.log("进入删除")
	var ttname=request.query.teamidd;
	delChange(ttname,function(err,result){
		if(err){
			response.send({flag:2,err});//删除失败
		}else{
			response.send({flag:1,result}); //删除成功
		}
	})
});
function delChange(a,callback){
	pool.getConnection(function(err,conn){
		var del_sql='delete from team where tuid = ?';
		conn.query(del_sql,[a],function(err,result){  //这里的[a]要跟问号?的顺序相对应，与传的参数a值相对应
			if(err){
				return
			}
			conn.release();
			callback(err,result);
		})
	})
}

//根据登录者id查询名称信息
function getUserByName(nameidd,callback){
	pool.getConnection(function(err,conn){
		var sql='select * from team where nameuid = ?';
		conn.query(sql,[nameidd],function(err,result){
			console.log('result:'+result);
			conn.release();
			callback(err,result);
		})
	})
}
//删除数据(通过团队名称)
router.get('/chauid',function(request,response){  //请求参数，响应参数
	
	console.log("")
	var ttname=request.query.teamidd;
	delChange(ttname,function(err,result){
		if(err){
			response.send({flag:2,err});//删除失败
		}else{
			response.send({flag:1,result}); //删除成功
		}
	})
});


//获取信息列表
	function tgetAllUsers(callback){
		pool.getConnection(function(err,connection){
			var sql = 'select * from team';
			connection.query(sql,function(err,result){
				if(err){
					console.log('getAllUsers Error:'+err.message);
					return;
				}
				connection.release();//释放链接
				callback(err,result);
			})
		})
	}
	
	router.get('/tlist', function(request,response){
			tgetAllUsers(function(err,results){
				if(err){
					response.send({flag:2,err})
				}else if(results){
					response.send({flag:1,results})
				}
			})
	})


//查看详情

	function getdetail(teamId,callback){
		pool.getConnection(function(err,connection){
			var sql = 'select * from team where tuid = ?';
			connection.query(sql,[teamId],function(err,result){
				if(err){
					console.log('getAllUsers Error:'+err.message);
					return;
				}
				connection.release();//释放链接
				callback(err,result);
			})
		})
	}
	
	router.get('/tlistDetail', function(request,response){
		var teamId = request.query.teamId;
			getdetail(teamId,function(err,results){
				if(err){
					response.send({flag:2,err})
				}else if(results){
					response.send({flag:1,results})
				}
			})
	})

	
	
	
	
// 根据登录人uid查询团队密钥

router.get('/searchkeys',function(request,response){  //请求参数，响应参数
	var companykeys=request.query.companykeyss;
	console.log("查询密钥");
	console.log(companykeys);
	getUserByNamekeys(companykeys,function(err,result){
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


	
	
	
	
	
	
	








module.exports=router;  //输出