const options = document.querySelectorAll(".option");
const resetBtn = document.querySelector("#reset");
const gameContainer= document.querySelector(".container");
const showContainer = document.querySelector(".show-container")
const show_winner = document.querySelector("#show-winner");
const newGame = document.querySelector("#newGame")

let turnX = true;


const winningPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


options.forEach((option) => {
    option.addEventListener("click", () => {
        if(turnX === true){
            option.innerHTML = "x";
            turnX = false;
        }
        else{
            option.innerHTML = "o";
            turnX = true;
        }
        option.disabled = true;

        checkWinner();
    });
});


const resetGame = () =>{
    turnX = true;
    enableBox();
};

const disableBox = () =>{
    for(let option of options){
        option.disabled = true;
    }
}

const enableBox = () =>{
    for(let option of options){
        option.disabled = false;
        option.innerHTML = "";
    }
}
resetBtn.addEventListener("click",resetGame);


const checkWinner = () =>{
    for(let pattern of winningPattern){
            let pos1Val = options[pattern[0]].innerText;
            let pos2Val = options[pattern[1]].innerText;
            let pos3Val = options[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if((pos1Val === pos2Val) && (pos1Val === pos3Val)){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            };
        };


    }
}

const showWinner = (winner) =>{
    console.log(`Congratulations, winner is ${winner}`);
    gameContainer.classList.add("hide");
    showContainer.classList.remove("hide");
    show_winner.innerHTML = `The winner Of this game is ${winner.toUpperCase()}`
    disableBox();
}

newGame.addEventListener("click",() => {
    gameContainer.classList.remove("hide");
    showContainer.classList.add("hide");
    enableBox();
})