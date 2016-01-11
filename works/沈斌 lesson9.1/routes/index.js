var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var orm=require("orm");
var dbs=require("../dbs/dbs")(router);

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index');
});

router.post("/select",dbs.selectData,function(req,res){
	res.send(res.locals.allnews);
});

router.post("/insert",dbs.insertData,function(req,res){
	res.send(res.locals.allnews);

})

router.post("/delete",dbs.removeData,function(req,res){
	res.send(res.locals.allnews);
})

router.post("/showm",dbs.selectNewsId,function(req,res){
	res.send(res.locals.allnews);
})

router.post("/modify",dbs.updateData,function(req,res){
	res.send(res.locals.allnews);
})
module.exports = router;
