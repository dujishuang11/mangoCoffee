var express = require('express');
var router = express.Router();
var fs = require('fs');
var formidable = require('formidable');
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

	
	//获取招聘列表
	function getAllUsers(callback){
		pool.getConnection(function(err,connection){//getConnection获取链接
			var sql = 'select * from resume';
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

//**********************************************************************
//我要应聘
router.post('/meyp', function(request,response){
			var ContactNumber= request.body.ContactNumber;
			var CurrentState= request.body.CurrentState;
			var Education= request.body.Education;
			var Fullname= request.body.Fullname;
			var Gender= request.body.Gender;
			var HandsOnBackground= request.body.HandsOnBackground;
			var HeadPortrait= request.body.HeadPortrait;
			var JobTitle= request.body.JobTitle;
			var Mailbox= request.body.Mailbox;
			var PlaceOfOrigin= request.body.PlaceOfOrigin;
			var ProfessionalSkills= request.body.ProfessionalSkills;
			var SelfEvaluation= request.body.SelfEvaluation;
			var WorkExperience= request.body.WorkExperience;
			var WorkProjectExperience= request.body.WorkProjectExperience;
			var Workarea= request.body.Workarea;
			var WorkingProperty= request.body.WorkingProperty;
			var Age= request.body.Age;
			var RPublisherId= request.body.RPublisherId;
			var FBtime= request.body.FBtime;

			save(ContactNumber,CurrentState,Education,Fullname,Gender,HandsOnBackground,HeadPortrait,JobTitle,Mailbox,PlaceOfOrigin,ProfessionalSkills,SelfEvaluation,WorkExperience,WorkProjectExperience,Workarea,WorkingProperty,Age,RPublisherId,FBtime,function(err,result){
					if(err){
						response.send(err)
					}else if(result.insertId > 0){
						response.send({flag:1,result})
					}
				})
			
	})
	
	
	function save(ContactNumber,CurrentState,Education,Fullname,Gender,HandsOnBackground,HeadPortrait,JobTitle,Mailbox,PlaceOfOrigin,ProfessionalSkills,SelfEvaluation,WorkExperience,WorkProjectExperience,Workarea,WorkingProperty,Age,RPublisherId,FBtime,callback){
		pool.getConnection(function(err,connection){//getConnection获取链接
			var sql = 'insert into resume(ContactNumber,CurrentState,Education,Fullname,Gender,HandsOnBackground,HeadPortrait,JobTitle,Mailbox,PlaceOfOrigin,ProfessionalSkills,SelfEvaluation,WorkExperience,WorkProjectExperience,Workarea,WorkingProperty,Age,RPublisherId,FBtime) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
			connection.query(sql,[ContactNumber,CurrentState,Education,Fullname,Gender,HandsOnBackground,HeadPortrait,JobTitle,Mailbox,PlaceOfOrigin,ProfessionalSkills,SelfEvaluation,WorkExperience,WorkProjectExperience,Workarea,WorkingProperty,Age,RPublisherId,FBtime],function(err,result){
				if(err){
					console.log(err.message);
					return;
				}
				connection.release();
				callback(err,result);
			})
		})
	}
	
	
//获取招聘列表详情
	function getzpxq(resumeId,callback){
		pool.getConnection(function(err,connection){//getConnection获取链接
			var sql = 'select * from resume where resumeId = ?';
			connection.query(sql,[resumeId],function(err,result){
				if(err){
					console.log('getAllUsers Error:'+err.message);
					return;
				}
				connection.release();//释放链接
				callback(err,result);
			})
		})
		
	}
	
	router.get('/zpxq', function(request,response){
		
		var resumeId = request.query.resumeId;
			getzpxq(resumeId,function(err,results){
				if(err){
					response.send(err)
				}else if(results){
					response.send(results)
				}
			})
	})
//*************************************************
//获取发布人简历列表
	function getzpxq(RPublisherId,callback){
		pool.getConnection(function(err,connection){//getConnection获取链接
			var sql = 'select * from resume where RPublisherId = ?';
			connection.query(sql,[RPublisherId],function(err,result){
				if(err){
					console.log('getAllUsers Error:'+err.message);
					return;
				}
				connection.release();//释放链接
				callback(err,result);
			})
		})
		
	}
	
	router.get('/fbrxx', function(request,response){
		
		var RPublisherId = request.query.RPublisherId;
			getzpxq(RPublisherId,function(err,results){
				if(err){
					response.send(err)
				}else if(results){
					response.send(results)
				}
			})
	})

//*******************************************************************
//删除简历
router.get('/jldel', function(request,response){
		var deluid = request.query.resumeId;
		jldelete(deluid,function(err,results){
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
	function jldelete(idd,callback){
		pool.getConnection(function(err,connection){
			var sql = 'delete from resume where resumeId = ?';
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
	
//*******************************************************************
//修改简历
router.post('/lhqchange', function(request, response) {
	console.log("进入修改资料》》》》》》")
			var ContactNumber= request.body.ContactNumber;
			var CurrentState= request.body.CurrentState;
			var Education= request.body.Education;
			var Fullname= request.body.Fullname;
			var Gender= request.body.Gender;
			var HandsOnBackground= request.body.HandsOnBackground;
			var HeadPortrait= request.body.HeadPortrait;
			var JobTitle= request.body.JobTitle;
			var Mailbox= request.body.Mailbox;
			var PlaceOfOrigin= request.body.PlaceOfOrigin;
			var ProfessionalSkills= request.body.ProfessionalSkills;
			var SelfEvaluation= request.body.SelfEvaluation;
			var WorkExperience= request.body.WorkExperience;
			var WorkProjectExperience= request.body.WorkProjectExperience;
			var Workarea= request.body.Workarea;
			var WorkingProperty= request.body.WorkingProperty;
			var Age= request.body.Age;
			var resumeId = request.body.resumeId
			
			
	getUsersG(ContactNumber,CurrentState,Education,Fullname,Gender,HandsOnBackground,HeadPortrait,JobTitle,Mailbox,PlaceOfOrigin,ProfessionalSkills,SelfEvaluation,WorkExperience,WorkProjectExperience,Workarea,WorkingProperty,Age,resumeId,function(err, result) {
		console.log("result:" + result)
		if(result.changedRows > 0) {
			response.send({success: 1}) //修改成功
		} else if(err) {
			response.send({err: err}) //修改错误
		} else {
			response.send({success: 3}) //无修改项
		}
	})
})

function getUsersG(ContactNumber,CurrentState,Education,Fullname,Gender,HandsOnBackground,HeadPortrait,JobTitle,Mailbox,PlaceOfOrigin,ProfessionalSkills,SelfEvaluation,WorkExperience,WorkProjectExperience,Workarea,WorkingProperty,Age,resumeId,callback) {
	pool.getConnection(function(err, connection) {
		var sql = "update resume set ContactNumber = ?,CurrentState = ?,Education = ?,Fullname = ?,Gender = ?,HandsOnBackground = ?,HeadPortrait = ?,JobTitle = ?,Mailbox = ?,PlaceOfOrigin = ?,ProfessionalSkills = ?,SelfEvaluation = ?,WorkExperience = ?,WorkProjectExperience = ?,Workarea = ?,WorkingProperty = ?,Age = ? where resumeId = ?";
		connection.query(sql,[ContactNumber,CurrentState,Education,Fullname,Gender,HandsOnBackground,HeadPortrait,JobTitle,Mailbox,PlaceOfOrigin,ProfessionalSkills,SelfEvaluation,WorkExperience,WorkProjectExperience,Workarea,WorkingProperty,Age,resumeId], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}



//根据销量排序
function getSalespx(mainclass,subclass, callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'select * from list where mainclass=? or subclass=? order by salas desc';
		connection.query(sql, [mainclass,subclass], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}

router.get('/salespx', function(request, response) {
	console.log("销量排序进入成功》》》》》")
	var mainclass = request.query.mainclass,
		subclass = request.query.subclass;
	getSalespx(mainclass,subclass, function(err, result) {
		console.log("result:" + result)
		if(result.length > 0) {
			response.send({
					success: "success",
					data: result
				}) //列表分类不存在
		} else if(result.length == 0) {
			response.send({
					success: "查无数据"
				}) //列表获取成功
		} else if(err) {
			response.send({
					err: err
				}) //列表获取错误
		} else {
			response.send({
					success: 3
				}) //列表获取错误
		}
	})
})

//根据价格排序
function getPricepx(mainclass,subclass, callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'select * from list where mainclass=? or subclass=? order by pricing desc;';
		connection.query(sql, [mainclass,subclass], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}

router.get('/pricepx', function(request, response) {
	console.log("价格排序进入成功》》》》》")
	var mainclass = request.query.mainclass,
		subclass = request.query.subclass;
	getPricepx(mainclass,subclass, function(err, result) {
		console.log("result:" + result)
		if(result.length > 0) {
			response.send({
					success: "success",
					data: result
				}) //列表分类不存在
		} else if(result.length == 0) {
			response.send({
					success: "查无数据"
				}) //列表获取成功
		} else if(err) {
			response.send({
					err: err
				}) //列表获取错误
		} else {
			response.send({
					success: 3
				}) //列表获取错误
		}
	})
})

//按地址分类
function getNewlistSearch(keyword,callback){
	pool.getConnection(function(err, connection) {
		var sql = "select * from resume where Workarea like ?";
		connection.query(sql, ["%"+keyword+"%"], function(err, result) {
			console.log("内容："+result)
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}
router.get('/lhqsearch', function(request, response) {
	var keyword = request.query.Workarea;
	getNewlistSearch(keyword, function(err, result) {
		console.log("result:" + result)
		if(result){
			response.send({success:1,data:result})
		}
	})
})







//输出
module.exports = router;