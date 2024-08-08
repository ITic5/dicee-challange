let randomNumber1 = Math.floor(Math.random() * 6) + 1;

document.querySelector("img.img1").setAttribute("src", `images/dice${randomNumber1}.png`);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector("img.img2").setAttribute("src", `images/dice${randomNumber2}.png`);

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!"
    document.querySelector("h1").style.lineHeight = "170.4px"
}else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!"
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆"
};

const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
