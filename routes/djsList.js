var express = require('express');
var mysql = require('mysql');

var router = express.Router();

var pool = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'shuang11',
	database: 'kam',
	port: 3306
});

router.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

//插入列表
function getAddList(cover, tradename, mainclass, subclass, content, pricing, uid, salas, package,original, callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'insert into list (cover, tradename, mainclass, subclass, content, pricing, uid, salas, package,original) values (?,?,?,?,?,?,?,?,?,?)';
		connection.query(sql, [cover, tradename, mainclass, subclass, content, pricing, uid, salas, package,original], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}

router.post('/addList', function(request, response) {
	console.log('进入插入列表》》》》')
	var cover = request.body.cover,
		tradename = request.body.tradename,
		mainclass = request.body.mainclass,
		subclass = request.body.subclass,
		content = request.body.content,
		pricing = request.body.pricing,
		uid = request.body.uid,
		salas = request.body.salas,
		package = request.body.package,
		original = request.body.original;

	getAddList(cover, tradename, mainclass, subclass, content, pricing, uid, salas, package,original, function(err, results) {
		if(err) {
			response.send(err)
		} else if(results.insertId > 0) {
			console.log('results' + results)
			response.send({
				success: "success",
				data: results
			})
		} else {
			response.send({
				err: err
			})
		}
	})
})

//获取全部列表
function getList(callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'select * from list';
		connection.query(sql, function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result);
		})
	})
}

router.get('/list', function(request, response) {
	console.log("全部列表进入成功》》》》》")
	getList(function(err, result) {
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

//获取发布人列表
function getIssueList(uid, callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'select * from list where uid = ?';
		connection.query(sql, [uid], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result);
		})
	})
}

router.get('/issueList', function(request, response) {
	console.log("列表进入成功》》》》》")
	var uid = request.query.uid;
	getIssueList(uid, function(err, result) {
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

//获取分类列表
function getObtainList(mainclass, subclass, callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'select * from list where mainclass = ? or subclass = ?';
		connection.query(sql, [mainclass, subclass], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result);
		})
	})
}

router.get('/obtainList', function(request, response) {
	console.log("列表进入成功》》》》》")
	var mainclass = request.query.mainclass,
		subclass = request.query.subclass;
	getObtainList(mainclass, subclass, function(err, result) {
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

//列表详情
function getListDetails(listid, callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'select * from list where listid = ?';
		connection.query(sql, [listid], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}

router.get('/listDetails', function(request, response) {
	console.log("列表详情进入成功》》》》》")
	var listid = Number(request.query.listId);
	getListDetails(listid, function(err, result) {
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

//列表删除
function getListDel(listid, callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'delete from list where listid = ?';
		connection.query(sql, [listid], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}

router.get('/listDel', function(request, response) {
	console.log("列表详情进入成功》》》》》")
	var listid = request.query.listId;
	getListDel(listid, function(err, result) {
		console.log("result:" + result)
		if(result) {
			response.send({
					success: "success"
				}) //列表分类不存在
		} else if(err) {
			response.send({
					err: err
				}) //列表获取错误
		} else {
			response.send({
					success: "查无数据"
				}) //列表获取错误
		}
	})
})

//购买信息添加
function getAddBuy(purchaserid, commodityid, callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'insert into purchaseid (purchaserid, commodityid) values (?,?)';
		connection.query(sql, [purchaserid, commodityid], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}

router.post('/buy', function(request, response) {
	console.log('进入插入购买列表》》》》')
	var purchaserid = request.body.purchaserid,
		commodityid = request.body.commodityid;

	getAddBuy(purchaserid, commodityid, function(err, results) {
		if(err) {
			response.send(err)
		} else if(results.insertId > 0) {
//			response.send({
//				success: "success"
//			})
			getSales(commodityid, function(err, result) {
				console.log("result:" + result)
				if(result.changedRows > 0) {
					console.log("修改成功")
					response.send({
							success: "success"
						}) //列表分类不存在
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
		} else {
			response.send({
				err: err
			})
		}
	})
})

//购买信息获取
function getBuyList(purchaserid, callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'select * from purchaseid where purchaserid = ?';
		connection.query(sql, [purchaserid], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}

router.get('/buyList', function(request, response) {
	console.log("购买详情进入成功》》》》》")
	var purchaserid = request.query.purchaserid;
	getBuyList(purchaserid, function(err, result) {
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

//模糊搜索
function getSearchList(search, callback) {
	pool.getConnection(function(err, connection) {
		var sql = "select * from list where tradename like ? or mainclass like ? or subclass like ? or content like ?";
		connection.query(sql, ["%" + search + "%", "%" + search + "%", "%" + search + "%", "%" + search + "%"], function(err, result) {
			console.log("内容：" + result)
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}

router.get('/searchList', function(request, response) {
	console.log("搜索列表进入成功》》》》》")
	var search = request.query.search;
	getSearchList(search, function(err, result) {
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

//修改销量
function getSales(listid, callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'update list set salas = salas+1 where listid = ?';
		connection.query(sql, [listid], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result);
		})
	})
}

//router.post('/sales', function(request, response) {
//	console.log("全部列表进入成功》》》》》")
//	var listid = request.body.listid;
//	getSales(listid, function(err, result) {
//		console.log("result:" + result)
//		if(result.changedRows > 0) {
//			response.send({
//					success: "success"
//				}) //列表分类不存在
//		} else if(err) {
//			response.send({
//					err: err
//				}) //列表获取错误
//		} else {
//			response.send({
//					success: 3
//				}) //列表获取错误
//		}
//	})
//
//})


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

//获取原创列表
function getOriginal(callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'select * from list where original = 1';
		connection.query(sql, function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result);
		})
	})
}

router.get('/original', function(request, response) {
	console.log("原创列表进入成功》》》》》")
	getOriginal(function(err, result) {
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

//获取原创分类列表
function getOriginalClass(mainclass, subclass, callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'select * from list where original = 1 and mainclass = ? or subclass = ?';
		connection.query(sql, [mainclass, subclass], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result);
		})
	})
}

router.get('/originalClass', function(request, response) {
	console.log("原创分类列表进入成功》》》》》")
	var mainclass = request.query.mainclass,
		subclass = request.query.subclass;
	getOriginalClass(mainclass, subclass, function(err, result) {
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

//插入钱包信息
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


module.exports = router;