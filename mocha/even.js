function even(){
    let even=[]
    for(let i=0;i<50;i++){
        if(i%2==0){
            even.push(i)
        }
    }
    console.log("tottal numbers of odd occurance in 0-50=",even.length)
}
even();
