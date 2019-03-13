function showSun(){
	var tl = new TimelineMax({repeat:0});
	$(".moon").each(function(index, element){
		  tl.to(element, 1, {x:200, opacity:1})
	})
		$(".moon").each(function(index, element){
		  tl.to(element, 1, {x:400, opacity:0, ease:Power2.easeIn}, "+=1")
		   /* .to(element, 1, {x:400, opacity:0, ease:Power2.easeIn}, "+=1")*/
	})
	$(".sun").each(function(index, element){
		  tl.to(element, 1, {x:200, opacity:1})
	})
}

function showMoon(){
	var tl = new TimelineMax({repeat:0});
			$(".moon").each(function(index, element){
		  tl.to(element, 1, {x:400, opacity:0, ease:Power2.easeIn}, "+=1")
		   /* .to(element, 1, {x:400, opacity:0, ease:Power2.easeIn}, "+=1")*/
	})
	$(".sun").each(function(index, element){
		  tl.to(element, 1, {x:200, opacity:1})
	})
		$(".sun").each(function(index, element){
		  tl.to(element, 1, {x:400, opacity:0, ease:Power2.easeIn}, "+=1")
		   /* .to(element, 1, {x:400, opacity:0, ease:Power2.easeIn}, "+=1")*/
	})
	$(".moon").each(function(index, element){
		  tl.to(element, 1, {x:200, opacity:1})
	})
}

function checkTime(){
	var date = new Date();
	var hour = date.getHours();
      if (hour => 19 ){
      	showMoon();
      }
      else if (hour =>7) {
		showSun();
       }
    }