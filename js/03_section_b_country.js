// 国家馆列表样式
$("#country_left_ul>li").eq(0).css({
	"background": "url(img/03_section_country_04.png)",
	"color": "white",
	"background-size": "cover",
	"background-repeat": "no-repeat"
});
$("#country_left_ul>li").mouseover(function() {
	$(this).css({
			"background": "url(img/03_section_country_04.png)",
			"color": "white",
			"background-size": "cover",
			"background-repeat": "no-repeat"
		})
		.siblings().css({
			"background": "none",
			"color": "black"
		});
});
// 默认出现
$(".country_right_ul").hide();
$(".country_right_ul").eq(0).show();
var cr_ul_index = 0;
// 给每个选项卡添加 序号属性
$(".country_right_ul").each(function() {
	$(this).attr("cr_ul_index", cr_ul_index);
	cr_ul_index++;
});
$("#country_left_ul>li").mouseover(function() {
	var index = $(this).index();
	console.log(index);
	$(".country_right_ul").not("country_right_ul[cr_ul_index=" + index + "]").hide();
	$(".country_right_ul[cr_ul_index=" + index + "]").show();
});
