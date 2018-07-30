var n = 0;
var min = 5;
var hour = 0;
var zm = "",zs = "",zh = "";
var x = setInterval(function(){
		if (min <-0.99){
			hour -= 1;
			min = 59;
		}
		if (n <0){
			min -= 1;
			n = 59;
		}
		if (hour<10){
			zh = "0"
		}
		else{
			zh = "";
		}
		if (min<10){
				zm = "0"
			}
		else{
			zm = "";
		}
		if (n<10) {
				zs = "0"
			}
		else{
			zs = "";
		}
		document.getElementById("demo").innerHTML = zh +hour +":" +zm +min +":" +zs +n;
		n = n-1;//Truncate this value to zero decimal places
},1000);
document.getElementById("demo").innerHTML = "00:00:00";
