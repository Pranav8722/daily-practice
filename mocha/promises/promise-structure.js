var data=true
var data=new Promise((res,rej)=>{
    if(data==true){
        console.log("information is succesfully resolved",res)
    }
    else{
        console.log("information is rejected",rej)
    }
}
)

data.then((sucess)=>{
    console.log("data is responsive",sucess);
})
.catch((error)=>{
    console.log("data is rejected",error);
})