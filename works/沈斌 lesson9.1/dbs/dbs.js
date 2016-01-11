var express=require("express");
var orm=require("orm");

var dbusername="root";
var dbpassword="";
var dbname="baidunews";
//将方法暴露到外部
module.exports=function(router){
	router.use(orm.express('mysql://'+dbusername+':'+dbpassword+'@localhost/'+dbname,{
		define:function(db,models,next){
			models.allnews = db.define("allnews",{
				newsid:{type:"serial",key:true},
				newstitle:String,
				newscontent:String,
				newsimg:String,
				addtime:Date,
				newstype:String
			});
			next();
		}
	}));
	
	//数据库操作
	var dbs={
		//1.通过传入的data-newstype查找数据
		selectData:function(req,res,next){
			var selectjson;
			selectjson={newstype:req.body.newstype};

			req.models.allnews.find(selectjson,function(err,allnews){
				if (err)
					return console.error("连接失败："+err);
				res.locals.allnews=allnews;
				next();
			});
		},
		//插入数据
		insertData:function(req,res,next){
			req.models.allnews.create({
				newstitle:req.body.newstitle,
				newscontent:req.body.newscontent,
				newsimg:req.body.newsimg,
				addtime:req.body.addtime,
				newstype:req.body.newstype
			},function(err,allnews){
				if(err)
					return console.err("添加失败"+err);
				next();
			})
		},

		//删除数据
		removeData:function(req,res,next){
			req.models.allnews.find({
				newsid:req.body.newsid
			},function(err,allnews){
				if(err)
					return console.err("查找数据失败"+err);
				allnews[0].remove(function(err){
					if(err)
						return console.err("删除数据失败"+err);
					res.locals.allnews={
						"result":"数据删除成功"
					};
					next();
				})
			})
		},
		//显示选项(id)
		selectNewsId:function(req,res,next){
			var selectid;
			selectid={newsid:req.body.newsid};

			req.models.allnews.find(selectid,function(err,allnews){
				if (err)
					return console.error("连接失败："+err);
				res.locals.allnews=allnews;
				next();
			});
		},

		//修改数据
		updateData:function(req,res,next){
			req.models.allnews.find({
				newsid:req.body.newsid
			},function(err,allnews){
				if(err)
					return console.err("查找数据失败"+err);
				allnews[0].newstitle=req.body.newstitle;
				allnews[0].newsimg=req.body.newsimg;
				allnews[0].newscontent=req.body.newscontent;
				allnews[0].newstype=req.body.newstype;
				allnews[0].addtime=req.body.addtime;
				allnews[0].save(function(err){
					if(err)
						return console.err("修改失败"+err);
					next();
				});
			});
		}
	}
	return dbs;
}