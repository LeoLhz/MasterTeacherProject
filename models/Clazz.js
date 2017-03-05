/**
 * @班级类
 */

//引入依赖包
var mongoose = require('mongoose');

//schema
var clazzSchema = new mongoose.Schema({
	"sid"  : Number,
	"grade"  : String,  //年级
	"clazzType"  : String,  //班级类型
	"name" : String,  //班级名称
	"major" : String,  //专业
	"studentNum" : Number,  //人数
	"clazzMonitor" : Number,  //班长id
	"clazzSecretary" : Number, //团支书id
    "Students" : [Student]   //存放课程的kid
});

//索引
clazzSchema.index({ "sid": 1});

//model
var Clazz = mongoose.model("Clazz",clazzSchema);

//对外暴露学生类接口
module.exports = Clazz;