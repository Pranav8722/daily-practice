fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    res.json()
    .then((data)=>{
        console.log(data)
    })
    .catch((msg)=>{
    console.log(msg)
})
})

.catch((err)=>{
    console.log(err)
})