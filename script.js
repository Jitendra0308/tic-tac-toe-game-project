let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcantainer=document.querySelector(".msg-cantainer");
let msg=document.querySelector("#msg");

let turnO=true; // playerx , playero

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgcantainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        winnercheck();

    });
});



const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innertext ="";
    }
};

const showwinner = (winner) =>{
    msg.innertext='winner is a ${winner}';
    msgcantainer.classList.remove("hide");
    disableBoxes();
};

const winnercheck=()=>{
    for(let pattern of winpattern){
         let pos1=boxes[pattern[0]].innerText;
         let pos2=boxes[pattern[1]].innerText;
         let pos3=boxes[pattern[2]].innerText;

         if(pos1 !="" && pos2 !=""  && pos3 != ""){
            if(pos1 === pos2 && pos2===pos3){
                console.log("winner",pos1);
                showwinner(pos1);
            }
         }
}
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);