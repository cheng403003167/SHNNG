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
		index = 0;
	})
	var arr = [];
	var tu = $(".content .coninner .tu");
	var index = 0;
	function mousewheel(element){
		element.onmousewheel = handle;
		if(window.addEventListener){
			element.addEventListener('DOMMouseScroll',handle,false);
		}
		function handle(e){
			arr = [];
			for(var i=0;i<tu.length;i++){
				arr.push($(".content .coninner .tu").eq(i).position().top);
			}
			var e = e || wimdow.event;
			if(e.wheelDelta<-100||e.detail>100){
				down();
			}else{
				up();
			}
			e.preventDefault();
		}
	}
	var as = true;
	function down(){
		if(as){
			as = false;
			if(index>arr.length-1){
				index = arr.length;
				document.body.scrollTop += 10;
				as = true;
			}else{
				$("html,body").stop().animate({"scrollTop":arr[index]},function(){
					as = true;
				});
			}
			$(".content .coninner .tu").eq(index).find("h3,p,img").animate({"opacity":"1"},1500);
			index++;
		}
	}
	function up(){
		if(as){
			as = false;
			index--;
			if(index<0){
				index = -1;
				document.body.scrollTop -= 10;
				as = true;
			}else if(index>arr.length-1){
				index = arr.length;
				document.body.scrollTop -= 10;
				as = true;
			}else{
				$("html,body").stop().animate({"scrollTop":arr[index]},function(){
					as = true;
				});
			}
			$(".content .coninner .tu").eq(index).find("h3,p,img").animate({"opacity":"1"},1500);
			
		}
	}
	mousewheel($('html,body').get(0));
}(jQuery))
