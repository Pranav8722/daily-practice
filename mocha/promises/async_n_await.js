 function fetchdata(){
    
    let data = fetch("https://jsonplaceholder.typicode.com/users")
    res= data.json()
    console.log(res)
   
}

fetchdata()