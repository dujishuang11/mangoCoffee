var express = require('express');//引入模块
var mysql = require('mysql');
var formidable = require('formidable');
var fs = require('fs');
var router = express.Router();//方法

//配置mysql
var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'249842959',
	database:'personal',
	port:3306
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




//查看整个商铺表接口
function getAllwhole(callback){
	pool.getConnection(function(err,con){
		var sql = 'select * from settled';
		con.query(sql,function(err,result){
			if(err){ 
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			con.release()//释放连接
			callback(err,result);
		})
	})
}

router.get('/all',function(req,res){
	getAllwhole(function(err,results){
		if(err){
			res.send(err);
		}else if(results.length > 0){
			res.send({flag:1,results});
		}else if(results.length == 0){
			res.send({flag:2});
		}
	})
})


//根据设计领域查询接口

function search(name,callback){
	pool.getConnection(function(err,con){
		var sql = "select * from settled where shopType like ?"
		con.query(sql,[name,name],function(err,result){
			if(err){
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			con.release()//释放连接
			callback(err,result);
		})
	})
}

router.get('/search',function(req,res){
//	console.log('cat');
	var name = '%'+req.query.name+'%';
	search(name,function(err,results){
		console.log(results.length)
		if(err){
			res.send(err);
		}else if(results.length > 0){
			res.send(results);
		}else if(results.length == 0){
			res.send({flag:2})
		}
	})
})


//根据商铺名字查询商铺信息
function getAllUsersaa(shopName,callback){
	pool.getConnection(function(err,con){
		var sql = 'select * from settled where shopName = ?';
		con.query(sql,[shopName],function(err,result){
			if(err){ 
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			con.release()//释放连接
			callback(err,result);
		})
	})
}

router.get('/list',function(req,res){
//	var shopName = '笑笑'
	var shopName = req.query.shopName
	getAllUsersaa(shopName,function(err,results){
		if(err){
			res.send({flag:2,err});
		}else if(results.length > 0){
			res.send({flag:1,results});
		}else{
			res.send({flag:3});
		}
	})
})

//根据申请人ID查询商铺信息
function getAllpeople(Applicant,callback){
	pool.getConnection(function(err,con){
		var sql = 'select * from settled where Applicant = ?';
		con.query(sql,[Applicant],function(err,result){
			if(err){ 
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			con.release()//释放连接
			callback(err,result);
		})
	})
}

router.get('/people',function(req,res){
//	var shopName = '笑笑'
	var Applicant = req.query.Applicant
	getAllpeople(Applicant,function(err,results){
		if(err){
			res.send({flag:2,err});
		}else if(results.length > 0){
			res.send({flag:1,results});
		}else{
			res.send({flag:3});
		}
	})
})


//根据用户名查询商铺名字是否重复 
function getAllUsers(shopName,callback){
	pool.getConnection(function(err,con){
		var sql = 'select * from settled where shopName = ?';
		con.query(sql,[shopName],function(err,result){
			console.log('result:'+result)
			if(err){
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			con.release()//释放连接
			callback(err,result);
		})
	})
}

//注册商铺信息
function save(shopName,shopType,realName,email,phone,qq,briefIntroduction,portrait,works,address,userID,idPhoto,secretKey,examine,Applicant,callback){
	pool.getConnection(function(err,con){
//		var sql = 'select * from user where username = ?';
		var sql = 'insert into settled(shopName,shopType,realName,email,phone,qq,briefIntroduction,portrait,works,address,userID,idPhoto,secretKey,examine,Applicant) value(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
		con.query(sql,[shopName,shopType,realName,email,phone,qq,briefIntroduction,portrait,works,address,userID,idPhoto,secretKey,examine,Applicant],function(err,result){
			console.log('result:'+result)
			if(err){
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			con.release()//释放连接
			callback(err,result);
		})
	})
}

//注册商铺信息接口
router.post('/shop_register',function(req,res){//请求数据　响应数据
//	console.log('wtf')
	var shopName = req.body.shopName;
	var shopType = req.body.shopType;
	var realName = req.body.realName;
	var email = req.body.email;
	var phone = req.body.phone;
	var qq = req.body.qq;
	var briefIntroduction = req.body.briefIntroduction;
	var portrait = req.body.portrait;
	var works = req.body.works;
	var address = req.body.address;
	var userID = req.body.userID;
	var idPhoto = req.body.idPhoto;
	var secretKey = req.body.secretKey;
	var examine = req.body.examine;
	var Applicant = req.body.Applicant;


//	console.log(username)
	getAllUsers(shopName,function(err,result){
		if(result == '' || result == null) {
			console.log('未注册')
			save(shopName,shopType,realName,email,phone,qq,briefIntroduction,portrait,works,address,userID,idPhoto,secretKey,examine,Applicant,function(err,result){
////				if(result.insertId > 0){
				res.send({flag:1,shopUid:result.insertId})
////				}
			})
		}else if(result !='' || result!=null) {
			res.send({flag:2})
			console.log('已有')
		}else {
			res.send({flag:3})
		}
	})
})

//提交五副作品接口
function lxm_works(works,shopUid,callback){
	pool.getConnection(function(err,con){
		var sql = 'update settled set works = concat(works,?) where shopUid = ?';
		con.query(sql,[works,shopUid],function(err,result){
			if(err){ 
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			con.release()//释放连接
			callback(err,result);
		})
	})
}

router.post('/works',function(req,res){
//	console.log('cat');
	var works = req.body.works
	var shopUid = req.body.shopUid
	lxm_works(works,shopUid,function(err,results){
		if(err){
			res.send({flag:2});
		}else if(results){
			res.send({flag:1});
		}
	})
})

router.post('/pic',function(req,res){//请求数据　响应数据
	var form = new formidable.IncomingForm();
	//创建IncomingForm对象
	form.uploadDir = "./public/works/";
	//设置上传文件存放的文件夹，可以使用fs.rename()来设置上传文件的存放位置和文件名
	//如果fomr.uploadDir不赋值，它默认的位置是c:\user\用户名\AppData\Local\Temp
	form.parse(req,function(error,fields,files){
		for(var i in files){
			var file = files[i];
			var fName = (new Date()).getTime()
			switch (file.type) {
				case "image/jpeg":
					fName = fName + ".jpg";
					break;
				case "image/png":
					fName = fName + ".png";
					break;
				case "image/gif":
					fName = fName + ".gif"
					break;
				case "text/plain":
					fName = fName + ".txt"
					break;
			}
			var newPath  = "./public/works/" + fName;
			fs.renameSync(file.path,newPath);//重命名
			console.log(fName)
			res.send(fName)
		}
	})
})




//提交审核店铺接口 (就是决定该条信息是否通过审核的接口)

function lxm_examine(examine,shopName,callback){
	pool.getConnection(function(err,con){
		var sql = 'update settled set examine = ? where shopName = ?';
		con.query(sql,[examine,shopName],function(err,result){
			if(err){ 
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			con.release()//释放连接
			callback(err,result);
		})
	})
}

router.post('/examine',function(req,res){
//	console.log('cat');
	var examine = req.body.examine
	var shopName = req.body.shopName
	lxm_examine(examine,shopName,function(err,results){
		if(err){
			res.send({flag:2});
		}else if(results){
			res.send({flag:1});
		}
	})
})

//查看待审核的商铺  || 查看审核通过的商铺   || 查看审核失败的商铺  接口

function Pending_audit(auditStatus,callback){
	pool.getConnection(function(err,con){
		var sql = 'select * from settled where examine = ?';
		con.query(sql,[auditStatus],function(err,result){
//			console.log('result:'+result)
			if(err){ 
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			con.release()//释放连接
			callback(err,result);
		})
	})
}

router.get('/auditStatus',function(req,res){
//	console.log('cat');
	var auditStatus = req.query.auditStatus
	Pending_audit(auditStatus,function(err,results){
		if(err){
			res.send({flag:2});
		}else if(results){
			if(results == '' || results == null){
				res.send({flag:3});
			}else if(results != '' || results != null){
				res.send({flag:1,results});
			}
		}
	})
})

//删除商户接口

function lxm_del_shop(shopUid,callback){
	pool.getConnection(function(err,con){
		var sql = 'delete from settled where shopUid = ?';
		con.query(sql,[shopUid],function(err,result){
//			console.log('result:'+result)
			if(err){ 
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			con.release()//释放连接
			callback(err,result);
		})
	})
}

function lxmQuery_id(shopUid,callback){
	pool.getConnection(function(err,con){
		var sql = 'select * from settled where shopUid = ?';
		con.query(sql,[shopUid],function(err,result){
			console.log('result:'+result)
			if(err){
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			con.release()//释放连接
			callback(err,result);
		})
	})
}

router.post('/shop_del',function(req,res){//请求参数 响应参数
	var shopUid = req.body.shopUid;
	lxmQuery_id(shopUid,function(err,result){
		if(result == '' || result == null) {
			res.send({flag:3})
		}else if(result !='' || result!=null) {
			lxm_del_shop(shopUid,function(err,result){
				res.send({flag:1})
			})
		}else {
			res.send({flag:2})
		}
	})
})


//个人申请入驻信息
router.post('/lxm_enterprise',function(req,res){  //请求参数，响应参数
	console.log("进入个人入驻  >>>");
	
	var shopName = req.body.shopName;
	var shopType = req.body.shopType;
	var realName = req.body.realName;
	var email = req.body.email;
	var phone = req.body.phone;
	var qq = req.body.qq;
	var briefIntroduction = req.body.briefIntroduction;
	var portrait = req.body.portrait;
	var works = req.body.works;
	var address = req.body.address;
	var userID = req.body.userID;
	var idPhoto = req.body.idPhoto;
	var secretKey = req.body.secretKey;
	var examine = req.body.examine;
	var Applicant = req.body.Applicant;
	
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
							save(shopName,shopType,realName,email,phone,qq,briefIntroduction,portrait,works,address,userID,idPhoto,secretKey,examine,Applicant,function(err,result){
								res.send({flag:1,shopUid:result.insertId})
							})
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
	console.log("进入团队查询nameuid")
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

module.exports = router;


