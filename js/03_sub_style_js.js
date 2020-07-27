// footer 移入效果
$(".f_t_list_box>ul>li:gt(0)").hover(
	function() {
		$(this).css("cursor", "pointer");
	},
	function() {
		$(this).css("cursor", "normal");
	});
