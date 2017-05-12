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
			save(Qavatar,Qname,Qaddress,Qleader,Qinformation,Qkey,Qwork,Qaudit,function(err,result){
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
	function save(qavatar,qname,qaddress,qleader,qinformation,qkey,qwork,qaudit,callback){
		pool.getConnection(function(err,connection){
			var sql='insert into qiye (quid,qheader,qtitle,qaddress,qpeople,qtel,qimg,qkey,qpass) values (0,?,?,?,?,?,?,?,?)';
			connection.query(sql,[qavatar,qname,qaddress,qleader,qinformation,qkey,qwork,qaudit],function(err,result){
				if(err){
					console.log('insertUser_Sql Error:'+ err.message);
					return;
				}
				connection.release();
				callback(err,result);
			})
		})
	}





















module.exports=router;  //输出