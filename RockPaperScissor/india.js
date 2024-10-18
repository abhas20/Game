let userScore=0;
let compScore=0;
let text=document.querySelector("#blast");
function compChoice(){
    option=["rock","paper","scissor"];
    idx=Math.floor(Math.random()*3);
    return option[idx];
}
const Choices=document.querySelectorAll(".choice");

const playGame=(Choice)=>{
    const comp=compChoice();
    console.log("comp chose "+ comp)
    console.log("user chose "+Choice)
   
    if (Choice==="rock" & comp==="paper"){
        text.innerText=(`You lost ${comp} bets your ${Choice}`);
        text.style.backgroundColor="red";
    }
    else if(Choice==="rock" & comp==="scissor"){
        text.innerText=(`You won Your ${Choice} bets ${comp}`);
        text.style.backgroundColor="blue";
    }
    else if(Choice==="paper" & comp==="scissor"){
        text.innerText=(`You lost ${comp} bets your ${Choice}`);
        text.style.backgroundColor="red";
    }
    else if(Choice==="paper" & comp==="rock"){
        text.innerText=(`You won Your ${Choice} bets ${comp}`);
        text.style.backgroundColor="blue";
    }
    else if (Choice==="scissor" & comp==="rock"){
        text.innerText=(`You lost ${comp} bets your ${Choice}`);
        text.style.backgroundColor="red";
    }
    else if(Choice==="scissor" & comp==="paper"){
        text.innerText=(`You won Your ${Choice} bets ${comp}`);
        text.style.backgroundColor="blue";
    }
    else if(Choice===comp){ 
        text.innerText=("It's a draw, Play Again")
        text.style.backgroundColor="green"
    }
} 
Choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const Choice = choice.getAttribute("id");
         playGame(Choice);
     score()
    } 
)}
)
let computer = document.querySelector("#comp")
let userPara = document.querySelector("#user")
const score = ()=>{
    if (text.style.backgroundColor==="blue"){
        userScore++;
        userPara.innerText=userScore
    }
    else if(text.style.backgroundColor==="red"){
        compScore++;
        computer.innerText=compScore
    }
}
const el=document.getElementById("pop")
const but=document.getElementById("but")
const url= "https://uselessfacts.jsph.pl/api/v2/facts/random";
async function getData() {
    console.log("getting...")
    let promise= await fetch(url);
    console.log(promise);
    let data= await promise.json();
    el.innerText=data.text
}

but.addEventListener("click",getData);


