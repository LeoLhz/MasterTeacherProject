	/**
	 * @教师类
	 */

	//引入依赖包
	var mongoose = require('mongoose');

	//schema
	var teacherSchema = new mongoose.Schema({
		"tid"  : Number,
		"courseId"  : Number,  // 班级id
		"courseName"  : Number,  // 班级id
	    "name" : String,  //名称
	    "age" : Number,  //年龄
	    "sex" : String,  // 性别
		"photograph"  : String,  //头像地址		
		"phone"  : Number,  //手机号
		"address"  : String,  //住址
		"CDCard"  : String,  //身份证号
		"CDCardPicture"  : String,  //身份证照片地址
		"comment"  : String,  //备注
		"clazzId"  : [Number]   // 存放班级情况
	});

	//索引
	teacherSchema.index({ "tid": 1});

	//model
	var Teacher = mongoose.model("Teacher",teacherSchema);

	//对外暴露学生类接口
	module.exports = Teacher;