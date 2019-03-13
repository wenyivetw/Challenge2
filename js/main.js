window.onload= function() {


    function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    

    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        if(h == 24){
            animateDay(h,"AM");
        }
        else{
             animateDay(h,"PM");
        }
        h = h - 12;
        session = "PM";
    }
    else{
        if(h==12){
         animateDay(h,"PM");  
       }
        else{
            animateDay(h,"AM");  
        }
        
    }

 //Test Animation
/*    var i;
    for (i =0; i < 1000 ; i++) {
        console.log("Counter: "+i);
        if(i == 500){
           animateDay(13,"PM"); 
        }
        else if(i == 1000){
            animateDay(5,"AM")
        }
             
    }*/


    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    /*checkTime();*/


    }

        showTime();
} 

function animatedDay(index){
    if((1 < index && index <=7) && true){
        console.log("OK");
    }
    console.log("hello0")
}

function animateDay(hour,session){
     if(localStorage.getItem('animatedSun') == null || localStorage.getItem('animatedMoon') == null){
            console.log("Its always false")
            localStorage.setItem('animatedSun',false);
            localStorage.setItem('animatedMoon',false);
        }
    var animatedSun= localStorage.getItem('animatedSun');
    var animatedMoon = localStorage.getItem('animatedMoon');

    if((19 <= hour && hour <= 23) && session =="PM" && animatedMoon =="false" || hour == 24 && animatedMoon =="false" || (1<= hour && hour <=6) && session =="AM" && animatedMoon == "false"){
        console.log("Animate Moon");
        myFunction();
        showMoon();
        localStorage.setItem('animatedMoon',true);
        localStorage.setItem('animatedSun',false);

    }
   else if((7 <= hour && hour <= 11) && session =="AM" && animatedSun =="false" || (12 <= hour && hour <= 18)  && session =="PM" && animatedSun=="false"){
        console.log("Animate Sun");
        myFunction2();
        showSun();
        localStorage.setItem('animatedSun',true);
        localStorage.setItem('animatedMoon',false);
    }


}

function myFunction2() {
  document.getElementById("container").style.backgroundColor = "#fee140";
}
function myFunction() {
  document.getElementById("container2").style.backgroundColor = "#09203f";
}
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
          tl.to(element, 1, {left:10, top: 50, opacity:1})
    })
}
window.onbeforeunload = function (evt){
    localStorage.setItem('animatedSun',false);
    localStorage.setItem('animatedMoon',false);
}