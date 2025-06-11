async function fetchdata(){
    try{
        let data =await fetch("https://jsonplaceholder.typicode.com/users")
    res=await data.json()
    console.log(res)
    }
    catch(error){
        console.log("something went wrong",error)
    }
}

fetchdata()