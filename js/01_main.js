window.onload = function() {
	$(".check>ul>.btn").hide();
	$(".check>ul>.input").hide();
	$(".checkbox>ul>li").click(function() {
		$(this).toggleClass("ff6600")
		$(this).children("span").toggleClass("icon-xuanzekuang xuanzekuang");
		$(this).children("span").toggleClass("icon-xuanzekuanghou xuanzekuanghou");
	});
	$(".check>ul>li:lt(4)").click(function() {
		$(this).css({
			"background": "#FF6600",
			"color": "#FFFFFF"
		}).siblings().css({
			"background": "#f5f5f5",
			"color": "#888888"
		});
	});
	$(".table li").click(function() {
		var name = $(this).html();
		$(".table").parent().children("a").html(name);

	});
	$(".check>ul>li>ul>li").click(function() {
		var a = $(this).html();
		var b = $(this).parent().parent().children("a").html();
		$(this).html(b);
		$(this).parent().parent().children("a").html(a);
	});
	$(".check>ul>li>input").focus(function() {
		$(this).parent().children("span").css("display", "inline");
		$(this).parent().css("background", "#ffffff")
	})
	$(".check>ul>li>input").blur(function() {
		$(this).parent().children("span").css("display", "none");
		$(this).parent().css("background", "#f5f5f5")
	});
	$(window).scroll(function() {
		var top = $(window).scrollTop();
		if (top > 290) {
			$(".check").css({
				"position": "fixed",
				"top": "0px"
			});
			$(".check>ul>li").eq(5).hide();
			$(".check>ul>.btn").show();
			$(".check>ul>.input").show();
			$(".show").css("margin-top", "40px");
			$(".check").css("z-index", "9")
		}
		if (top <= 290) {
			$(".check").css({
				"position": "static"
			});
			$(".check>ul>li").eq(5).show();
			$(".check>ul>.btn").hide();
			$(".check>ul>.input").hide();
			$(".show").css("margin-top", "0px")
		}
	});
	var i = 1;
	$(".footer_nav>.click").click(function() {
		$(this).css("background", "#00aaff").siblings("a").css("background", "#FFFFFF");
		$(this).css("color", "#ffffff").siblings("a").css("color", "#888888");
		$('html,body').animate({
			scrollTop: '291px'
		}, 200);
		i = $(this).index();
	});
	$(".footer_nav>a").click(function() {
		$('html,body').animate({
			scrollTop: '291px'
		}, 200);
	});
	$(".footer_nav>.previousPage").click(function() {
		i--;
		if (i >= 1) {
			$(".footer_nav>a").eq(i).css("background", "#00aaff").siblings("a").css("background", "#FFFFFF");
			$(".footer_nav>a").eq(i).css("color", "#ffffff").siblings("a").css("color", "#888888");
		} else {
			$(".footer_nav>a").eq(1).css("background", "#00aaff").siblings("a").css("background", "#FFFFFF");
			$(".footer_nav>a").eq(1).css("color", "#ffffff").siblings("a").css("color", "#888888");
			i = 1;
		}
	});
	$(".footer_nav>.nextPage").click(function() {
		i++;
		if (i <= 7) {
			$(".footer_nav>a").eq(i).css("background", "#00aaff").siblings("a").css("background", "#FFFFFF");
			$(".footer_nav>a").eq(i).css("color", "#ffffff").siblings("a").css("color", "#888888");
		} else {
			$(".footer_nav>a").eq(7).css("background", "#00aaff").siblings("a").css("background", "#FFFFFF");
			$(".footer_nav>a").eq(7).css("color", "#ffffff").siblings("a").css("color", "#888888");
			i = 7;
		}
	});
	$(".tiaoxingdonghua>div").mouseover(function() {
		var j = $(this).index();
		for (var k = 0; k <= j; k++) {
			$(".tiaoxingdonghua>div").eq(k).css("background", "#ff6600");
		}
	});
	$(".tiaoxingdonghua").mouseout(function() {
		$(".tiaoxingdonghua>div").css("background", "#f5f5f5")
	});
	$(".show>ul>li").click(function() {
		window.location.href = "../page/卡扣商品.html"
	});
}
