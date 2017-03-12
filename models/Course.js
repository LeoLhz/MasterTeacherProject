/**
 * @课程类
 */

//引入依赖包
var mongoose = require('mongoose');

//schema
var courseSchema = new mongoose.Schema({
    "kid"  : Number,
    "name" : String,   //课程名称
    "teacherId" : Number,   //任课老师ID
    "teacherName" : String,   //任课老师名称
    "studentId" : [Number]，      //这个数组存放的是学生的sid
    "comment"  : String  //备注
});
//索引
courseSchema.index({ "kid": 1});

//课程添加学生
courseSchema.statics.addStudent = function(kidarray,sid,callback){
    for(var i = 0 ; i < kidarray.length ; i++){
        Course.update({"kid":kidarray[i]},{$push :{"studentId":sid}},function(){
            console.log("课程添加学生信息成功！");
        })
    }
}

//model
var Course = mongoose.model("Course"courseSchema);

//对外暴露课程类接口
module.exports = Course;