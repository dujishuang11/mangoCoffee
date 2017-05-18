var express=require("express");   //引入expres模块
var mysql=require("mysql");  //引入mysql
var router=express.Router();   //用router的方法


var pool = mysql.createPool({
	host:"127.0.0.1",
	user:"root",   
	password:'wang520',   //mysql安装时的密码
	database:"qiyeenter",  //数据库名称
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


//根据查询企业名称
function getUserByName(conpanyname,callback){
	pool.getConnection(function(err,conn){
		var sql='select * from qiye where qtitle = ?';
		conn.query(sql,[conpanyname],function(err,result){
			console.log('result:'+result);
			conn.release();
			callback(err,result);
		})
	})
}
//申请入驻信息
router.post('/enterprise',function(req,res){  //请求参数，响应参数
	console.log("进入企业入驻  >>>");
	var Qavatar=req.body.CorporateHead;//企业头像
	var Qname=req.body.CompanyName; //：企业名称
	var Qaddress=req.body.CompanyAddress;//：地址
	var Qleader=req.body.CompanyLeader;//：企业负责人
	var Qinformation=req.body.CompanyInformation;//：联系方式
	var Qkey=req.body.CompanyKey;//：企业密钥
	var Qwork=req.body.CompanyWork; //：企业营业执行照
	var Qaudit=req.body.CompanyAudit;//：企业审核
	getUserByName(Qname,function(err,result){ 
		if(result==''||result==null){
			console.log('insert into mysql');
			save(Qavatar,Qname,Qaddress,Qleader,Qinformation,Qwork,Qkey,Qaudit,function(err,result){
				if(result.insertId>0){
					console.log("okokok")
					res.send({flag:1}); //注册成功
				}
				console.log('result:'+result);
			});
		}else if(result!=''||result!=null){
			res.send({flag:2});//用户名已被占用
		}else{
			res.send({flag:3});//注册失败
		}
	})
	
});

//插入数据
	function save(qavatar,qname,qaddress,qleader,qinformation,qwork,qkey,qaudit,callback){
		pool.getConnection(function(err,connection){
			var sql='insert into qiye (quid,qheader,qtitle,qaddress,qpeople,qtel,qimg,qkey,qpass) values (0,?,?,?,?,?,?,?,?)';
			connection.query(sql,[qavatar,qname,qaddress,qleader,qinformation,qwork,qkey,qaudit],function(err,result){
				if(err){
					console.log('insertUser_Sql Error:'+ err.message);
					return;
				}
				connection.release();
				callback(err,result);
			})
		})
	}


//根据企业名称查询整条信息
router.get('/searchq',function(request,response){  //请求参数，响应参数
	var companyname=request.query.CompanyName;
	console.log("进入企业查询");
	console.log(companyname);
	getUserByName(companyname,function(err,result){
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
		var sql='select * from qiye where qpass = ?';
		conn.query(sql,[auditstu],function(err,result){
			console.log('result:'+result);
			conn.release();
			callback(err,result);
		})
	})
}

router.get('/auditstausq',function(request,response){  //请求参数，响应参数
	var conyauditus=request.query.CompanyAudit;
	console.log("进入企业审核");
	console.log(conyauditus);
	getUserBystaus(conyauditus,function(err,result){
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

//删除数据(通过团队名称)
router.get('/deleteq',function(request,response){  //请求参数，响应参数
	
	console.log("进入删除")
	var tconyidd=request.query.Companyid;
	delChange(tconyidd,function(err,result){
		if(err){
			response.send({flag:2,err});//删除失败
		}else{
			response.send({flag:1,result}); //删除成功
		}
	})
});
function delChange(b,callback){
	pool.getConnection(function(err,conn){
		var del_sql='delete from qiye where quid = ?';
		conn.query(del_sql,[b],function(err,result){  //这里的[a]要跟问号?的顺序相对应，与传的参数a值相对应
			if(err){
				return
			}
			conn.release();
			callback(err,result);
		})
	})
}


//修改数据
router.post('/changeq',function(req,response){  //请求参数，响应参数
	console.log("进入修改入驻  >>>");
	var xqkey=req.body.CompanyKey;//：团队密钥
	var xqaudit=req.body.CompanyAudit;//：审核
	var uid = req.body.quid; //获取id
   	pool.getConnection(function(err,connection){
		data_sql='update qiye set qkey=?,qpass=? where quid=? ';
		connection.query(data_sql,[xqkey,xqaudit,uid],function(err,result){
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












module.exports=router;  //输出