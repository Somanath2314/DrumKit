func = document.querySelectorAll("button")

for(var i=0; i< func.length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var letter = this.innerHTML;
        makeSound(letter);
        addAnimation(letter);
    });
}

document.addEventListener("keydown",function(kk){
    makeSound(kk.key);
    addAnimation(kk.key);
})

function makeSound(letter) {
   switch (letter) {
    case "w":
        var audio = new Audio('./sounds/crash.mp3');
        audio.play();
        break;
    case "a":
        var audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
        break;
    case "s":
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
        break;
    case "d":
        var audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
        break;
    case "j":
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
        break; 
    case "k":
        var audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
        break;
    case "l":
    var audio = new Audio('./sounds/snare.mp3');
    audio.play();
    break;       
    default:
       console.log(clickedText);
   }
}

function addAnimation(letter){
    className = "."+letter;
    document.querySelector(className).classList.add("pressed");
    setTimeout(function(){
    document.querySelector(className).classList.remove("pressed");
    }, 100);
}


