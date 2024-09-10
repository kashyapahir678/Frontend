
// 1. write a program that calculates the sum of all numbers from 1 to 100 using a for loop in js

// const number = 100;

// let sum = 0;

// for( i=1; i<=100; i++){
//     sum= sum + i;
// }
// console.log(sum);


// 2. Write a program that prints the multiplication table of a givennumber (for example, 5).

// let num = 5;

// for(let i=1; i<=10; i++){
//     let result = i * num;
//     console.log(num + " * " + i + " = " + result);
// }


// 3. Write a program that calculates the factorial of a given number (forexample, 5!).
    
// let fnumber = 10;
// let fact =1;

// for(let i=1; i<=fnumber; i++){
//     fact *= i;
// }
// console.log(`factroal of ${fnumber} is ${fact}`)


// 4. Write a program that prints the first 10 numbers in the Fibonacci sequence.

// let Fibonacci = 7;

// let a = 0;
// let b = 1;
// let c;

// for(let i=1; i<=Fibonacci; i++){
//     console.log(a);
//     c = a +b;
//     a = b;
//     b = c;
// }


// 5. Write a program that reverses a given string.

// function reverse(oldstr) {
//     let newstr = "";
//     for(let i = oldstr.length - 1; i >= 0; i--){
//         newstr += oldstr[i];
//     }
//     return newstr;
// }


// console.log(reverse("hello"))


// 6. Write a program that calculates the sum of all elements in an array.

// const arr = [10, 20, 30, 40, 50];
// let arrsum = 0;

// for(let i=0; i<arr.length; i++){
//     arrsum += arr[i]
// }
// console.log(arrsum)


// 7. Write a program that finds the largest number in an array.

// const arr1 = [10, 20, 30, 100, 50];
// let largest = 0;

// for(let i=0; i<=arr1.length; i++){
//     if(arr1[i] > largest){
//         largest = arr1[i]
//     }
// }
// console.log(largest)


// 8. Write a program that counts the number of vowels in a given string.

let name5 = "meet"; 
let arr5 = ['a','e','i','o','u']
let length = 0;

for(let i=1; i<=name5.length; i++){
    if(arr5[0] == name5[i] || arr5[1] == name5[i] || arr5[2] == name5[i] || arr5[3] == name5[i] || arr5[4] == name5[i]){
        // length += 1;
        console.log(length+1)
    }
    else{
        length=0;
    }
    
}
console.log(length, "length")