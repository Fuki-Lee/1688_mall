var ul = document.getElementsByClassName("lunbo-show-ul")[0];
var btn_left = document.getElementById("lunbo-left");
var btn_right = document.getElementById("lunbo-right");
var show = document.getElementById("show");
var i = 0;
var timer;

/*鼠标移入出按钮*/
btn_left.style.display = "none";
btn_right.style.display = "none";
$(".lunbo").mouseover(function() {
	btn_left.style.display = "block";
	btn_right.style.display = "block";

})
$(".lunbo").mouseout(function() {
	btn_left.style.display = "none";
	btn_right.style.display = "none";

})

function go() {
	i++;
	if (i == 5) {
		i = 0;
	}
	var j = -100 * i + "%";
	//				移动一张图片宽度
	$(".lunbo-show>ul").animate({
		left: j
	}, 2000);
	/*	ul.style.left = -100*i+"%";*/
	$(".lunbo-land>ul>li").eq(i).css("background-color", "#000000").siblings(".lunbo-land>ul>li").css("background-color",
		"white");
}
timer = setInterval("go()", 2000);

go();
btn_left.onmouseover = function() {
	clearInterval(timer);

}
btn_left.onmouseout = function() {
	timer = setInterval("go()", 2000);
}
//			左右按钮功能
btn_left.onclick = function() {
	i--;
	if (i == -1) {
		i = 4;
	}
	//				ul.style.left = -100*i+"%";
	var j = -100 * i + "%";
	//				移动一张图片宽度
	$(".lunbo-show>ul").animate({
		left: j
	}, 2000);
	$(".lunbo-land>ul>li").eq(i).css("background-color", "#000000").siblings(".lunbo-land>ul>li").css("background-color",
		"white");
}
btn_right.onclick = function() {
	i++;
	if (i == 5) {
		i = 0;
	}
	/*ul.style.left = -100*i+"%";*/
	var j = -100 * i + "%";
	//				移动一张图片宽度
	$(".lunbo-show>ul").animate({
		left: j
	}, 2000);
	$(".lunbo-land>ul>li").eq(i).css("background-color", "#000000").siblings(".lunbo-land>ul>li").css("background-color",
		"white");
}

$(".lunbo-land>ul>li").click(function() {
	console.log("456");
	$(".lunbo-land>ul>li").eq($(this).index()).css("background-color", "#000000").siblings(".lunbo-land>ul>li").css(
		"background-color", "white");
	var i = -$(this).index() * 100 + "%";
	console.log(i);
	$(".lunbo-show>ul").animate({
		left: i
	}, 2000);

})
