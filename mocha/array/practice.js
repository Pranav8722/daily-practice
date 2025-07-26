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
    


// 11.Count how many elements are greater than 50 in a given array.

// let arr=[111,9,60,57,46,66,30]
// let max=50
// let count=0
// for(i=0;i<=5;i++){
//     if(arr[i]>max){
//         count++;
//     }
// }
// console.log(count)


// //12 Print all elements at even indexes of the array
// let arr=[111,9,60,57,46,66,30]
// let evenarr=[]
// for(let i=1;i<arr.length;i++){
//     if(i%2==0){
//         evenarr.push(arr[i])
//     }
// }
// console.log(evenarr)


// 13 Replace all negative numbers in an array with 0.

// let arr=[111,-9,-60,57,46,66,-30]

// for(let i=1;i<arr.length;i++){
//     if(arr[i]<0){
//         arr[i]=0
//     }
// }
// console.log(arr)

// 14.Merge two arrays and remove duplicates.

let arr=[111,9,60,57]
let arr2=[60,9,46,66,30]

for(let i=0;i<arr2.length;i++){
 if(!arr.includes(arr2[i])){
    arr.push(arr2[i])
 }
}
console.log(arr)
