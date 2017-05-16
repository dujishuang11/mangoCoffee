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
//申请入驻信息
router.post('/team',function(req,res){  //请求参数，响应参数
	console.log("进入团队入驻  >>>");
	var Tavatar=req.body.TeamAvatar;//团队头像
	var Tname=req.body.TeamName; //：团队名称
	var Taddress=req.body.TeamAddress;//：地址
	var Tleader=req.body.TeamLeader;//：团队负责人
	var Tinformation=req.body.TContactInformation;//：联系方式
	var Tcard=req.body.IdentityCard;// ：负责人身份证
	var Tkey=req.body.TeamKey;//：团队密钥
	var Twork=req.body.TeamWork; //：团队作品
	var Taudit=req.body.TeamAudit;//：审核
	getUserByName(Tname,function(err,result){ 
		if(result==''||result==null){
			console.log('insert into mysql');
			save(Tavatar,Tname,Taddress,Tleader,Tinformation,Tcard,Tkey,Twork,Taudit,function(err,result){
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
	function save(tavatar,tname,taddress,tleader,tinformation,tcard,tkey,twork,taudit,callback){
		pool.getConnection(function(err,connection){
			var sql='insert into team (tuid,theader,ttitle,taddress,tpeople,ttel,tnumberid,tkey,tworks,tpass) values (0,?,?,?,?,?,?,?,?,?)';
			connection.query(sql,[tavatar,tname,taddress,tleader,tinformation,tcard,tkey,twork,taudit],function(err,result){
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