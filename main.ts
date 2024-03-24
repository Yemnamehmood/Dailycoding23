//Day 23 
//Task 1 (Airthmetic with mixed types)
//this function adds a number and a string that represents a number 
function addnoandstring (num1: number, numberstring:string): number{
    return num1 + Number (numberstring);
}

//Trying it with 10 and "7"
console.log(addnoandstring (10,"7")); // it will show 17 
//the string "7" turned into number 7, and then added to 10

//Task 2 (Multiplying decimals)
//this function multiples two decimal numbers
function Multiplyingdecimals(number1: number, number2: number):number{
    return Math.round((number1*number2) * 100) / 100;

}
//trying it with 0.1 and 0.3
console.log(Multiplyingdecimals(0.1,0.3)); //Shows 0.03
//after multiply, we round of to make result easier to read 

//Task 3 (Dividing and finding the remainder)
//this function divides two numbers and finds the quotient and remainder 
function divideAndFindRemainder(dividend:number, divisor:number) {
    // Calculate the quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;

    // Create an object to store the results
    let result = {
        quotient: quotient,
        remainder: remainder
    };

    // Return the object with both values
    return result;
}
//result
let result = divideAndFindRemainder(10, 3);
console.log("Quotient:", result.quotient); // Output: Quotient: 3
console.log("Remainder:", result.remainder); // Output: Remainder: 1