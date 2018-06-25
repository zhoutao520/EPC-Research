var flow_num='';
$(document).ready(function() {

	flow_num = getUrlParam('flow_num');
	$('#myTable tbody tr td input').focus(function() {
		$(this).val('');
	});
	var power = getUrlParam('power');
	var workType=getUrlParam('workType');
	if(workType == 1) {
		$.ajax({
			url: domainName + '/console/ec_BasicMathCool/',
			type: 'GET', //GET
			async: false, //或false,是否异步
			timeout: 5000, //超时时间    //返回的数据格式：json/xml/html/script/jsonp/text
			data: {
				'flow_num': flow_num,
				'power':power,
			},
			success: function(data) {
				console.log(data.data);
				$('#select_div').append('<li><span>冷机能耗测算为：</span><span id="ldj"></span>元</li>')
				$("#ldj").text(data.data);
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

	}
	else if(workType == 2) {
		$.ajax({
			url: domainName + '/console/ec_BasicMathPump/',
			type: 'GET', //GET
			async: false, //或false,是否异步
			timeout: 5000, //超时时间    //返回的数据格式：json/xml/html/script/jsonp/text
			data: {
				'flow_num': flow_num,
				'power':power,
			},
			success: function(data) {
				console.log(data.data);
				$('#select_div').append('<li><span>循环水泵测算</span><span id="ldj"></span></li>')
				$("#ldj").text(data.data);
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
	}else if(workType == 3) {
		$.ajax({
			url: domainName + '/console/ec_BasicMathTower/',
			type: 'GET', //GET
			async: false, //或false,是否异步
			timeout: 5000, //超时时间    //返回的数据格式：json/xml/html/script/jsonp/text
			data: {
				'flow_num': flow_num,
				'power':power,
			},
			success: function(data) {
				console.log(data.data);
				$('#select_div').append('<li><span>冷却塔测算</span><span id="ldj"></span></li>')
				$("#ldj").text(data.data);
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

}else if(workType == 4) {
		$.ajax({
			url: domainName + '/console/ec_BasicMathBoiler/',
			type: 'GET', //GET
			async: false, //或false,是否异步
			timeout: 5000, //超时时间    //返回的数据格式：json/xml/html/script/jsonp/text
			data: {
				'flow_num': flow_num,
				'power':power,
			},
			success: function(data) {
				console.log(data.data);
				$('#select_div').append('<li><span>锅炉测算</span><span id="ldj"></span></li>')
				$("#ldj").text(data.data);
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
}else if(workType == 5) {
		$.ajax({
			url: domainName + '/console/ec_BasicMathLi/',
			type: 'GET', //GET
			async: false, //或false,是否异步
			timeout: 5000, //超时时间    //返回的数据格式：json/xml/html/script/jsonp/text
			data: {
				'flow_num': flow_num,
				'power':power,
			},
			success: function(data) {
				console.log(data.data);
				$('#select_div').append('<li><span>溴化锂机组测算</span><span id="ldj"></li>')
				$("#ldj").text(data.data);
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
	}
});
function getUrlParam(name) { //a标签跳转获取参数
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return(r[2]);
	return null;
}
function turn () {
	location.href = 'pro_machine.html?flow_num='+flow_num;
}