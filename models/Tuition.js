	/**
	 * @学费类
	 */

	//引入依赖包
	var mongoose = require('mongoose');

	//schema
	var tuitionSchema = new mongoose.Schema({
		"tid"  : Number,
		"studentId"  : Number,  // 学生id
	    "billNo" : String,  //发票编号
	    "sTuition" : Number,  //应缴学费
	    "pTuition" : Number,  // 实缴学费
		"tuitionPhotograph"  : String,  //学费照片地址		
		"year"  : String,  //手学年
		"comment"  : String  //备注
});

	//索引
	tuitionSchema.index({ "tid": 1});

	//model
	var Tuition = mongoose.model("Tuition",tuitionSchema);

	//对外暴露学费类接口
	module.exports = Tuition;