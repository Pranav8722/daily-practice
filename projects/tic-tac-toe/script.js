let div=document.querySelectorAll(".container")
let buttons=document.querySelectorAll(".button")
let reset=document.querySelector("#reset")
let win=document.querySelector("#winn")
let turn=0

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];


let winner=()=>{
    for(let conmb of winningCombinations){
        let [a,b,c]=conmb
        if(buttons[a].innerText!=="" &&
            buttons[a].innerText===buttons[b].innerText &&
            buttons[a].innerText===buttons[c].innerText 
        ){

            alert(`${buttons[a].innerText}..win the game`)
            disableAllButtons();
            
            return; 
        }
        
    }
    let draw=[...buttons].every(btn=>btn.innerText!=="");
        if(draw){
            alert("match draw")
        }
}




function disableAllButtons() {
  buttons.forEach(btn => btn.disabled = true);
}

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
       if(button.innerText===""){
         if(turn%2===0){
            button.innerText="X"
            button.style.color="red"
            button.style.textShadow="red"
           
        }
        else{
             button.innerText="O"
              button.style.color="blue"
        }
        turn++
        winner();
       }
 
})

})



   
        reset.addEventListener("click",()=>{
            buttons.forEach(btn=>{
            btn.innerText=""
            btn.disabled=false
            btn.style.color=""
        })
        turn=0
    } )
