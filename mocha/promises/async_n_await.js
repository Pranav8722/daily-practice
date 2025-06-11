async function fetchdata(){
    let data =await fetch("https://jsonplaceholder.typicode.com/users")
    res=await data.json()
    console.log(res)
}

fetchdata()