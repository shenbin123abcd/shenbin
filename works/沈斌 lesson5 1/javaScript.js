window.onload=function(){
	var v=document.getElementById("text");
	var b=document.getElementById("button");
	b.onclick=function(){
		var value=v.value;
			if(value>=90 && value<=100){
				alert("一等生");
			}else if(value<90 &&value>=80){
				alert("二等生");
			}else if(value<80 &&value>=70){
				alert("三等生");
			}else if(value<70 && value>=60){
				alert("四等生");
			}else if(value<60 && v>=50){
				alert("五等生");
			}else if(value<50 && value>=40){
				alert("六等生");
			}else if(value<40 && value>=30){
				alert("七等生");
			}else if(value<30 && value>=20){
				alert("八等生");
			}else if(value<20 && value>=10){
				alert("九等生");
			}else{
				alert("十等生");
			}
		}
	}
