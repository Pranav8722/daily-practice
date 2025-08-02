let select=document.querySelectorAll("select")
let from= document.querySelector(".from")
let to= document.querySelector(".to")
let baseUrl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

for(slct of select){
    for(country in countryList){
        
        let newop=document.createElement("option")
        newop.innerText=country
        newop.value=country
        slct.append(newop)
    if(newop.value==="INR"){
        newop.selected=true;
    }
}
}
let url=`${baseUrl}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`
fetch(url)
.then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error(err));
