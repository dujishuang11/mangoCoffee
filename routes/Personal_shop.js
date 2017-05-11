var express = require('express');//引入模块
var mysql = require('mysql');
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


function getAllUsers(callback){
	pool.getConnection(function(err,con){
		var sql = 'select * from settled';
		con.query(sql,function(err,result){
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

router.get('/list',function(req,res){
	console.log('cat');
	getAllUsers(function(err,results){
		if(err){
			res.send(err);
		}else if(results){
			res.send(results);
		}
	})
})

function save(username,pass,phone,callback){
	pool.getConnection(function(err,con){
//		var sql = 'select * from user where username = ?';
		var sql = 'insert into user(username,pass,phone) value(?,?,?)'
		con.query(sql,[username,pass,phone],function(err,result){
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


module.exports = router;