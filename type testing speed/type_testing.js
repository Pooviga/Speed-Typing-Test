var str="Typing at a speed of 57 WPM or higher is very good. The key element that helps faster typists is touch typing. Touch typing is a method where you use muscle memory, not your eyes, to find the keys. Although this can take some getting used to, it is much easier to type when you do not have to check to make sure that you have the correct letter or number and your accuracy improves when you can look at the screen to make sure that your words are coming out as planned. Practice through games and repeated typing exercises will train your fingers to recognize the keyboard and progress far beyond your typing speed.You may be exceptionally fast, but speed is often accompanied with a lack of accuracy. In order to improve this part of good typing, you may have to slow down.Whatever stage you are at, you can practice the skills that will help you get faster, develop your accuracy rate.";
document.getElementById('parah').innerHTML=str;
var flag=0;
var boo=null;
var count_correct=0;
var count_wrong=0;
var i=60;
document.getElementById('mycounter').innerHTML="Time ends in : " + i;
var inputEl=document.getElementById('myInput');
inputEl.addEventListener('keydown', (event) => {
	colour_change();
	boo=call_function(event);
	if(boo=="true"){
		if(flag==0)
			onTimer();
		flag=1;
	}

	if(boo=="false"){

	}
	else{
		if(boo=="back"){
		}
		else{
			if(str[document.getElementById("myInput").value.length]==event.key){
				count_correct=count_correct+1;
			}
			else{
				var myAudio = new Audio('sound.wav');
				myAudio.play();
				count_wrong=count_wrong+1;
				event.preventDefault();
			}
		}
	}
	function onTimer() {
		document.getElementById('mycounter').innerHTML ="Time ends in : "+ i;
		i--;
		//console.log(i);
		if (i < 0) {
			document.getElementById('myInput').disabled=true;
			document.getElementById('correct_count').innerHTML="Letters   per   minute : "+count_correct+" lpm";
			document.getElementById('wrong_count').innerHTML="Count   of   wrong   words : "+ count_wrong;
		}
		else {
			setTimeout(onTimer, 1000);
		}
	}
});
function call_function(event){
	if(event.key>=1 && event.key<=9){
		return "true";
	}
	else if(event.key==" "){
		return "true";
	}
	else if(event.keyCode >= 65 && event.keyCode <= 90){
		return "true";
	}
	else if(event.key=="Backspace"){
		return "back";
	}
	else if(event.key=="." || event.key==","){
		return "true";
	}
	else{
		return "false";
	}
}
//console.log(count_correct);
function colour_change(){
	var c_index=document.getElementById("myInput").value.length+1;
	var prefix="<span style=\"color:green\">"+str.substring(0,c_index)+"</span>";
	var mid="<span style=\"color:red\">"+str[c_index]+"</span>";
	var suffix= str.substring(c_index+1,str.length);
	var final_string=prefix+mid+suffix;
	document.getElementById('parah').innerHTML=final_string;
}
