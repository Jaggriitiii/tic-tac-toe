let boxes= document.querySelectorAll(".box");
let reset= document.querySelector(".reset");
let msg= document.querySelector(".msg");
let turn0='O';

let winpat=[
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

let disable = () =>{
    for(let box of boxes){
        box.disabled= true;
    }
}

const resetgame = () =>{
    turn0= 'O';
    msg.innerText="";
    enable();
}

const enable = () =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}

const cwinner=()=>{
    for(pattern of winpat){
        if(boxes[pattern[0]].innerText!="" &&boxes[pattern[1]].innerText!="" && boxes[pattern[2]].innerText!=""){
            if(boxes[pattern[0]].innerText==boxes[pattern[1]].innerText && boxes[pattern[1]].innerText==boxes[pattern[2]].innerText ){
                console.log("Winner is " +boxes[pattern[0]].innerText );
                msg.innerText= `Congratulationnss!! The winner is ${boxes[pattern[0]].innerText}`;
                disable();
               
            }
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        // box.innerText = "abcd"; 
        if(turn0=='O'){
            box.innerText= 'O';
            turn0= 'X';
        }
        else{
            box.innerText='X';
            turn0= 'O';
        }
        box.disabled= true;
        cwinner();
    })

});

reset.addEventListener("click", resetgame); 