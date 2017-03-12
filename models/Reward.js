	/**
	 * @奖罚类
	 */

	//引入依赖包
	var mongoose = require('mongoose');

	//schema
	var rewardSchema = new mongoose.Schema({
		"rid"  : Number,
		"studentId"  : Number,  // 学生id
	    "year" : String,  //学年
	    "type" : Number,  //类型
	    "detail" : String,  // 详情
		"comment"  : String  //备注		
});

	//索引
	rewardSchema.index({ "sid": 1});

	//model
	var Reward = mongoose.model("Reward",rewardSchema);

	//对外暴露奖罚类接口
	module.exports = Reward;