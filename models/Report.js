	/**
	 * @成绩类
	 */

	//引入依赖包
	var mongoose = require('mongoose');

	//schema
	var reportSchema = new mongoose.Schema({
		"rid"  : Number,
		"studentId"  : Number,  // 学生id
	    "studentName" : String,  //学生名称
	    "year" : String,  //学年
	    "courseId" : Number,  // 课目ID
		"courseName"  : String,  //课目名称		
		"grade"  : Number,  //成绩
		"teacherId"  : Number,  //老师ID
		"teacherName"  : String,  //老师名称
		"comment"  : String  //备注
	});

	//索引
	reportSchema.index({ "rid": 1});

	//model
	var Report = mongoose.model("Report",reportSchema);

	//对外暴露成绩类接口
	module.exports = Report;