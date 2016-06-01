(function($){
	var index = 0;
	var imgs = $("<img src='img/drawing-top.png' alt='' />");
	$(".content .swiperInner").append(imgs);
	$(".content .swiper .bar span").eq(index).addClass("spbg2");
	var timer = 0;
	function re(){
		timer = setInterval(function(){
			index++;
			var imgwidth = $(".content .swiper").width();
			if(index == 4){
				index=1;
				$(".content .swiperInner").css({
					left:0,
				})
			}
			if(index == 3){
				$(".content .swiper .bar span").eq(0).addClass("spbg2");
				$(".content .swiper .bar span").eq(2).removeClass("spbg2");
			}
			$(".content .swiperInner").stop().animate({
				left: -index*imgwidth,
			})
			$(".content .swiper .bar span").eq(index).addClass("spbg2").siblings().removeClass("spbg2").addClass("spbg1");
		},1000)
	}
	re();
	$(".content .swiper").hover(function(){
		clearInterval(timer);
	},function(){
		re();
	})
	var minli = 0;
	function rnd(min,max){
			return parseInt(Math.random()*(max-min)+min);
		}
	var bool = false;
	for(var i=1;i<13;i++){
		var x = 'img/Drawing-' + i + '.png';
		var listimg = $("<img/>");
		listimg.attr("src",x);
		if(i>=12){
			bool = true;
		}
	}
	function pubuliu(){
		if(bool){
			for(var j=0;j<12;j++){
				minli = $(".content .coninner li").first();
				for(var i=0;i < $(".content .coninner li").size();i++){
					if(minli.height() > $(".content .coninner li").eq(i).height()){
						minli = $(".content .coninner li").eq(i);
					}
				}
				var divimg = $("<div class='divimg'></div>");
				var divmask = $("<div class='divmask'></div");
				var seo = $("<img class='seo'/>");
				seo.attr("src","img/Drawing-seo.png")
				var liimg = "<img class='datu' src='img/Drawing-" + rnd(1,13) + ".png' alt='' />";
				divimg.append(liimg);
				divmask.append(seo);
				divimg.append(divmask);
				$(minli).append(divimg);
				minli = $(".content .coninner li").first();
			}
		}
	}
	pubuliu();
	window.onscroll = function(){
		if($(".content .coninner ul").height()>=10000){
			bool = false;
		}else{
			if(minli.get(0).getBoundingClientRect().bottom <= document.documentElement.clientHeight){
				pubuliu();
			}
		}
	}
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
}(jQuery))
