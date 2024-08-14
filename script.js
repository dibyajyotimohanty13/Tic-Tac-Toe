let boxes=document.querySelectorAll(".box");
let resbtn=document.querySelector(".reset");
let msgContainer=document.querySelector(".cont-msg");
let newGamebtn=document.querySelector("#newgame");
let winMsg=document.querySelector("#msg");
let sign=true;
const arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
       if(sign) {
        box.innerText="X";
        box.style.color="green";
        sign=false;
       }
       else{
        box.innerText="O";
        box.style.color="red";
        sign=true;
       }
       count++;
       box.disabled=true;
       checkWinner();
    })
});

const resetGame= () =>{
    sign=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        }
        count=0;
};

const drawMsg=() =>{
    winMsg.innerText="Game was a draw! Please reset or start a new game";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showWinner=(winner) =>{
    winMsg.innerText= `Congratulations!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=() =>{
    for(let pattern of arr){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){

                showWinner(pos1);
            }
        }
    }
    if(count==9)
        drawMsg();

};

newGamebtn.addEventListener("click",resetGame);
resbtn.addEventListener("click",resetGame);