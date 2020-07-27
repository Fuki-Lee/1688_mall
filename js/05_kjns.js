/* 手动给金牌供应商换图 */
for(var i=0;i<10;i++){
	$("#li_jpgys>ul>li").eq(i).children("img").attr("src","../img/05_kjns_jpgys_"+i+".webp")
}

/* 自动复制小li与变化后的大li */
for(var i=0;i<9;i++){
	$(".lis_change").eq(0).clone(true).insertAfter($(".lis_change").eq(0));
}
for(var i=0;i<7;i++){
	$("#kjns_aftermid>ul>li").eq(0).clone(true).insertAfter($("#kjns_aftermid>ul>li").eq(0));
}
/* 自动给所有其余li切换图片 */
for(var i=0;i<8;i++){
	var k=i+1;
	$("#kjns_aftermid>ul>li").eq(i).children("ul").children("li").children("img").attr("src","../img/05_f_"+k+".webp")
}
/* 自动给所有标题改名 */
var namestr=["金牌供应商","女装","男装","内衣","母婴童玩","数码家电","日用百货","鞋包配饰","美妆个护"]
for(var i=0;i<9;i++){
	$(".uli_title").eq(i).html(namestr[i]);
}
/* 公共右部点击回顶事件 */
$(".huiding_05").click(function(){
	$("body,html").animate({"scrollTop":0},300);
})
$(".huiding_top_05").click(function(){
	$("body,html").animate({"scrollTop":0},300);
})
/* 监听滚轮高度 */
/* $(document).ready(function(){
	$(document).scroll(function(){
		var res=$(this).scrollTop();
		console.log(res);
	})
}) */
/* 点击左部li滚到相应位置 */
$("#leftfloat_05>ul>li").click(function(){
	var i=$(this).index();
	var j=[771,1543,2390,3251,4111,4959,5819,6679,7539];
	$("body,html").animate({"scrollTop":j[i]},0);
})