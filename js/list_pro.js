$(document).ready(function() {
	$.ajax({
		url: domainName + '/console/ec_BasicProList/',
		type: 'GET', //GET
		async: true, //或false,是否异步
		timeout: 5000, //超时时间    //返回的数据格式：json/xml/html/script/jsonp/text
		success: function(data) {
			console.log(data)
			var result = data.data
			for(var i = 0; i < result.length; i++) {
				var state = '';
				result[i].is_math?state='已计算':state='未计算';
				var html = `<li>
								<div onclick="location.href='pro_machine.html?flow_num=`+result[i].flow_num+`'" class="projectInfo">
									<p>项目名称：`+result[i].pro_name+`</p>
									<p>项目状态：`;
				result[i].is_math?html+=`<span>已计算</span>`:html+=`<span class='redC'>未计算</span>`;					
				html+=`</p>
						<p>录入时间：`+result[i].createTime+`</p>
						<img class="rightArrow" src="img/rightArrow.png" alt="右箭头">
					</div>
				</li>`;
				$("#myList").append(html)
			}
			$('#load').css('display','none');
		},
		error: function(xhr, textStatus) {
			console.log('错误')
			console.log(xhr)
			console.log(textStatus)
		},
		complete: function() {
			console.log('结束')
		}
	});
	$('.exit').click(function(){
		localStorage.removeItem('userId');
		location.href='login.html';
	})
});