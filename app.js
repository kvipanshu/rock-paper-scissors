let userScore = 0;
let aiScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const aiScorePara = document.querySelector("#ai-score");

const genAiChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log("Game Draw");
    msg.innerText = "Game Draw, Play Again?";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, aiChoice) => {
    if(userWin) {
        console.log("You Win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${aiChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        aiScore++;
        aiScorePara.innerText = aiScore;
        console.log("You Lose");
        msg.innerText = `You Lose! ${aiChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);
    const aiChoice = genAiChoice();
    console.log("Ai Choice =", aiChoice);

    if (userChoice === aiChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = aiChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = aiChoice === "scissor" ? false : true;
        } else {
            userWin = aiChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, aiChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //  console.log("Choice was Clicked", userChoice);
         playGame(userChoice);
    });
});