document.getElementById("button").addEventListener("click",function(){
    makeSound()
    let dice1 = Math.floor(Math.random()*6)+1;
    let dice2 = Math.floor(Math.random()*6)+1;
    
    document.getElementById("dice1").src = `assets/${dice1}.png`;
    document.getElementById("dice2").src = `assets/${dice2}.png`;
    if (dice1>dice2){
        document.querySelector("h1").textContent = "🎋Player 1 wins🎋"
    } else if (dice1<dice2){
        document.querySelector("h1").textContent = "🎋Player 2 wins🎋"
    }
    else{
        document.querySelector("h1").textContent = "🎈Oops! It's a DRAW🎈"
    }


});
function makeSound() {
    let audio = new Audio("assets/sound.mp3"); //for sound
    audio.play();
  }


