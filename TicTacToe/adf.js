let box=document.querySelectorAll("#but");
let reset=document.querySelector("#res");
const newBut = document.querySelector("#new");
const msg= document.querySelector("#msg");
let turnO=true
let count=0
const winPattern=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[2,4,6],[1,4,7],
    [0,4,8],[2,5,8]
];
const resetGame=()=>{
    turnO=true
    count=0
    for (let boxm of box){
        boxm.disabled=false
        boxm.innerText=""
    }
    msg.innerText=""
}

reset.addEventListener("click",resetGame)

box.forEach((boxm)=>{
    boxm.addEventListener("click",()=>{
        
        if(turnO){
            boxm.innerHTML="O"
            turnO=false
            boxm.style.color="green"
            boxm.style.backgroundColor="yellow"

        }
        else{
            boxm.innerHTML="X"
            turnO=true
            boxm.style.color="blue"
        }  
        boxm.disabled=true
        count+=1 
        let isWinner=checkWinner()
        if (count===9 && !isWinner){
        draw()
        }
    })
})

const checkWinner=()=>{
    for (pattern of winPattern){
        let pos1=box[pattern[0]].innerText;
        let pos2=box[pattern[1]].innerText;
        let pos3=box[pattern[2]].innerText
    if (pos1!==""&& pos2!==""&& pos3!==""){
        if(pos1===pos2&& pos3===pos2){
            showWinner(pos1)
        }
    }
}
}

const showWinner =(winner)=>{
    msg.innerText=`Congratulation!, Winner is ${winner}`
    for (let boxm of box){
        boxm.disabled=true
    }
}
const draw=()=>{
        msg.innerText="Try again!! The game is draw"
    }
