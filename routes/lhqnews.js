var express = require('express');
var router = express.Router();
var mysql = require('mysql')//数据库连接的俩种方法：①直连 ②链接池

	var pool = mysql.createPool({
		host:'127.0.0.1',
		user:'root',
		password:'lhq19981218',//安装mysql时的密码
		database:'news',//数据库名称
		port:3306//端口号
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

	
	//获取信息列表
	function getAllUsers(callback){
		pool.getConnection(function(err,connection){//getConnection获取链接
			var sql = 'select * from KMnews';
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
	
	router.get('/list', function(request,response){
			getAllUsers(function(err,results){
				if(err){
					response.send(err)
				}else if(results){
					response.send(results)
				}
			})
	})



//******************************************
//添加新闻
router.post('/TJlist', function(request,response){
		var title = request.body.title;
		var newsContent = request.body.newsContent;
		var newTime = request.body.newTime;
		var publisher = request.body.publisher;
		
			save(title,newsContent,newTime,publisher,function(err,result){
					if(err){
						response.send(err)
					}else if(result.insertId > 0){
						response.send({flag:1,result})
					}
				})
			
	})
	
	
	function save(title,newsContent,newTime,publisher,callback){
		pool.getConnection(function(err,connection){//getConnection获取链接
			var sql = 'insert into KMnews(title,newsContent,newTime,publisher) values (?,?,?,?)';
			connection.query(sql,[title,newsContent,newTime,publisher],function(err,result){
				if(err){
					console.log(err.message);
					return;
				}
				connection.release();
				callback(err,result);
			})
		})
	}
	
	
//*****************************************************************************
//删除
router.get('/del', function(request,response){
		var deluid = request.query.newId;
		lhqdelete(deluid,function(err,results){
			if(err){
				response.send({flag:1})
			}else if(results.affectedRows>0){
				response.send({flag:2})
			}else{
				response.send({flag:3})
			}
		})
		
	})
	
	//删除
	function lhqdelete(idd,callback){
		pool.getConnection(function(err,connection){
			var sql = 'delete from KMnews where newId = ?';
			connection.query(sql,[idd],function(err,result){
				if(err){
					console.log(err.message);
					return;
				}
				connection.release();
				callback(err,result);
			})
		})
	}
	
//********************************************************************
//修改
	

	router.post('/xiugai', function(request,response){
		var title = request.body.title;
		var newId = request.body.newId;
		var newsContent = request.body.newsContent;		
		gai(title,newsContent,newId,function(err,result){
			if(err){
				result.send({flag:2})
			}else if(result.changedRows>0){
				response.send({flag:1})
			}
		})
		
	})
	
	function gai(title,newsContent,newId,callback){
		pool.getConnection(function(err,connection){
			var sql = 'update KMnews set title = ?,newsContent = ? where newId = ?';
		
			connection.query(sql,[title,newsContent,newId],function(err,result){
				if(err){
					console.log(err.message);
					return;
				}
				connection.release();
				callback(err,result);
			})
		})
	}
	
//*************************************************************************
//查看详情

	function getxq(newIdd,callback){
		pool.getConnection(function(err,connection){//getConnection获取链接
			var sql = 'select * from KMnews where newId = ?';
			connection.query(sql,[newIdd],function(err,result){
				if(err){
					console.log('getAllUsers Error:'+err.message);
					return;
				}
				connection.release();//释放链接
				callback(err,result);
			})
		})
	}
	
	router.get('/xiangqing', function(request,response){
		var newIdd = request.query.newId;
			getxq(newIdd,function(err,results){
				if(err){
					response.send(err)
				}else if(results){
					response.send(results)
				}
			})
	})

	
	
//	
//function getListG(clicks, newid, callback) {
//	pool.getConnection(function(err, connection) {
//		var sql = "update newlist set clicks = ? where newid = ?";
//		connection.query(sql, [clicks, newid], function(err, result) {
//			if(err) {
//				console.log("getAllUsers Error:" + err.message);
//				return;
//			}
//			connection.release(); //释放链接
//			callback(err, result)
//		})
//	})
//}
//
//getListG(clicks, newid, function(err, result) {
//				if(result.changedRows > 0) {
//					console.log("修改成功") //修改成功
//				} else if(err) {
//					console.log(err) //修改错误
//				} else {
//					console.log("修改失败") //无修改项
//				}
//			})
//	
//	
//输出
module.exports = router;


