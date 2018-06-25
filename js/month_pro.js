$(document).ready(function() {
	function getUrlParam(name) { //a标签跳转获取参数
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return(r[2]);
		return null;
	}
	var flow_num = getUrlParam('flow_num');
	var workType=getUrlParam('workType');
	var power=getUrlParam('power');
	$('#myTable tbody tr td input').focus(function(){
		$(this).val('');
	});
	$("#submit").click(function() {
		var trs=$("#tb tbody").find("tr");
		var list=[];
		trs.each(function(k,el){
			var values=[];
			$(el).find('input').each(function(k2,el2){
				values+=$(el2).val()+"_"
			});
			list.push(values);
		})
		console.log(list);
//		var workType =$("#selectId").val();
		$.ajax({
			url: domainName + '/console/BasicWorkMonth/',
			type: 'GET', //GET
			async: true, //或false,是否异步
			timeout: 5000, //超时时间    //返回的数据格式：json/xml/$("#listResult ul")/script/jsonp/text
			data: {'flow_num':flow_num,'workType':workType,'data':String(list)},
			success: function(data) {
				window.location.href='pro_math.html?flow_num='+flow_num+'&workType='+workType+'&power='+power+'';
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