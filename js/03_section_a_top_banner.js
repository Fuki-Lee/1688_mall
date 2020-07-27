// 轮播图动画

// index [0-5]
var s_banner_i = 0;
// width: 1519px
var li_width = 1519;
// 轮播图宽度
$('.s_banner_ul>li').eq(s_banner_i).children().eq(1).fadeIn(300).animate({
	'left': '0px'
}, 200);
$('.s_banner_ul>li').eq(s_banner_i).children().eq(2).fadeIn(300).animate({
	'left': '0px'
}, 200);
$(".s_banner_pointer_ul>li").eq(s_banner_i).css("background", "#f60").siblings().css("background", "rgba(0,0,0,0.5)");
var pre_s_banner_index = 0;
// 清除上一张（索引）对应的li下的图片
function clearPre_img() {
	$('.s_banner_ul>li').eq(pre_s_banner_index).children().eq(1).css({
		'left': '-50px',
		'display': 'none'
	});
	$('.s_banner_ul>li').eq(pre_s_banner_index).children().eq(2).css({
		'left': '50px',
		'display': 'none'
	});
}
// 1. 轮播图效果
// =====================1. 封装定时器===========================
var s_banner_timer = setInterval("banner_loop()", 2000);

// 封装定时器中每次的执行事件
function banner_loop() {
	s_banner_i++;
	if (s_banner_i == 6) {
		s_banner_i = 0;
		$('.s_banner_ul').animate({
			'left': -li_width * s_banner_i + 'px'
		}, 1000);
	}
	// 轮播图 滚动效果
	// 1. 先移动到轮播图 li 位置
	$('.s_banner_ul').animate({
		'left': -li_width * s_banner_i + 'px'
	}, 1000);
	// 2. 设置延迟执行 li 中的 另外两张图片的动画效果
	setTimeout(function() {
		// 2.1 移动效果
		$('.s_banner_ul>li').eq(s_banner_i).children().eq(1).fadeIn(300).animate({
			"left": "0px"
		}, 200);
		$('.s_banner_ul>li').eq(s_banner_i).children().eq(2).fadeIn(300).animate({
			"left": "0px"
		}, 200);
		// 2.2 清除上一张的两张图片的位置
		clearPre_img();
		pre_s_banner_index = s_banner_i;
	}, 1000);
	$(".s_banner_pointer_ul>li").eq(s_banner_i).css("background", "#f60").siblings().css("background", "rgba(0,0,0,0.5)");
}
// =======2. 按钮移入以及事件点击事件=======
// 鼠标移入暂停轮播图滚动
$('.s_banner_ul').hover(function() {
	clearInterval(s_banner_timer);
	$('.s_banner_ul').css("cursor", "pointer");
}, function() {
	s_banner_timer = setInterval("banner_loop()", 2000);
});
$('.section_banner_box>span').hover(function() {
	clearInterval(s_banner_timer);
	$('.s_banner_ul').css("cursor", "pointer");
}, function() {
	s_banner_timer = setInterval("banner_loop()", 2000);
});

// =======3. button 点击事件=======
// 3.1 左按钮
$(".s_btn_left").click(function() {
	s_banner_i--;
	if (s_banner_i == -1) {
		s_banner_i = 5;
		$('.s_banner_ul').css({
			'left': -li_width * s_banner_i + 'px'
		});
	}
	$('.s_banner_ul').animate({
		'left': -li_width * s_banner_i + 'px'
	}, 1000);
	setTimeout(function() {
		$('.s_banner_ul>li').eq(s_banner_i).children().eq(1).fadeIn(300).animate({
			"left": "0px"
		}, 200);
		$('.s_banner_ul>li').eq(s_banner_i).children().eq(2).fadeIn(300).animate({
			"left": "0px"
		}, 200);
		clearPre_img();
		pre_s_banner_index = s_banner_i;
	}, 1000);
	$(".s_banner_pointer_ul>li").eq(s_banner_i).css("background", "#f60").siblings().css("background", "rgba(0,0,0,0.5)");
});
// 3.2 右边按钮
// 因为右边执行的内容与封装好的移动事件效果一致，都是i++后进行动画效果。所以直接代码复用
$(".s_btn_right").click(function() {
	banner_loop();
});

// =======4. 坐标点 移入、点击事件=======
// 4.1 坐标点移入事件。
$(".s_banner_pointer_ul>li").hover(function() {
	clearInterval(s_banner_timer);
	$('.s_banner_ul').css("cursor", "pointer");
}, function() {
	s_banner_timer = setInterval("banner_loop()", 2000);
});
// 4.2 坐标点 点击事件
$(".s_banner_pointer_ul>li").click(function() {
	s_banner_i = $(this).index();
	$('.s_banner_ul').animate({
		'left': -li_width * s_banner_i + 'px'
	}, 1000);
	setTimeout(function() {
		$('.s_banner_ul>li').eq(s_banner_i).children().eq(1).fadeIn(300).animate({
			"left": "0px"
		}, 200);
		$('.s_banner_ul>li').eq(s_banner_i).children().eq(2).fadeIn(300).animate({
			"left": "0px"
		}, 200);
		clearPre_img();
		pre_s_banner_index = s_banner_i;
	}, 1000);
	$(".s_banner_pointer_ul>li").eq(s_banner_i).css("background", "#f60").siblings().css("background", "rgba(0,0,0,0.5)");
});
