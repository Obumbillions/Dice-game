// variables for game 
let playerOneScore = 0
let playerTwoScore = 0
let playerOneTurn = true

//  variables to store references to the necessary DOM nodes
let playerOneScoreboard = document.getElementById("player1Scoreboard")
let playerOneDice = document.getElementById("player1Dice")
let playerTwoScoreboard = document.getElementById("player2Scoreboard")
let playerTwoDice = document.getElementById("player2Dice")
let rollBtn = document.getElementById("rollBtn")
let resetBtn = document.getElementById("resetBtn")
let goBigBtn = document.getElementById("goBigBtn")
let message = document.getElementById("message")

/* Hook up a click event listener to the Roll Dice Button. */
function displayButton(){
    rollBtn.style.display = "none"
     resetBtn.style.display = "block"
}

rollBtn.addEventListener("click", function (){
    let randomNum = Math.floor(Math.random() * 6) + 1
    if(playerOneTurn){
        playerOneScore += randomNum
        playerOneScoreboard.textContent = playerOneScore
        goBigBtn.style.display = "none"
        playerOneDice.textContent = randomNum
        message.textContent = "Player 2 turn"
        playerOneDice.classList.remove("active") 
        playerTwoDice.classList.add("active")   
       
    } else {
    playerTwoScore += randomNum
    playerTwoScoreboard.textContent = playerTwoScore
    playerTwoDice.textContent = randomNum
    message.textContent = "Player 1 turn"
    playerOneDice.classList.add("active") 
    playerTwoDice.classList.remove("active") 

}
   
if (playerOneScore >= 20) {
    message.textContent = "Player 1 has won! 🥳"
    goBigBtn.style.display = "none"
    displayButton()
} else if (playerTwoScore >= 20) {
    message.textContent = "Player 2 has won! 🎉"
    goBigBtn.style.display = "none"
    displayButton()
}

 playerOneTurn = !playerOneTurn
})

// 1. Hook a click event listener up with the Reset Button
resetBtn.addEventListener("click", function(){
    reset()
})

// 2. Create a reset() function that resets the game
 function reset(){
    message.textContent = "Player  1 Turn"
    playerOneScoreboard.textContent = 0
    playerTwoScoreboard.textContent = 0
    playerOneScore = 0
    playerTwoScore = 0
    playerOneTurn =  true
    playerOneDice.textContent = "-"
    playerTwoDice.textContent = "-"
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    playerTwoDice.classList.remove("active")
    playerOneDice.classList.add("active") 
 }   

goBigBtn.addEventListener("click", function (){
    let randomNumb = Math.floor(Math.random() * 20) + 1
    if(playerOneTurn){
        playerOneScore += randomNumb
        playerOneScoreboard.textContent = playerOneScore
        playerOneDice.textContent = randomNumb
        message.textContent = "Player 2 turn"
        rollBtn.style.display = "none"
        playerOneDice.classList.remove("active") 
        playerTwoDice.classList.add("active")   
       
    } else {
    playerTwoScore += randomNumb
    playerTwoScoreboard.textContent = playerTwoScore
    playerTwoDice.textContent = randomNumb
    message.textContent = "Player 1 turn"
    playerOneDice.classList.add("active") 
    playerTwoDice.classList.remove("active") 

}
   
if (playerOneScore >= 20) {
    message.textContent = "Guess who's boss 💪"
    goBigBtn.style.display = "none"
    displayButton()
}else if( playerOneScore <=10){
    message.textContent = "better luck next time...😛"
    goBigBtn.style.display = "none"
    displayButton()
} else if (playerTwoScore >= 20) {
    goBigBtn.style.display = "none"
    message.textContent = "To Infinity & beyond 🛩✈"
    displayButton()
}else if( playerOneScore <= 10){
    message.textContent = "You! what to chill with the BIG-BOYs ...😛"
    goBigBtn.style.display = "none"
    displayButton()
}

 playerOneTurn = !playerOneTurn
})


