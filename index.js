function roll(){
     var num1=Math.floor(Math.random()*6)+1;

      var num2=Math.floor(Math.random()*6)+1;


var image1="images/dice"+num1+".png";
var image2="images/dice"+num2+".png";
document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);

winner(num1,num2);
}

function winner(num1,num2){

  if(num1>num2){
    document.querySelector("h2").innerHTML="Player 1 wins";
  } else if(num1<num2){
    document.querySelector("h2").innerHTML="Player 2 wins";
  } else{
    document.querySelector("h2").innerHTML="Draw";
  }
}
