var express = require('express');
var mysql = require('mysql');
var router = express.Router(); // 提取express的router方法

var pool = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'az1457800393', //mysql安装密码
	database: 'tixian', //数据库名称
	port: 3306 //端口号
})

router.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

//根据用户名查询用户
// function getUserByName(uname,callback){
// 	  pool.getConnection(function(err,conn){
// 	  	var sql = 'select * from tixian where Tusername = ?';
// 	  	conn.query(sql,[uname],function(err,result){
// 	  		 if(err){         //如果报错
// 	  		  	console.log(err.message);          //把报错的 地方打印
// 	  		  	return;
// 	  		  }
// 	  		  conn.release(); //释放连接
// 	  		  callback(err,result) 	  		  
// 	  	  })
// 	  })
// }


//调取所有提现人
   function getUser(callback){
   	  pool.getConnection(function(err,conn){
   	  	var sql = 'select * from tixian';
   	  	conn.query(sql,function(err,result){
   	  		 if(err){         //如果报错
   	  		  	console.log(err.message);          //把报错的 地方打印
   	  		  	return;
   	  		  }
   	  		  conn.release(); //释放连接
   	  		  callback(err,result) 	  		  
   	  	  })
   	  })
   }
   

router.get('/alltx',function(req, response) { //一请求 二响应参数给前台传数据
	console.log('into.....');

	 getUser(function(err, result) {
			response.send(result)                   
		})
})


router.post('/tixian', function(req, response) { //一请求 二响应参数给前台传数据
	console.log('into.....');
	var money = req.body.tMoney;
	var zhb = req.body.baoBao;
	var spd = req.body.speed;
	var usId = req.body.TuseId;
	console.log(money);
	console.log(zhb);
	console.log(spd);
	console.log(usId)

	save(money, zhb, spd, usId, function(err, result) {
			console.log('注册成功');
			response.send({
					flag: 1,
					result: result
				})               
		})
})

//插入数据
function save(tmoney, tzhb, tsped, tid, callback) {
	pool.getConnection(function(err, conn) {
		var sql = 'insert into tixian(tMoney,baoBao,speed,TuseId) value(?,?,?,?)';
		conn.query(sql, [tmoney, tzhb, tsped, tid], function(err, result) {
			if(err) { //如果报错
//				console.log(err.message); //把报错的 地方打印
				return;
			}
			conn.release(); //释放连接
			// 	  		  console.log('into save')
			callback(err, result)
		})
	})
}

//获取提现表信息
function getAllUsers(uid, callback) {
	// 	console.log('pool'+pool)
	pool.getConnection(function(err, conn) {
		var sql = 'select * from tixian where TuseId = ?';
		console.log('conn' + conn)
		conn.query(sql, [uid], function(err, result) {
			if(err) { //如果报错
				return;
			}
			conn.release(); //释放连接
			callback(err, result)

		})
	})
}

router.get('/qianbao', function(req, response) { //第一个请求参数，第二个响应参数
	var Tid = req.query.TuseId;
	getAllUsers(Tid, function(err, results) {
		if(err) {
			response.send(err)
		} else if(results) {
//			console.log(results);
			response.send(results);
		}

	})
})

//获取钱包表信息
function qqiaobao(quid, callback) {
	pool.getConnection(function(err, conn) {
		var sql = 'select * from qianbao where qUserId = ?';
		conn.query(sql, [quid], function(err, result) {
			if(err) { //如果报错
//				console.log(err.message); //把报错的 地方打印
				return;
			}
			conn.release(); //释放连接
			callback(err, result)

		})
	})
}

router.get('/qb', function(req, response) { //第一个请求参数，第二个响应参数
	var qbao = req.query.qUserId;
	console.log("我是qb" + qbao);
	qqiaobao(qbao, function(err, results) {
		if(err) {
			response.send(err)
		} else if(results) {
			response.send(results);
		}

	})
})

//根据用户名查询用户
   function getUserByName(qusename,callback){
   	  pool.getConnection(function(err,conn){
   	  	var sql = 'select * from qianbao where qUserId = ?';
   	  	conn.query(sql,[qusename],function(err,result){
   	  		 if(err){         //如果报错
   	  		  	console.log(err.message);          //把报错的 地方打印
   	  		  	return;
   	  		  }
   	  		  conn.release(); //释放连接
   	  		  callback(err,result) 	  		  
   	  	  })
   	  })
   }
///插入钱包初始数据
   router.post('/crqb', function(req, response) { //一请求 二响应参数给前台传数据
	var qmoneys = req.body.qMoney;
	var qbid =req.body.qUserId;
    getUserByName(qbid,function(err, result) {
			console.log('注册成功');
			if(result==''||result==null){
			chaQb(qmoneys,qbid,function(err, result) {
				console.log('注册成功');
				response.send({
					flag: 1,
					result: result
				})               
		  })  
			}else{

				response.send({flag:2,result:result})
			}
		})
	
})

//插入钱包初始数据
function chaQb(qbm,qbi,callback) {
	pool.getConnection(function(err, conn) {
		var sql = 'insert into qianbao(qMoney,qUserId) value(?,?)';
		conn.query(sql, [qbm, qbi], function(err, result) {
			
			conn.release(); //释放连接
			callback(err, result)
		})
	})
}


//修改钱包信息
 function qcun(qmoney,qid,callback) {
	pool.getConnection(function(err, conn) {
		var sql = 'update qianbao set qMoney = qMoney+ ? where qUserId = ?';
		conn.query(sql, [qmoney,qid], function(err, result) {
			if(err) {
				return;
			}
			conn.release();
			callback(err, result)
		})
	})
}

router.post('/qbc', function(req, response) { //一请求 二响应参数给前台传数据
	console.log('into.....');
	var qmoney = req.body.qMoney;
	var qid = req.body.qUserId;
	console.log(qmoney);
	console.log(qid);
	
	qcun(qmoney,qid,function(err, result) {
			console.log('注册成功');
			response.send({
					flag: 1,
					result: result
				})                  
		})
})


//修改提现中提现进度id
function xiugai(tId, rId, callback) {
	pool.getConnection(function(err, conn) {
		var sql = 'update tixian set speed = ? where Tid = ?';
		conn.query(sql, [tId, rId], function(err, result) {
			// 	  		  console.log(result)
			conn.release(); //释放连接
			callback(err, result)
		})
	})
}

function xiugaiQ(yId, je, callback) {
	pool.getConnection(function(err, conn) {
		var sql = 'update qianbao set qMoney = qMoney-? where qUserId = ?';
		conn.query(sql, [je, yId], function(err, result) {
			// 	  		  console.log(result)
			conn.release(); //释放连接
			callback(err, result)
		})
	})
}

function azCha(cId, callback) {
	pool.getConnection(function(err, conn) {
		var sql = 'select * from tixian where Tid = ?';
		conn.query(sql, [cId], function(err, result) {
			if(err) { //如果报错
				console.log(err.message); //把报错的 地方打印
				return;
			}
			conn.release(); //释放连接
			callback(err, result)

		})
	})
}

router.post('/txId', function(req, response) {
	var speedId = req.body.speed;
	var cId = req.body.id;
	console.log(speedId);
	console.log(cId);
	//  修改数据

	azCha(cId, function(err, results) { //参数是一个函数
		if(err) {
//			console.log('报错')
			response.send(err)
		} else if(results) {
			var yId = results[0].TuseId;
			var je = results[0].tMoney;
			xiugai(speedId, cId, function(err, results) { //参数是一个函数
				if(err) {
					console.log('报错')
					response.send(err)
				} else if(results) {
					console.log('成功');
					response.send({
						results: results
					});
				}
			})
			
			xiugaiQ(yId, je, function(err, results) { //参数是一个函数
				if(err) {
					console.log('报错')
//					response.send(err)
				} else if(results) {
					console.log('成功');
//					response.send({
//						results: results
//					});
				}
			})
		}
	})
})

module.exports = router; //输出模块