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


//function getAllUsers(callback){
//	pool.getConnection(function(err,con){
//		var sql = 'select * from settled';
//		con.query(sql,function(err,result){
////			console.log('result:'+result)
//			if(err){ 
//				console.log("getAllUsers Error:" + err.message);
//				return;
//			}
//			con.release()//释放连接
//			callback(err,result);
//		})
//	})
//}
//
//router.get('/list',function(req,res){
//	console.log('cat');
//	getAllUsers(function(err,results){
//		if(err){
//			res.send(err);
//		}else if(results){
//			res.send(results);
//		}
//	})
//})


//根据用户名查询用户
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


function save(shopName,shopType,realName,email,phone,qq,briefIntroduction,address,userID,secretKey,examine,callback){
	pool.getConnection(function(err,con){
//		var sql = 'select * from user where username = ?';
		var sql = 'insert into settled(shopName,shopType,realName,email,phone,qq,briefIntroduction,address,userID,secretKey,examine) value(?,?,?,?,?,?,?,?,?,?,?)'
		con.query(sql,[shopName,shopType,realName,email,phone,qq,briefIntroduction,address,userID,secretKey,examine],function(err,result){
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

router.post('/shop_register',function(req,res){//请求数据　响应数据
//	console.log('wtf')
//	var username = req.body.username;
	var shopName = '笑笑';
	var shopType = '摄影师';
	var realName = '孙亚龙';
	var email = '249842959@qq.com';
	var phone = '17600022763';
	var qq = '249842959';
	var briefIntroduction = '专业摄影，国际摄影二等奖';
	var address = '北京市大兴区';
	var userID = '140622198711260037';
	var secretKey = '';
	var examine = 0;
//	console.log(username)
	getAllUsers(shopName,function(err,result){
		if(result == '' || result == null) {
			console.log('未注册')
			save(shopName,shopType,realName,email,phone,qq,briefIntroduction,address,userID,secretKey,examine,function(err,result){
////				if(result.insertId > 0){
				res.send({flag:1,result:result})
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


module.exports = router;