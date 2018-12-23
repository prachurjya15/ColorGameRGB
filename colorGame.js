var x=6;
var color=randomColorArray(x);
var lis=document.querySelectorAll(".square");
var pickedcolor="rgb(0, 255, 255)";
var displayColor=document.querySelector("#display");
var message=document.querySelector("#message");
pickedcolor=colorPicker();
displayColor.textContent=colorPicker();
var resetButton=document.querySelector("#resetButton");
var hrdbtn=document.querySelector("#hardbtn");
var esybtn=document.querySelector("#easybtn");
//easy button event listener
esybtn.addEventListener("click",function(){
	x=3;
	esybtn.style.backgroundColor="rgb(143, 35, 155)";
	hrdbtn.style.backgroundColor="#fff";
	message.textContent="";
	resetButton.textContent="New Game";
	color=randomColorArray(3);
pickedcolor=colorPicker();
resetButton.style.backgroundColor="rgb(143, 35, 155)";
displayColor.textContent=colorPicker();
document.querySelector("h1").style.backgroundColor="rgb(143, 35, 155)";
esybtn.classList.add("lvlbtn");
hrdbtn.classList.remove("lvlbtn");
for(var i=0;i<lis.length;i++){
	if(i<color.length){
	lis[i].style.backgroundColor=color[i];}
	else{
		lis[i].style.display="none";
	}

}})
//hard button event listener
hrdbtn.addEventListener("click",function(){
  x=6;
  hrdbtn.style.backgroundColor="rgb(143, 35, 155)";
	esybtn.style.backgroundColor="#fff";
  color=randomColorArray(6);
  resetButton.style.backgroundColor="rgb(143, 35, 155)";
pickedcolor=colorPicker();
resetButton.textContent="New Game";
displayColor.textContent=colorPicker();
document.querySelector("h1").style.backgroundColor="rgb(143, 35, 155)";
hrdbtn.classList.add("lvlbtn");
esybtn.classList.remove("lvlbtn");
message.textContent="";
for(var i=0;i<lis.length;i++){
	lis[i].style.backgroundColor=color[i];
		lis[i].style.display="block";
	}
})
//reset button eventlistener
resetButton.addEventListener("click",function(){
color=randomColorArray(6);
pickedcolor=colorPicker();
displayColor.textContent=colorPicker();
resetButton.textContent="New Game";
if(x==3){
esybtn.style.backgroundColor="rgb(143, 35, 155)";}
else{
	hrdbtn.style.backgroundColor="rgb(143, 35, 155)";
}
document.querySelector("h1").style.backgroundColor="rgb(143, 35, 155)";
resetButton.style.backgroundColor="rgb(143, 35, 155)";
message.textContent="";
for(var i=0;i<lis.length;i++){
	lis[i].style.backgroundColor=color[i];}
})

for(var i=0;i<lis.length;i++){
	lis[i].style.backgroundColor=color[i];
	lis[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor==pickedcolor){
			message.textContent="You Won!!!";
			colorChange(clickedColor);
			document.querySelector("h1").style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again";
			resetButton.style.backgroundColor=clickedColor;
			if(x==3){
				esybtn.style.backgroundColor=clickedColor;
			}
			else{
				hrdbtn.style.backgroundColor=clickedColor;
			}

		}
		else{
			this.style.backgroundColor="#000";
			message.textContent="Try Again";
		}
	})}
	function colorChange(color){
		for(var i=0;i<lis.length;i++){
		lis[i].style.backgroundColor=color;}
	}
	function colorPicker(){
		var random=Math.floor((Math.random()*x));
		return color[random];
	}
	function randomColorPicker(){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256); 
        return "rgb("+r+", "+g+", "+b+")";
	}

     function randomColorArray(x){
     	var arr=[];
     	for(var i=0;i<x;i++){
          arr.push(randomColorPicker());
     	}
     	return arr;
     }
