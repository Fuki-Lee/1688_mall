

$(function(){
	
	$(".header_Business_info").mouseover(function(){
		$(".binfo_space2").show();
	});
	$(".header_Business_info").mouseout(function(){
		$(".binfo_space2").hide();
	});
	$(".xiala_anniu").click(function(){
		$(".li_yanse").css("height","321.1px");
		$(".xiala_anniu").hide();
		$(".comme_show").css("height","865px");
	});
	
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
