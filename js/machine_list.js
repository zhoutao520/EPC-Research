$(document).ready(function() {
	function getUrlParam(name) { //a标签跳转获取参数
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return(r[2]);
		return null;
	}
	var flow_num = getUrlParam('flow_num');
	$.ajax({
		url: domainName + '/console/ec_machine/',
		type: 'GET', //GET
		async: true, //或false,是否异步
		timeout: 5000, //超时时间    //返回的数据格式：json/xml/$("#listResult ul")/script/jsonp/text
		data: {
			'flow_num': flow_num
		},
		success: function(data) {
			console.log(data.data);
			var result = data.data;
			var cool = result.cool;
			var pump = result.pump;
			var tower = result.tower;
			var boiler = result.boiler;
			var li = result.li
			cool.forEach(function(e) {
				$("#listResult").append("<li class='projectInfo'><a href='pro_ele.html?flow_num=" + flow_num + "&workType=1&power="+e.cool_Power+"&name=冷机'><span>冷机：</span><span>功率：" + e.cool_Power + "kW</span><span>" + e.cool_count + "台</span><img class='rightArrow' src='img/rightArrow.png' alt='右箭头'></a></li>");
			})
			pump.forEach(function(e) {
				$("#listResult").append("<li class='projectInfo'><a href='pro_ele.html?flow_num=" + flow_num + "&workType=2&power="+e.pump_Power+"'><span>循环水泵：</span><span>功率：" + e.pump_Power + "kW</span><span>" + e.pump_count + "台</span><img class='rightArrow' src='img/rightArrow.png' alt='右箭头'></a></li>");
			})
			tower.forEach(function(e) {
				$("#listResult").append("<li class='projectInfo'><a href='pro_ele.html?flow_num=" + flow_num + "&workType=3&power="+e.tower_Power+"'><span>冷却塔：</span><span>功率：" + e.tower_Power + "kW</span><span>" + e.tower_count + "台</span><img class='rightArrow' src='img/rightArrow.png' alt='右箭头'></a></li>");
			})
			boiler.forEach(function(e) {
				$("#listResult").append("<li class='projectInfo'><a href='pro_ele.html?flow_num=" + flow_num + "&workType=4&power="+e.boiler_Power+"'><span>锅炉：</span><span>功率：" + e.boiler_Power + "kW</span><span>" + e.boiler_count + "台</span><img class='rightArrow' src='img/rightArrow.png' alt='右箭头'></a></li>");
			})
			li.forEach(function(e) {
				$("#listResult").append("<li class='projectInfo'><a href='pro_ele.html?flow_num=" + flow_num + "&workType=5&power="+e.li_Power+"'><span>溴化锂机组：</span><span>功率：" + e.li_Power + "kW</span><span>" + e.li_count + "台</span><img class='rightArrow' src='img/rightArrow.png' alt='右箭头'></a></li>");
			})
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
	$('#submit').click(function(){
		$.ajax({
		url: domainName + '/console/ec_BasicMathFinal/',
		type: 'GET', //GET
		async: true, //或false,是否异步
		timeout: 5000, //超时时间    //返回的数据格式：json/xml/$("#listResult ul")/script/jsonp/text
		data: {
			'flow_num': flow_num
		},
		success: function(data) {
			$('#rs').text(""+data.data+"元");
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
	});
});