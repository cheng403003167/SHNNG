$(window).resize(function(){
	ra();
})
ra();
function ra(){
	if($(window).width()<900){
		$(".content .coninner ul li .kuaihui").css("display","none");
		$(".content .coninner ul li:eq(1) a .contentDivText").remove();
		$(".content .coninner ul li:eq(1) a").append(t);
	}else{
		$(".content .coninner ul li:eq(1) a").prepend(t);
		$(".content .coninner ul li .kuaihui").css("display","block");
	}
}
var t = $(".content .coninner ul li:eq(1) a .contentDivText");

$(".content li").first().mouseover(function(){
	$(this).children("div").removeClass("kuaihui").addClass("kuaiyell");
	$(this).find("img").attr("src","img/home-23.png");
	$(this).find("a").css("color","#000");
}).mouseout(function(){
	$(this).children("div").removeClass("kuaiyell").addClass("kuaihui");
	$(this).find("img").attr("src","img/home-23-2.png");
	$(this).find("a").css("color","#b4b4b4");
})
$(".content li").eq(1).mouseover(function(){
	$(this).children("div").removeClass("kuaihui").addClass("kuaiyell2");
	$(this).find("img").attr("src","img/home-24-2.png");
	$(this).find("a").css("color","#000");
}).mouseout(function(){
	$(this).children("div").removeClass("kuaiyell").addClass("kuaihui");
	$(this).find("img").attr("src","img/home-24.png");
	$(this).find("a").css("color","#b4b4b4");
})
$(".content li").last().mouseover(function(){
	$(this).children("div").removeClass("kuaihui").addClass("kuaiyell");
	$(this).find("img").attr("src","img/home-25-2.png");
	$(this).find("a").css("color","#000");
}).mouseout(function(){
	$(this).children("div").removeClass("kuaiyell").addClass("kuaihui");
	$(this).find("img").attr("src","img/home-25.png");
	$(this).find("a").css("color","#b4b4b4");
})

