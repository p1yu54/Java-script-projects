const choices = document.querySelectorAll(".choice");
const showPara = document.querySelector(".show");
const showdiv = document.querySelector(".output");
const user_score = document.querySelector(".user");
const comp_score = document.querySelector(".comp");
let userScore = 0;
let compScore = 0;

choices.forEach((choices) => {
    choices.addEventListener("click" , () => {
        const choiceId = choices.getAttribute("id");
        console.log(choiceId);
        playGame(choiceId);
    })
})

const getCompChoice = () => {
    let options = ["rock" , "paper" , "scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (choiceId) => {
    let compChoice = getCompChoice();
    console.log(`userChoice = ${choiceId}`);
    console.log(`compChoice = ${compChoice}`);
    if(compChoice === choiceId){
        console.log("the game is draw")
        showPara.innerHTML = "The game is draw";
        showdiv.style.backgroundColor = "black";
    }
    else{
        let userWin = true;
        if(choiceId === "rock"){
            userWin = compChoice == "paper" ? false : true;
        }
        else if(choiceId === "paper"){
            userWin = compChoice == "scissor" ? false : true;
        }
        else if(choiceId === "scissor"){
            userWin = compChoice == "rock" ? false : true;
        }
        showWin(userWin);
    }
}

const showWin = (userWin) => {
    if(userWin === true){
        showPara.innerHTML = "You Win";
        showdiv.style.backgroundColor = "green";
        ++userScore;
        user_score.innerHTML = userScore;
    }
    else{
        showPara.innerHTML = "You Lose";
        showdiv.style.backgroundColor = "red";
        ++compScore;
        comp_score.innerHTML = compScore;
    }
}
