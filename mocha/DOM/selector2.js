let darshan=document.getElementById("darshan")
console.log(darshan)
darshan.innerText="hello its darshan bhai"

let pranav=document.getElementsByClassName("pranav")
console.log(pranav[0])

pranav[0].innerText="hello its pranav"
pranav[1].innerHTML="<h1>typed using innerHTML tag in side h1 tag</h1>"

let body=document.getElementById("parrent");
body.style.transition="10s"
function change(){
if(body.style.backgroundColor!="black"){
    body.style.backgroundColor="black"
    body.style.color="white"
}
else{
    body.style.backgroundColor="white"
    body.style.color="black"
}
}