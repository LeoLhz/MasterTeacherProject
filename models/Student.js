	/**
	 * @学生类
	 */

	//引入依赖包
	var mongoose = require('mongoose');

	//schema
	var studentSchema = new mongoose.Schema({
		"sid"  : Number,
		"clazzId"  : Number,  // 班级id
	    "name" : String,  //名称
	    "age" : Number,  //年龄
	    "sex" : String,  // 性别
	    "type" : String,  // 学生类型
		"photograph"  : String,  //头像地址		
		"phone"  : Number,  //手机号
		"address"  : String,  //住址
		"CDCard"  : String,  //身份证号
		"CDCardPicture"  : String,  //身份证照片地址
		"comment"  : String,  //备注
		"tuitionId"  : [Number], // 存放学费情况
		"reportId"  : [Number],  //存放成绩情况
		"attendanceId"  : [Number],  //存放考勤情况
		"courseId"  : [Number],  //存放课目情况
		"rewardId"  : [Number]   // 存放奖罚情况
	});

	//索引
	studentSchema.index({ "sid": 1});

	//model
	var Student = mongoose.model("Student",studentSchema);

	//对外暴露学生类接口
	module.exports = Student;