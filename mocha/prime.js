let num=prompt("Enter a number");
function is_prime(num){
    if (num<=1){
        alert("its not prime number")
        return;
    }
    else{
       let i=2;
        while(i<num){
            if(num%2==0){
                alert("its not prime number")
                return;
            }
            i++;
            
        }
        

            alert("its  prime number")
        
    }
}
is_prime(num);