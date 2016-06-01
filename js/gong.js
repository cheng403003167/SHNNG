(function($){
	$(document).ready(function(){
		var index = 0;
		$("header .meiu").on("click",function(){
			if($("header .midd").height()==467){
				$("header .midd").animate({
					height:66,
				})
				$("header").animate({
					height:66,
				})
			}else{
				$("header .midd").animate({
					height:467,
				})
				$("header").animate({
					height:467,
				})
			}
		})
		$(window).resize(function(){
			if($(window).width()> 900){
					$("header").removeClass("buju2");
					$("header .midd").height("66px");
					$("header").height("66px");
				}
			})
	})
}(jQuery))




