// 1. Write a function that accepts three numbers and returns product of it.
const Product3=(x,y,z)=>(x*y*z)
undefined
Product3(10,2,5)
100

// 2. Write a function that accepts a number and returns
// - true if the number is even
// - false if the number is odd
const number=(x)=>{
    console.log(x); 
    if (x%2==0){
    return true
    } else {
    return false
    }
    }

// 3. Write a function that accepts two arrays and returns
// - true if their length is same
// - false if their length is not same
const arraylength=(arr1,arr2)=>{
    if (arr1.length == arr2.length)
return true
else 
return false
}
undefined
const arraylength=(arr1,arr2)=>{
    if (arr1.length == arr2.length)
return true
else 
return false
}
undefined
arraylength([1,2,3,4],[2,6,8])
false
arraylength([1,2,3,4],[2,6,8,10])
true

// 4. Write a function that accepts four numbers and returns the largest number
const largestnumber=(a,b,c,d)=>{
    return Math.max(a,b,c,d)
   }
   undefined
   largestnumber(10,45,65,100)
   100





