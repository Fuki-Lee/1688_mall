$(".stmc_left_ul>li").mouseover(function() {
	$(this).children().css("cursor", "pointer");
})
$(".stmc_right_box_img>img").mouseover(function() {
	$(this).css("cursor", "pointer");
});
// section_top 选项卡切换
var st_ul_index = 0;
$(".s_t_menu_center").each(function() {
	$(this).attr("ul_index", st_ul_index);
	st_ul_index++;
});
$(".s_t_menu_center").hide();
$(".stml_ul>li").hover(function() {
	var index = $(this).index();
	if (index >= 9) {
		$(this).children().eq(0).attr("src", "img/03_section_top_left_list/03_s_t_l_ul_0" + (index + 1) + ".png");
	}
	$(this).children().eq(0).attr("src", "img/03_section_top_left_list/03_s_t_l_ul_00" + (index + 1) + ".png");
	$(".s_t_menu_center[ul_index=" + index + "]").show();
	$(".s_t_menu_center").not(".s_t_menu_center[ul_index=" + index + "]").hide();
}, function() {
	var index = $(this).index();
	if (index >= 9) {
		$(this).children().eq(0).attr("src", "img/03_section_top_left_list/03_s_t_l_ul_1" + (index + 1) + ".png");
	}
	$(".s_t_menu_center[ul_index=" + index + "]").hide();
	$(this).children().eq(0).attr("src", "img/03_section_top_left_list/03_s_t_l_ul_10" + (index + 1) + ".png");
});
$(".s_t_menu_center").mouseover(function() {
	$(this).show();
});
$(".s_t_menu_center").mouseout(function() {
	$(this).hide();
})
