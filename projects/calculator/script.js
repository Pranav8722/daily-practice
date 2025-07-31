
let number=document.querySelectorAll(".num")
let operator=document.querySelectorAll(".symb")
let result=document.querySelector(".res")
let clear=document.querySelector(".clear")
let display=document.querySelector("#screen")

let arr1;
let ope;
number.forEach(btn => {
    btn.addEventListener("click",()=>{
    
    display.innerText+=btn.innerText
     arr1=display.innerText.split(/[+\-x/%]/)
    console.log(arr1)
    
   
})
})




operator.forEach(btn => {
    btn.addEventListener("click",()=>{
    
    ope=btn.innerText
  
})
})
result.addEventListener("click",()=>{
if(ope==="+"){
   let ans=Number(arr1[0])+Number(arr1[1])

   display.innerText=ans
}
else if(ope==="-"){
   let ans=Number(arr1[0])-Number(arr1[1])

   display.innerText=ans
}
else if(ope==="/"){
   let ans=Number(arr1[0])/Number(arr1[1])

   display.innerText=ans
}
else if(ope==="x"){
   let ans=Number(arr1[0])*Number(arr1[1])

   display.innerText=ans
}
else if(ope==="%"){
   let ans=Number(arr1[0])%Number(arr1[1])

   display.innerText=ans
}
else{
    display.innerText="Invalid Operation"
}
})


clear.addEventListener("click",()=>{
    display.innerText=""
})