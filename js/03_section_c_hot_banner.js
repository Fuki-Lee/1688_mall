var hot_i = 0;
var timer;
// 1. 给所有轮播图的ul添加 滚动事件的类名
$('.shb_ul_rb_banner_box').each(function() {
	$(this).addClass("hot_banner_loop");
});
// 1. 给pointer的ul添加 滚动事件的类名
$(".shb_ul_rb_pointer_box").each(function() {
	$(this).addClass("hot_banner_pointer");
});

go();

function go() {
	timer = setInterval(function() {
		hot_i++;
		if (hot_i == 3) {
			hot_i = 0;
			$('.hot_banner_loop').css({
				'top': -100 * hot_i + 'px'
			});
		}
		// 所有ul添加相同类名，移入根据this找到ul 清除类名
		$('.hot_banner_loop').animate({
			'top': -100 * hot_i + 'px'
		}, 1000);
		// 获得 所有的 pointer 的 ul
		var pointers = $(".hot_banner_pointer");
		for (var i = 0; i < pointers.length; i++) {
			$(pointers[i]).children().eq(hot_i).css("background", "rgba(0,145,255,0.5)").siblings().css("background",
				"rgba(174,174,174,0.5)");
		}
	}, 1500);
}

$('.shb_ul_rb_banner_box').hover(function() {
	console.log();
	$(this).removeClass("hot_banner_loop");
	$(this).next().removeClass("hot_banner_pointer");
}, function() {
	$(this).addClass("hot_banner_loop");
	$(this).next().addClass("hot_banner_pointer");
});

$(".shb_ul_rb_pointer_box").hover(function() {
	// clearInterval(timer);
	// 替代定时器的方式：清除类名
	$(this).prev().removeClass("hot_banner_loop");
	$(this).removeClass("hot_banner_pointer");
}, function() {
	// 添加 类名
	$(this).prev().addClass("hot_banner_loop");
	$(this).addClass("hot_banner_pointer");
});

$(".shb_ul_rb_pointer_box>li").click(function() {
	hot_i = $(this).index();
	// 移动到pointer指向轮播图下面的li。（pointer与轮播图是同级关系）
	$(this).parent().prev().animate({
		'top': -100 * hot_i + 'px'
	}, 1000);
	$(this).css("background", "rgba(0,145,255,0.5)").siblings().css("background", "rgba(174,174,174,0.5)");
});
