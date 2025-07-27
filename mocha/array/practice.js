// // Q1: Create an array of 5 student names and print each name using a for loop.



// let student=["amruta","pranav","prathamesh","Raj","babu"]

// for(item of student){
//     console.log(item)
// }

// // Q2: Create an array of numbers. Write a function to return the sum of all even numbers.
//  let num=[5,6,8,9,4,2]
//  let sum=0
//  for(i=0;i<num.length;i++){
//     if((num[i]%2)==0){
//        sum+=num[i]
//     }
//  }
//  console.log(sum)

// // Q3: Add an element to the beginning and end of an array using array methods.
// let student1=["amruta","pranav","prathamesh","Raj","babu"]
// student1.push("mestri")
// student1.unshift("achal")
// console.log(student1)

// // Q4: Remove the third element from an array using splice() and print the updated array.

// let student2=["amruta","pranav","prathamesh","Raj","babu"]
// student2.splice(2,1)
// console.log(student2)

// // Q5: Reverse an array without using .reverse().

// let student3=["amruta","pranav","prathamesh","Raj","babu"]
// let students=[]
// for(let i=student3.length-1;i>=0;i--){
//     students.push(student3[i])
// }
// console.log(students)

// // Q6: Write a function that takes an array and returns a new array with only the unique elements (no duplicates).

// let arr=[1,2,2,3,5,5,6]
// let uniqu=[]
// for(i=0;i<arr.length;i++){
//     if(!uniqu.includes(arr[i])){
//         uniqu.push(arr[i])

//     }
// }
// console.log(uniqu)


//7 check for vowels

// let str="i AAm pranav"
// let vowels=["a","e","i","o","u"]
// let str2=str.toLowerCase()
// let count=0
// for(char of str2){
//     if(vowels.includes(char)){
//                 count++
//     }
// }
// console.log(count)


// Q3. Find the maximum number in an array.
// let arr=[1,9,6,7,5]
// let max=arr[0]
// for(let i=1;i<arr.length;i++){
//   let current=arr[i]

//     if(current>max){
//        max=current
//     }
// }

// console.log(max)


// Q6. Check whether a specific element exists in the array or not.


// let arr=[1,9,6,7,5]
// for(let i=0;i<arr.length;i++){
//     if(arr.includes(96)){

//        console.log("element exist at position")
//        break
//     }
//     else{
//         console.log("element not exist ")
//         break
//     }


// }


// Q7. Count the number of even numbers in an array.

// let arr=[1,9,6,7,5,6,4]
// let count=0
// for(let i=0;i<arr.length;i++){
//    if(arr[i]%2==0){
//     count++

//    }}
// console.log(count)



//  Q8. Find the index of a specific element using a loop (don’t use .indexOf()).

// let arr=[1,9,6,7,5]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===6){
//         console.log(`element present at ${i}  position`)
//     }


// }


//  Q9. Swap first and last elements of an array.
// let arr=[1,9,6,7,6]

//     let first=arr[0]  
//     arr[0]=arr[arr.length-1]
//     arr[arr.length-1]=first

// console.log(arr)





// // ✅ Functions & Arrow Functions
// // Create a function that takes two numbers and returns their sum.

// function sum(a,b) {
//     console.log("sum=",a+b)  
// }
// sum(5,6);

// // Convert the above function into an arrow function.
//  let sum1=(a,b) =>{
//     console.log("sum=",a+b)  
// }
// sum1(5,6);

// // Write a function that takes a string and returns it reversed.

// function revarse(str){
//   console.log( "reversed string=",str.split("").reverse().join(""))
// }
// revarse("hello")

// // Write an arrow function that checks if a number is even.

// let even=(num)=>{
//    console.log(num%2===0 ?"even":"odd")
// }
// even(6)
// even(5)

// // Write a function that takes an array and returns only the elements at even indices.

// let evenarr=(arr)=>{
//    for(i=0;i<arr.length;i++){
//       if(i%2==0){
//          console.log("array at even indices",arr[i])
//       }
//    }
// }
// evenarr([1,2,3,4,5])



// // ✅ forEach()
// // Given an array of names, use forEach to print each name with "Hello".
// let arr=["amruta","pranav","achal","chotya"]
// arr.forEach(ele => {
//    console.log("hello",ele)
// });


// // Use forEach to count how many strings in an array have more than 5 characters.
// let arr2=["amruta","pranav","achal","chotya"]
// let count=0
// arr2.forEach(ele =>{
//   if(ele.length>5){
//    count++
// }
// })
// console.log(count)


// // Use forEach to multiply all elements of an array by 2 (modify original array).


// let arr3=[1,9,6,7,6]
// arr3.forEach((ele,i) =>{
//   arr3[i]=ele*2
// })
// console.log(arr3)


// // ✅ map()
// // Given an array of numbers, use map() to return a new array with each number squared.

// let arr4=[1,9,6,7,6]

// let square=arr4.map((ele)=>{
//    return ele*ele
// })
// console.log(square)

// // Use map() to capitalize all words in an array: ["pranav", "amruta"] ➝ ["Pranav", "Amruta"].
// arr5=["pranav", "amruta"] 
// let upper=arr5.map((str,i)=>{
//   return str[0].toUpperCase()+str.slice(1)
// })
// console.log(upper)

// // Use map() to add ₹100 to each value in an array of prices.
// let price=[100,255,631,9]
// let add100=price.map(el=>{
//    return el+100
// })
// console.log(add100)


// // ✅ filter()
// // Use filter() to return only the odd numbers from an array.

// let arr4 = [1, 9, 6, 7, 6]
// let odd = arr4.filter(ele => {
//     return ele % 2 != 0
// })
// console.log(odd)

// // Use filter() to return all strings from an array that start with "a".
// let name1 = ["amruta", "pranav", "achal", "chotya"]
// let astart = name1.filter((ele) => {
//     return ele[0] === "a"

// })
// console.log(astart)

// // Use filter() to return elements greater than 50 in an array.
// let arr5 = [10, 96, 66, 17, 36]
// let greater=arr5.filter(ele=>{
//     return ele>=50
// })
// console.log("ele greater than 50=",greater)



// // ✅ reduce()
// // Use reduce() to return the sum of all numbers in an array.

// let arr=[5,3,9,85,46,6]
// let sum=arr.reduce((res,ele)=>{
//     return res+=ele
// })
// console.log("sum=",sum)

// // Use reduce() to find the maximum number in an array.
// let arr1=[5,3,9,85,46,6]
// let maximum=arr.reduce((max,ele)=>{
//     return ele>max?ele:max
// })
// console.log("max=",maximum)

// // Use reduce() to count the total number of characters in an array of strings.

// let name1 = ["amruta", "pranav", "achal", "chotya"]
// let countchar=name1.reduce((ele,cele)=>{
   
//     return ele+cele.length
// },0)
// console.log("tottal char=",countchar)

//  find length of the each word in a sentence
// let arr="hii i am pranav".split(" ")
// let countchar=arr.map((ele)=> ele.length)
// console.log(countchar)