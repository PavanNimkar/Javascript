// step 1 : understand the user choice
// accessing all choices and adding each click event to understanding user choice
// and when clicked on them printing their ids 
const choices = document.querySelectorAll(".choice")
let dispalyMsg = document.querySelector("#msg")
let comImg = document.querySelector("#comp-choice")
let comImgSrc = comImg.getAttribute("src")
let userScore = document.querySelector("#user-score")
let computerScore = document.querySelector("#computer-score")
let userCount = 0
let computerCount = 0


choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        let userChoice = choice.getAttribute("id")
        console.log("user choice is:", userChoice)
        playGame(userChoice)
    })
})

// step 2: generate the computer choice
const genComChoice = ()=> {
    const options = ["rock", "paper", "scissors"]
    let randomIndx = Math.floor(Math.random()*3)
    return options[randomIndx]
    // change me according to random choices
}

// winner showing
const showWinner = (userWinStatus)=> {
    if(userWinStatus){
        console.log("you win")
        dispalyMsg.innerText = "You Win"
        userCount++
        userScore.innerText = userCount

    }
    else {
        console.log("you lose")
        dispalyMsg.innerText = "You Lose"
        computerCount++
        computerScore.innerText = computerCount
    }
}

// change computer img 
const changeComImg = (computerChoice) => {
    if(computerChoice === "rock"){
        //change img to rock
        // comImgSrc = "Assets/rock.png"
        // console.log("src is", comImgSrc)
        comImg.src = "Assets/rock.png"
    }
    else if(computerChoice === "paper"){
        // change img to paper
        // comImgSrc = "Assets/paper.png"
        // console.log("src is", comImgSrc)
        comImg.src = "Assets/paper.png"
    }
    else{
        //change img to scissors
        // comImgSrc = "Assets/scissors.png"
        // console.log("src is", comImgSrc)
        comImg.src = "Assets/scissors.png"
    }
}

// logic to generate results 
const playGame = (userChoice)=> {
    let computerChoice = genComChoice()
    console.log("computer choice is:", computerChoice)
    changeComImg(computerChoice)
    // conditional logic
    if(userChoice === computerChoice){
        //draw
        console.log("match draw")
        dispalyMsg.innerText = "Match is draw"
    }
    else {
        let userWinStatus = true
        if(userChoice === "rock"){
            // computer choice = scissors || paper
            userWinStatus = computerChoice === "scissors" ? true : false
        }
        else if(userChoice === "paper"){
            // rock scissors
            userWinStatus = computerChoice === "rock" ? true : false
        }
        else {
            // scissors
            // rock paper
            userWinStatus = computerChoice === "rock" ? false : true
        }

        showWinner(userWinStatus)
    }
}