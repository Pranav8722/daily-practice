var arr =[10,"hi",true,98]
var a=arr[0];
var b=arr[1]
var c=arr[2]
var d=arr[3]
console.log("using 1st method",a)


var [a,b,c]=arr
console.log("using 2nd method",a,b,c)


//using object//
var std={
    id:111,
    name:"abc",
    subject:["java","python","css"],
    ispass:false

}

var id=std.id;
var name=std["name"]

var {id,marks,subject}=std;
console.log(id,marks,subject);

//spread operator
var arr1 =[12,43,"hi",45,false,23];
var [a,b,...c]=arr1

console.log(a);
console.log(b);
console.log(c);


//rest parameter

function add(a,b,...c){
    console.log(a,b,c);
}
 add (10,20,"hi",true,"hello")
