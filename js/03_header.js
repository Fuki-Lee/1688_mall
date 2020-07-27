$(".head_search_box>.h_s_box_right>button").mouseover(function(){
			$(this).css("cursor","pointer");
});
$(".head_top_right>li").not(".head_top_right>li:first").mouseover(function() {
	$(this).css({
		"border-right": "1px solid #dddddd",
		"border-left": "1px solid #dddddd",
		"z-index": "5",
		"border-bottom": "1px solid white"
	});
	$(this).children("a").css({
		"border-right": "none",
		"border-left": "none"
	});
});
$(".head_top_right>li").not(".head_top_right>li:first").mouseout(function() {
	$(this).css({
		"border-right": "none",
		"border-left": "none",
		"z-index": "0",
		"border-bottom": "1px solid rgba(0,0,0,0)"
	});
	$(this).children("a").css({
		"border-right": "1px solid rgba(0,0,0,0)",
		"border-left": "1px solid #dddddd"
	});
});
$(".head_top_right>li:last").mouseover(function() {
	$(this).css({
		"border-right": "1px solid #dddddd",
		"border-left": "1px solid #dddddd",
		"z-index": "5",
		"border-bottom": "1px solid white"
	});
	$(this).children("a").css({
		"border-right": "none",
		"border-left": "none"
	});
});
$(".head_top_right>li:last").children("a").css({
	"border-right": "1px solid rgba(0,0,0,0)",
	"border-right": "1px solid #dddddd"
});
$(".head_top_right>li:last").mouseout(function() {
	$(this).css({
		"border-right": "none",
		"border-left": "none",
		"z-index": "0",
		"border-bottom": "1px solid rgba(0,0,0,0)"
	});
	$(this).children("a").css({
		"border-right": "1px solid rgba(0,0,0,0)",
		"border-right": "1px solid #dddddd"
	});
});


// ====================文字效果==========================
$(".head_top li>a").not(".welcome_ali").mouseover(function() {
	$(this).css({
		"text-decoration": "underline",
		"color": "#f60"
	});
});
$(".head_top li>a").mouseout(function() {
	$(this).css({
		"text-decoration": "none",
		"color": "#555"
	});
});

$(".head_sub_logo>p").mouseover(function() {
	$(this).css({
		"color": "#f60",
		"cursor": "pointer"
	});
});
$(".head_sub_logo>p").mouseout(function() {
	$(this).css({
		"color": "#555"
	});
});
$(".head_list>ul>li>a").mouseover(function() {
	$(this).css({
		"color": "#0088F0"
	});
});
$(".head_list>ul>li>a").mouseout(function() {
	$(this).css({
		"color": "black"
	});
});


$(".head_list_left>li>a").mouseover(function() {
	$(this).css("text-decoration", "none");
});
$(".head_list_right>li>a").mouseover(function() {
	$(this).css("text-decoration", "none");
});

// .head_list_left>li 选中的内容不做显示
$(".head_list_left>li").mouseout(function(){
	if($(this).attr("li_flag")){
		$(this).children().css("color","#0088f0");
	}else{
		$(this).children().css("color","black");
	}
});