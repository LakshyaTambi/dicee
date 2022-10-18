for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function()
{
  var mybutton=this.innerHTML;
  playsound(mybutton);
  buttonanimation(mybutton);
});
}
document.addEventListener("keypress", function(event)
{
  //alert("Key is pressed");
  //console.log(event);
  playsound(event.key);
  buttonanimation(event.key);
});
  function playsound(key){
      //  this.innerHTML=style.color("blue");
        switch(key)
        {
          case "w":
          var audio=new Audio("sound/abbu.mp3");
          audio.play();
          //this.innerHTML=style.color("blue");
          break;
          case "a":
          var audio=new Audio("sound/bachi.mp3");
          audio.play();
          break;
          case "s":
          var audio=new Audio("sound/fas.mp3");
          audio.play();
          break;
          case "d":
          var audio=new Audio("sound/lie.mp3");
          audio.play();
          break;
          case "j":
          var audio=new Audio("sound/padhai.mp3");
          audio.play();
          break;
          case "k":  var audio=new Audio("sound/sabas.mp3");
            audio.play();
            break;
            case "l":  var audio=new Audio("sound/sense.mp3");
              audio.play();
              break;
              default:alert("Wrong");
        }
     }

function buttonanimation(mybutton)
{
  var mainbutton=document.querySelector("."+mybutton);
  mainbutton.classList.add("pressed");
  setTimeout(function(){
    mainbutton.classList.remove("pressed");
  },100);
}

/*var audio = new Audio('sounds/crash.mp3');
//audio.loop = false;
audio.play();
//alert("you clicked");*/
