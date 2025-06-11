let image=document.querySelectorAll("img")
let title=document.querySelectorAll(".title")
let catogry=document.querySelectorAll(".catogry")
let price=document.querySelectorAll(".price")


fetch('https://dummyjson.com/products')
.then((res)=> {
    
    res.json()
    .then((data)=>{
        for (let i = 1; i < data.products.length; i++) {
            image[i].src=data.products[i].thumbnail
            title[i].innerText=data.products[i].title
            catogry[i].innerText=data.products[i].category
            price[i].innerText=data.products[i].price

            console.log( data)
            
        }
    })
    .catch((mes)=>{
        console.log(mes)
    })

})

.catch((err)=>{
        console.log(err)
    })
