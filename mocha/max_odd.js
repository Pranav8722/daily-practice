function max_odd(){
    let counts=[];
    for(let i=0;i<51;i++){
        if(i%2!=0){
            counts.push(i)
            
        }
    }
    console.log("tottal odd numbers in 0-50 are=",counts.length)
}

max_odd();