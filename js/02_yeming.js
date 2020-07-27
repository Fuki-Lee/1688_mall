var i = 0; //移入后确定位置
var j = 0; //点击后停留
$(".header1>div").click(function() {
	$(".header1>.line-header").eq($(this).index()).css("color", "rgb(117, 92, 247)").siblings("div").css("color", "#222");
	j = $(this).index() * 120 + 32;
	console.log("点击");
})
$(".header1>.line-header").mouseover(function() {
	$(".header1>.line-header").eq($(this).index()).css("color", "rgb(117, 92, 247)").siblings("div").css("color", "#222");
	console.log($(this).index());
	console.log("移入");
	i = 0;
	i = 32 + $(this).index() * 120;
	$(".header1>.line-hover").css("left", i);
})
$(".header1>.line-header").mouseout(function() {
	$(".header1>.line-header").eq($(this).index()).css("color", "rgb(117, 92, 247)").siblings("div").css("color", "#222");
	console.log($(this).index());
	console.log("移除");
	i = i - $(this).index() * 120;
	$(".header1>.line-hover").css("left", j);
})
/* 商品页面 导航栏 切换后 移入移除边框变色*/

$(".bottom").mousemove(function() {
	console.log("查询：" + $(this).index());

	ding = $(this).index() - 2;

	$(".bottom:eq(" + ding + ")>.bottom-new").mouseover(function() {

		$(".bottom:eq(" + ding + ")>.bottom-new").css("border", "");

		$(".bottom:eq(" + ding + ")>.bottom-new").eq($(this).index() - 1).css("border", "1px solid red");
	})
	$(".bottom:eq(" + ding + ")>.bottom-new").mouseout(function() {
		console.log($(this).index());
		$(".bottom:eq(" + ding + ")>.bottom-new").css("border", "");

	})

})
/*   	console.log($(".bottom:eq(0)>.bottom-new").index())
          		$(".bottom:eq(0)>.bottom-new").mouseover(function() {
				
				$(".bottom:eq(0)>.bottom-new").css("border", "");
			
				$(".bottom:eq(0)>.bottom-new").eq($(this).index()-1).css("border", "1px solid red");
                })
			$(".bottom:eq(0)>.bottom-new").mouseout(function() {
				console.log($(this).index());
				$(".bottom:eq(0)>.bottom-new").css("border", "");
		
                })
			
				$(".bottom:eq(1)>.bottom-new").mouseover(function() {
				
				$(".bottom:eq(1)>.bottom-new").css("border", "");
			
				$(".bottom:eq(1)>.bottom-new").eq($(this).index()-1).css("border", "1px solid red");
                })
			$(".bottom:eq(1)>.bottom-new").mouseout(function() {
				console.log($(this).index());
				$(".bottom:eq(1)>.bottom-new").css("border", "");
		
                })*/




/*$(".bottom>.bottom-new").mouseover(function() {
	console.log($(this).index());
	$(".bottom>.bottom-new").css("border", "");
/*	$(".bottom>.bottom-new>.bottom-show").eq($(this).index()).css("border", "1px solid red").siblings(".bottom>.bottom-new>.bottom-show").css("border", "");*/
/*	$(".bottom>.bottom-new").eq($(this).index()-1).css("border", "1px solid red");
                })
			$(".bottom>.bottom-new").mouseout(function() {
				console.log($(this).index());
				$(".bottom>.bottom-new").css("border", "");
		
                })
*/
$(".bottom1-bottom>div>ul>li").mouseover(function() {
	$(".bottom1>.bottom1-bottom>div>ul>li>div").css("border", "")
	$(".bottom1>.bottom1-bottom>div>ul>li>div").eq($(this).index()).css("border", "1px solid red")
	$(".bottom1>.bottom1-bottom>div>ul>li>div>.titl-font").eq($(this).index()).css("display", "none");
	$(".bottom1>.bottom1-bottom>div>ul>li>div>.tit2-font").eq($(this).index()).css("display", "block");
	/*  $(".bottom1>.bottom1-bottom>div>ul>li>div").eq($(this).index()).css("border", "1px solid red").siblings(".bottom1-bottom>div>ul>li>div").css("border", "");*/
})

$(".bottom1-bottom>div>ul>li").mouseout(function() {
	$(".bottom1>.bottom1-bottom>div>ul>li>div").css("border", "")

	$(".bottom1>.bottom1-bottom>div>ul>li>div>.titl-font").eq($(this).index()).css("display", "block");
	$(".bottom1>.bottom1-bottom>div>ul>li>div>.tit2-font").eq($(this).index()).css("display", "none");
	/*  $(".bottom1>.bottom1-bottom>div>ul>li>div").eq($(this).index()).css("border", "1px solid red").siblings(".bottom1-bottom>div>ul>li>div").css("border", "");*/
})
/*导航栏切换商品信息*/
$(".header1>div").eq(1).click(function() {
	$(".bottom1").css("display", "none");
	$(".bottom").css("display", "none");
	$(".bottom").eq(0).css("display", "block");
})
$(".header1>div").eq(2).click(function() {
	$(".bottom1").css("display", "none");
	$(".bottom").css("display", "none");
	$(".bottom").eq(1).css("display", "block");
})
$(".header1>div").eq(3).click(function() {
	$(".bottom1").css("display", "none");
	$(".bottom").css("display", "none");
	$(".bottom").eq(2).css("display", "block");
})
$(".header1>div").eq(4).click(function() {
	$(".bottom1").css("display", "none");
	$(".bottom").css("display", "none");
	$(".bottom").eq(3).css("display", "block");
})
$(".header1>div").eq(5).click(function() {
	$(".bottom1").css("display", "none");
	$(".bottom").css("display", "none");
	$(".bottom").eq(4).css("display", "block");
})
$(".header1>div").eq(6).click(function() {
	$(".bottom1").css("display", "none");
	$(".bottom").css("display", "none");
	$(".bottom").eq(5).css("display", "block");
})
$(".header1>div").eq(7).click(function() {
	$(".bottom1").css("display", "none");
	$(".bottom").css("display", "none");
	$(".bottom").eq(6).css("display", "block");
})
$(".header1>div").eq(8).click(function() {
	$(".bottom1").css("display", "none");
	$(".bottom").css("display", "none");
	$(".bottom").eq(7).css("display", "block");
})
$(".header1>div").eq(9).click(function() {
	$(".bottom1").css("display", "none");
	$(".bottom").css("display", "none");
	$(".bottom").eq(8).css("display", "block");
})

$(".header1>div").eq(0).click(function() {
	$(".bottom").css("display", "none");
	$(".bottom1").css("display", "block");
})
//			测试ul的固定定位后的位置
$(window).scroll(function(event) {
	console.log($(document).scrollTop());

})

//滚轮事件
$(window).scroll(function() {
	//				console.log($(window).scrollTop());
	//				让ul固定
	if ($(window).scrollTop() > 180) {
		$(".header1").css({
			"position": "fixed",
			"top": "0px",
			"left": 0,
			"right": 0,
			"margin": "auto"
		})
	} else {
		$(".header1").css({
			"position": "absolute",
			"top": "180px",
			"left": 0,
			"right": 0,
			"margin": "auto"
		})
	}
	//				让回到顶部出现
	/*if($(window).scrollTop()>1340){
		$("ul>li").eq(5).show();
	}else{
		$("ul>li").eq(5).hide();
	}*/
})
