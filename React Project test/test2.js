// 1. Write a function that accepts three numbers and returns product of it.

// 2. Write a function that accepts a number and returns
// - true if the number is even
// - false if the number is odd

// 3. Write a function that accepts two arrays and returns
// - true if their length is same
// - false if their length is not same

// 4. Write a function that accepts four numbers and returns the largest number

// 5. an e-commerce app has a cart. I want to checkout from my cart. 
// Help me write a function that accepts total amount, BANK_TYPE and returns the discounted amount
// - ICICI - 10%
// - HDFC - 15%
// - AXIS - 12.5%
// - other - 5%


        const discountedprice=(BANK_TYPE,total)=>{
            let amount
        if (BANK_TYPE==="ICICI")
        amount = total-(10/100*total)
        else if (BANK_TYPE==="HDFC")
        amount = total-(15/100*total)
        else if (BANK_TYPE==="ICICI")
        amount = total-(12.5/100*total)
        else
        amount = total-(5/100*total)
        return amount
        }

        discountedprice('ICICI',5000)
        4500
        
// 6. Write a function that accepts an array of integers and returns the array with numbers greater than 10

// 7. I want to maintain all my team members info in an array called teamMembers
// Write a function that accepts name, age, address, email and adds this info to teamMembers in form of object
// Function should return total count of team members

// 8. Write a function that accepts an string consisting of languages separated by comma
// Make an array from the string and return the array and total length of array