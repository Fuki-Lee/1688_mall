/* 克隆变化DIV模板产生余下22个DIV,并赋值 */
for(var i=0;i<22;i++){
	$(".change_div").eq(0).clone(true).insertAfter($(".change_div").eq(0));
}
/* 给所有DIV进行定值id */
$(".change_div").eq(0).attr("id","change_CB");
$(".change_div").eq(1).attr("id","change_NA");
$(".change_div").eq(2).attr("id","change_WE");
$(".change_div").eq(3).attr("id","change_SA");
$(".change_div").eq(4).attr("id","change_RU");
$(".change_div").eq(5).attr("id","change_SAm");
$(".change_div").eq(6).attr("id","change_ME");
$(".change_div").eq(7).attr("id","change_NVZ1");
$(".change_div").eq(8).attr("id","change_NANZ2");
$(".change_div").eq(9).attr("id","change_NY3");
$(".change_div").eq(10).attr("id","change_YDHW4");
$(".change_div").eq(11).attr("id","change_JJRB5");
$(".change_div").eq(12).attr("id","change_CCWY6");
$(".change_div").eq(13).attr("id","change_SNQJ7");
$(".change_div").eq(14).attr("id","change_JFJS8");
$(".change_div").eq(15).attr("id","change_XFDZ9");
$(".change_div").eq(16).attr("id","change_XBP10");
$(".change_div").eq(17).attr("id","change_MZGF11");
$(".change_div").eq(18).attr("id","change_CWYY12");
$(".change_div").eq(19).attr("id","change_JZ13");
$(".change_div").eq(20).attr("id","change_MYTW14");
$(".change_div").eq(21).attr("id","change_QMP15");
$(".change_div").eq(22).attr("id","change_FZ16");

/* 定义地点栏点击事件 */

/* $("#locations_list>ul>li").click(function(){
	 $(this).children("span").toggle();
}) */
/* 点击总地址栏li跳转其他ul */
$("#locations_list_all>li").click(function(){
	 var i=$(this).index();
	 $(".ul_ALL").eq(i).toggle();
	 $("#locations_list_all").toggle();
	 $("#change_default").toggle();
	 var j="#change_"+$(this).attr("bcd");
	 $(j).toggle();
})
/* 点击其他ul头li转回总地址栏li */
$(".youcanclick").click(function(){
	 $(this).parent().toggle();
	 $("#locations_list_all").toggle();
	 $("#change_default").toggle();
	 var j="#change_"+$(this).attr("abc"); 
	 $(j).toggle();
})
/* 点击其他ul中的li */
$(".ul_ALL>li").click(function(){
	$(".change_div").css("display","none");
	
	var j="#change_"+$(this).attr("class");
	console.log(j);
	$(j).css("display","block");
})
/* 定义回到顶部 */
$("#huiding").click(function(){
	 $("body,html").animate({"scrollTop":0},300);
})

/* 开始修改变化的DIV群 */
for(var i=0;i<12;i++){
	$("#change_NA>ul>li>img").eq(i).attr("src","../img/05_change_NA_"+i+".webp");
}
for(var i=0;i<12;i++){
	$("#change_WE>ul>li>img").eq(i).attr("src","../img/05_change_WE_"+i+".webp");
}
for(var i=5;i<12;i++){
	$("#change_SA>ul>li").eq(i).css("display","none");
}
for(var i=0;i<5;i++){
	$("#change_SA>ul>li>img").eq(i).attr("src","../img/05_change_SA_"+i+".webp");
}
for(var i=0;i<12;i++){
	$("#change_RU>ul>li>img").eq(i).attr("src","../img/05_change_RU_"+i+".webp");
}
for(var i=0;i<12;i++){
	$("#change_SAm>ul>li>img").eq(i).attr("src","../img/05_change_WE_"+i+".webp");
}
for(var i=0;i<4;i++){
	$("#change_ME>ul>li>img").eq(i).attr("src","../img/05_change_ME_"+i+".webp");
}
for(var i=0;i<12;i++){
	$("#change_NY3>ul>li>img").eq(i).attr("src","../img/05_change_NY3_"+i+".webp");
}
/* 修改各变化DIV首个图片以表明身份 */
for(var i=7;i<23;i++){
	$(".change_div").eq(i).children("ul").children("li").children("img").eq(0).attr("src","../img/05_cd_"+i+".JPG")
}

