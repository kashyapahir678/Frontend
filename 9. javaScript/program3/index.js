
// 1. Javascript program to print HelloWorld 


{
    let js = "hello World";

    console.log(js)
}

// 2. Javascript program to add two number 

{
    let a = 10;
    let b = 20;
    let c = a + b;

    console.log(c)
}

// 3. Javscript program to find the sqare root 
{
let a = 50;

let sqrt = Math.sqrt(a);

console.log(sqrt)
}

// 4. Javscript  Program to calculate the area of triangle 

{
    let height = 4;
    let width = 6;

    let triangle = height * width / 2;
    console.log(triangle)
}

// 5. Javascript program to swip two variable 

{
 let a = 10;
 let b = 20;
 let c = 30;

 console.log(a , b)

 c = a;
 a = b;
 b = c;

 console.log(a , b)
}

//  6. Javascript program to solve Quadratic Equation 

{

}

// 7. Javascript program to convert Kilometers to Miles 

{
let kilometer = 5;

let miles = kilometer * 0.62;

console.log("5 Kilometer = ", miles)
}

// 8. Javascript program to convert Celsius to Fehrenhit 

{
  let Celsius = 5;

  let Fehrenhit = Celsius * 1.8 + 32;

  console.log(Fehrenhit, "°F")
}

// 9. Javascript program to convert Random number 

{
    let randomNum = Math.trunc(Math.random()*1000);
    console.log(randomNum)
}

// 11. Javascript program to check if a number is positive , negetive or Zero 

{
    let num = 2;
    if(num >= 1){
        console.log("The number is postive")
    }
    else if(num == 0){
        console.log("The number is Zero")
    }
    else{
        console.log("The number is Negative")
    }
}

// 12. Javascript Program to find the largest Among Three number 

let a = 10;
let b = 50;
 let c = 30;

 if(a > b && a > c){
    console.log("A is largest")
 }
 else if(b > a && b > c ){
    console.log("B is largest")
 }
 else{
    console.log("C is largest")
 }

//  13.  JavaScript Program to Check Prime Number 

{
        let number = 11;
      
        if (
          number % 2 == 0  ||
          number % 4 == 0  ||
          number % 6 == 0  ||
          number % 8 == 0  ||
          number % 10 == 0 
        ) {
          console.log("this is a not prime number");
        } else {
          console.log("this is a prime number");
        }
}

// 14.  javascript program to print all prime number to interval 

{
    for (let i = 0; i < 100; i++) {
        if (
          i % 2 == 0  ||
          i % 3 == 0  ||
          i % 4 == 0  ||
          i % 5 == 0  ||
          i % 6 == 0  ||
          i % 7 == 0  ||
          i % 8 == 0  ||
          i % 9 == 0  ||
          i % 10 == 0 
        ) {
          console.log();
        } else {
          console.log(i);
        }
      }
}

// 15. javascript program to find factroial of a number 

{
    let ans = 1;

    function factroial(n) {
        if(n == 0)
            return 1;
        for(i =2; i <=n; i++){
            ans = ans*i;
        }
        return ans;
    }
}
// console.log(factroial(5));

// 16. javascript program to display multipacation table 

{
    let num = 5;

    for(let i =1; i<=num; i++){
        console.log(`${num} * ${i} = ${num*i}`)
    }
}

// 17. JavaScript Program to Print the Fibonacci Sequence 

{
    let num = 5;
    let n1 = 0;
    let n2 = 1;
    let nextTerm;

    console.log(n1)
    console.log(n2)

    nextTerm = n1 + n2;

    while(nextTerm <= num){
        console.log(nextTerm);
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }

}

// 18. JavaScript Program to Check Armstrong Number

{
    
}

// 20. JavaScript Program to Make a Simple Calculator

{

    // const operator = prompt('Enter operator ( either +, -, * or / ): ');


// let number1 = 5;
// let number2 = 10;

// let result;

// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// console.log(`${number1} ${operator} ${number2} = ${result}`);
}

// 21. JavaScript Program to Find the Sum of Natural Numbers
{
let num = 5;
let sum = 0;

for(let i=1; i<=num; i++){
    sum +=i;
}
console.log(sum)

}
// 22. JavaScript Program to Check if the Numbers Have Same Last Digit

{
    const a = 11;
    const b = 22;
    const c = 30;

    const result1 = a % 10;
    const result2 = b % 10;
    const result3 = c % 10;

    if(result1 == result2 && result1 == result3){
        console.log(`${a}, ${b} and ${c} have the same last digit.`);
    }
    else{
        console.log(`${a}, ${b} and ${c} have different last digit.`);
    }
}

// 23. JavaScript Program to Find HCF or GCD

// 24. JavaScript Program to Find LCM

// 25. JavaScript Program to Find the Factors of a Number

{

}

// 26 .JavaScript Program to Find Sum of Natural Numbers Using Recursion

{

}
