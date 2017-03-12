	/**
	 * @考勤类
	 */

	//引入依赖包
	var mongoose = require('mongoose');

	//schema
	var attendanceSchema = new mongoose.Schema({
		"aid"  : Number,
		"studentId"  : Number,  // 学生id
	    "date" : Date,  //日期
	    "courseName" : String,  //课程名称
	    "courseId" : Number,  //课程ID
	    "type" : Number,  // 考勤类型
		"teacherName"  : String,  //任课老师名称
		"teacherId"  : Number,  //任课老师ID
		"photograph"  : String,  //照片路径
		"comment"  : String  //备注
});

	//索引
	attendanceSchema.index({ "aid": 1});

	//model
	var Attendance = mongoose.model("Attendance",attendanceSchema);

	//对外暴露学生类接口
	module.exports = Attendance;