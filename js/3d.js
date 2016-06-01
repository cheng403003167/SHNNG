(function($){
	$(".content .tops a").on("click",function(){
		var timer2 = setInterval(function(){
			var t = $(document).scrollTop() - 100;
			if(t<=0){
				clearInterval(timer2);
				t=0;
			}
			$(document).scrollTop(t);
		},17)
	})
	$(".vibg2").on("click",function(){
		$(this).hide();
		$("video").get(0).controls = "controls";
		$(".vibg1").hide();
		$(".shuoming").hide();
		$("video").get(0).play();
	})
	re();
	function re(){
		if($(window).width()< 900){
				$(".content .minvid .min1").find(".min1left").removeClass("min1left1").addClass("min1left2");
				$(".content .minvid .min1").find(".min1right1").removeClass("min1right1").removeClass("teri").addClass("min1right2");
				$(".content .minvid .min1").eq(1).find(".min1right2").insertAfter($(".content .minvid .min1").eq(1).find(".min1left2"));
				$(".content .minvid .min1").eq(3).find(".min1right2").insertAfter($(".content .minvid .min1").eq(3).find(".min1left2"));
				$(".content .tops").removeClass("tops").addClass("tops2");
			}else if($(window).width()> 900){
				$(".content .minvid .min1").eq(1).find(".min1left2").insertAfter($(".content .minvid .min1").eq(1).find(".min1right2"));
				$(".content .minvid .min1").eq(3).find(".min1left2").insertAfter($(".content .minvid .min1").eq(3).find(".min1right2"));
				$(".content .minvid .min1").find(".min1left").removeClass("min1left2").addClass("min1left1");
				$(".content .minvid .min1").find(".min1right2").addClass("min1right1").removeClass("min1right2");
				$(".content .minvid .min1").eq(1).find(".min1right1").addClass("teri");
				$(".content .minvid .min1").eq(3).find(".min1right1").addClass("teri");
				$(".content .tops2").removeClass("tops2").addClass("tops");
			}
	}
	
	$(window).resize(function(){
			re();
	})
}(jQuery))