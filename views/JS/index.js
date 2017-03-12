function openStudentModal(){
	console.log('get in function');
	 $.ajax({  
                url: "/queryAllKecheng",  
                type: "GET",  
                dataType: "json",  
                data: {id:1},  
                contentType: "application/json",  
                cache: false,  
                timeout: 5000,  
                complete: function() {  
                    //called when complete  
                    console.log('process complete');  
                }, 
                success: function(data) {
                	//清空课程列表节点
                	$('#kechengList').empty();
                	//标题
                	console.log(data);
                 	if(data && data.allkecheng.length>0){
					var divDom = $('<div class="form-group"></div>');
					var labelDom = $('<label for="kechengList">选修课程：</label>');
					divDom.append(labelDom);
					//列表
					var checkBOX = $('<div class="checkbox"></div>');
					for (var i = 0; i < data.allkecheng.length; i++) {
						var inputDom = $('<label><input name="Kechengs" type="checkbox"/></label>').append(data.allkecheng[i].name);
						inputDom.attr('id',data.allkecheng[i].kid);
						checkBOX.append(inputDom).append('&nbsp;&nbsp;&nbsp;&nbsp;');
					}
					//组装DOM
            		$('#kechengList').append(divDom).append(checkBOX);
                 	}
                    $('#addStudent-Modal').modal('show');
                },  
  
                error: function() {  
                    console.log('process error');  
                }  
    }); 
}


function doAddStudent(){
	var sid = $('#student-sid').val();
	var name = $('#student-name').val();
	var age = $('#student-age').val();
	var sex = $('input:radio[name="student-sex"]:checked').val();
	var Kechengs = new Array();
	$('input[name="Kechengs"]:checked').each(function(){
		Kechengs.push($(this).parent().attr('id'));
		}); 
	 $.ajax({  
                url: "/doAddStudent",  
                type: "GET",  
                dataType: "json",  
                data: {
                	sid:sid,
                	name:name,
                	age:age,
                	sex:sex,
                	Kechengs:Kechengs
                },  
                contentType: "application/json",  
                cache: false,  
                timeout: 5000,  
                complete: function() {  
                    //called when complete  
                    console.log('process complete');  
                    history.go(0);
                }, 
                success: function(data) {
                    $('#addStudent-Modal').modal('hide');
                },  
  
                error: function() {  
                    console.log('process error');  
                }  
    }); 
}