$(".react_ul>li").eq(0).attr("flag", true).css({
	"background": "white"
}).children().css("color", "black");
// $(".react_ul>li:gt(0)").css({"top":"-10px","poistion":"relative"});
// 窗口滚动事件
$(window).scroll(function() {
	if ($(window).scrollTop() < 100) {
		$(".react_box").hide().css("z-index", "77");
	} else {
		$(".react_box").show().css("z-index", "77");
	}
	// console.log($(window).scrollTop());
	if ($(window).scrollTop() < 1909) {
		$(".react_ul>li").eq(0).attr("flag", true).css({
			"background": "white"
		}).children().css("color", "black");
		$(".react_ul>li").eq(0).siblings().not("#react_top").removeAttr("flag").css({
			"background": "black"
		}).children().css("color", "white");
	} else if ($(window).scrollTop() < 3560) {
		$(".react_ul>li").eq(1).attr("flag", true).css({
			"background": "white"
		}).children().css("color", "black");
		$(".react_ul>li").eq(1).siblings().not("#react_top").removeAttr("flag").css({
			"background": "black"
		}).children().css("color", "white");
	} else {
		$(".react_ul>li").eq(2).attr("flag", true).css({
			"background": "white"
		}).children().css("color", "black");
		$(".react_ul>li").eq(2).siblings().not("#react_top").removeAttr("flag").css({
			"background": "black"
		}).children().css("color", "white");
	}
});

// 移入事件
$(".react_ul>li").hover(function() {
	$(this).css({
		"background": "white"
	}).children().css("color", "black");
}, function() {
	if ($(this).attr("flag")) {
		$(this).css({
			"background": "white"
		}).children().css("color", "black");
	} else {
		$(this).css({
			"background": "black"
		}).children().css("color", "white");
	}
})

$("#react_top").hover(function() {
	$(this).css({
		"background": "white"
	}).children().css("background-image", "url(img/03_react_ul_02.png)");
}, function() {
	$(this).css({
		"background": "black"
	}).children().css("background-image", "url(img/03_react_ul_01.png)");
})


$(".react_pencil_box").hover(function() {
	$(this).css({
		"background": "black url(img/03_react_ul_11.png) no-repeat 12px 14px"
	}).children().css("color", "white");
}, function() {
	$(this).css({
		"background": "white url(img/03_react_ul_12.png) no-repeat 12px 14px"
	}).children().css("color", "black");
})

// 点击事件
$(".react_ul>li").not("#react_top").click(function() {
	var index = $(this).index();
	var Top = $('.scroll_index').eq(index).offset().top;
	$('body,html').animate({
		'scrollTop': Top
	}, 1000);
	// attr("flag",true)
	$(this).attr("flag", true).css({
		"background": "white"
	}).children().css("color", "black");
	$(this).siblings().not("#react_top").removeAttr("flag").css({
		"background": "black"
	}).children().css("color", "white");
});

$("#react_top").click(function() {
	$('body,html').animate({
		'scrollTop': 0
	}, 1000);
});
