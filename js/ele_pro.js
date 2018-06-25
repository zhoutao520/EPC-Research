$(document).ready(function() {
	function getUrlParam(name) { //a标签跳转获取参数
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return decodeURI(r[2]);
		return null;
	}
	var flow_num = getUrlParam('flow_num');
	localStorage.setItem('name',getUrlParam('name'));
	$('#select_div input').focus(function() {
		$(this).val('');
	});
	var last_workType = getUrlParam('workType');
	var power = getUrlParam('power');

	$.ajax({
		url: domainName + '/console/ec_eleHistory/',
		type: 'GET', //GET
		async: true, //或false,是否异步
		timeout: 5000, //超时时间    //返回的数据格式：json/xml/html/script/jsonp/text
		data: {
			'flow_num': flow_num
		},
		dataType: "json",
		success: function(data) {
			console.log(data)
			var result = data.data

			var a0 = $(".a0").val(""+result.electric_basic+"");
			var a1 = $(".a1").val(""+result.electric_j+"");
			var a2 = $(".a2").val(""+result.electric_f+"");
			var a3 = $(".a3").val(""+result.electric_p+"");
			var a4 = $(".a4").val(""+result.electric_g+"");
			var a5 = $(".a5").val(""+result.workTime_j+"");
			var a6 = $(".a6").val(""+result.workTime_f+"");
			var a7 = $(".a7").val(""+result.workTime_p+"");
			var a8 = $(".a8").val(""+result.workTime_g+"");
			console.log(a0);
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
	$('.a').focus(function () {
		$(this).val('');
	})
	$("#submit").click(function() {
		var a0 = Number.parseFloat($(".a0").val());
		var a1 = Number.parseFloat($(".a1").val());
		var a2 = Number.parseFloat($(".a2").val());
		var a3 = Number.parseFloat($(".a3").val());
		var a4 = Number.parseFloat($(".a4").val());
		var a5 = Number.parseFloat($(".a5").val());
		var a6 = Number.parseFloat($(".a6").val());
		var a7 = Number.parseFloat($(".a7").val());
		var a8 = Number.parseFloat($(".a8").val());
		var str = {
			'electric_basic': a0,
			'electric_j': a1,
			'electric_f': a2,
			'electric_p': a3,
			'electric_g': a4,
			'workTime_j': a5,
			'workTime_f': a6,
			'workTime_p': a7,
			'workTime_g': a8
		};
		var newStr = JSON.stringify(str);
		$.ajax({
			url: domainName + '/console/ec_BasicElectric/',
			type: 'GET', //GET
			async: true, //或false,是否异步
			timeout: 5000, //超时时间    //返回的数据格式：json/xml/html/script/jsonp/text
			data: {
				'flow_num': flow_num,
				'data': newStr
			},
			dataType: "json",
			success: function(data) {
				window.location.href = 'month_input.html?flow_num=' + flow_num + '&workType=' + last_workType + '&power=' + power + '';
				console.log(data);

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