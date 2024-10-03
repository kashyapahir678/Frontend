
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

    console.log(a, b)

    c = a;
    a = b;
    b = c;

    console.log(a, b)
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
    let randomNum = Math.trunc(Math.random() * 1000);
    console.log(randomNum)
}

// 11. Javascript program to check if a number is positive , negetive or Zero 

{
    let num = 2;
    if (num >= 1) {
        console.log("The number is postive")
    }
    else if (num == 0) {
        console.log("The number is Zero")
    }
    else {
        console.log("The number is Negative")
    }
}

// 12. Javascript Program to find the largest Among Three number 

let a = 10;
let b = 50;
let c = 30;

if (a > b && a > c) {
    console.log("A is largest")
}
else if (b > a && b > c) {
    console.log("B is largest")
}
else {
    console.log("C is largest")
}

//  13.  JavaScript Program to Check Prime Number 

{
    let number = 11;

    if (
        number % 2 == 0 ||
        number % 4 == 0 ||
        number % 6 == 0 ||
        number % 8 == 0 ||
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
            i % 2 == 0 ||
            i % 3 == 0 ||
            i % 4 == 0 ||
            i % 5 == 0 ||
            i % 6 == 0 ||
            i % 7 == 0 ||
            i % 8 == 0 ||
            i % 9 == 0 ||
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
        if (n == 0)
            return 1;
        for (i = 2; i <= n; i++) {
            ans = ans * i;
        }
        return ans;
    }
}
// console.log(factroial(5));

// 16. javascript program to display multipacation table 

{
    let num = 5;

    for (let i = 1; i <= num; i++) {
        console.log(`${num} * ${i} = ${num * i}`)
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

    while (nextTerm <= num) {
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

    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    console.log(sum)

}
// 22. JavaScript Program to Check if the Numbers Have Same Last Digit

{
    const a = 30;
    const b = 22;
    const c = 30;

    const result1 = a % 10;
    const result2 = b % 10;
    const result3 = c % 10;

    if (result1 == result2 && result1 == result3) {
        console.log(`${a}, ${b} and ${c} have the same last digit.`);
    }
    else {
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
    function sum(n) {
        if (n !== 0) {
            return n + sum(n - 1)
        }
        else {
            return n;
        }
    }

    let n = 10;
    console.log(sum(n))
}

// 27 . Javascript program to guess random number 

{
    let random = Math.trunc(Math.random() * 10);
    console.log(random)
}

// 28. Javascript program to suffle deck of cards 

// 29. JavaScript Program to Display Fibonacci Sequence Using Recursion

{
    let n = 5;

    function Fibonacci(n) {
        if (n < 2) {
            return n;
        }
        else {
            return Fibonacci(n - 1) + Fibonacci(n - 2);
        }
    }

    if (n <= 0) {
        console.log("Enter a positive number")
    }
    else {
        for (let i = 0; i < n; i++) {
            console.log(Fibonacci(i))
        }
    }
}

// 30. JavaScript Program to Find Factorial of Number Using Recursion

// 31. JavaScript Program to Convert Decimal to Binary

{
    let number = 50;

    console.log(number.toString(2))
}

// 32. JavaScript Program to Find ASCII Value of Character

{
    let string = "A";

    const result = string.charCodeAt(string);

    console.log(result)
}

// 33. Javascript program check whether a string palidrone or Not 

{

}

// 34. Javscript program to Sort words in Alpabetical Order 

{
    let string = "this is javscript sort word";

    let word = string.split(' ');

    let sort = word.sort()

    let join = sort.join(" ")

    console.log(join)
}

// 35. Javascript program to replace character of strings 

{
    let string = "This is Python strings method";

    let replacestr = string.replace("Python", "Javscript");

    console.log("old", string, "new = ", replacestr)
}

// 36. Javascript program to reverse a string 

{
    let string = "Hello world!!!";

    let splitStr = string.split("")
    let reverseStr = splitStr.reverse();
    let joinStr = splitStr.join(" ");

    console.log(joinStr)
}

// 37. Javscript program to create object in differnet ways 

{
    // way 1 
    const person = {
        name: "hello",
        age: 22,
        hobbies: "coding"
    }
    console.log(typeof person)

    // way 2
    const person2 = new Object({
        name: "hello",
        age: 22,
        hobbies: "coding"
    })
    console.log(typeof person2)
}

// 38. Javscript peogramt to check the number of Occurrences of a character in the string 

{
    // let name = school;

}

// 39. Javscript program to convert the first letter of a string into uppercase 

{
    let string = "javscript";
    console.log(string)
    console.log(string.charAt(0).toUpperCase() + string.slice(1));
}

// 40. Javscript program to count the number of vowels in a string 

{
    let str = "hello world!!!";
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowel.includes(letter)) {
            count++;
        }
    }
    console.log(count)
}

// 41. javscript program to remove property from a object 

{
    const person = {
        name: "hello",
        age: 22,
        hobbies: "coding"
    }
    delete person.hobbies;

    console.log(person)
}

// 42. javscript program to check whether a string starts and ends with certain characters 

{
    // let regex = /a
}

// 43. javscript program to check if a key exists in an object 

{
    const person = {
        name: "hello",
        age: 22,
        hobbies: "coding"
    }

    const key = "name" in person;
    if (key) {
        console.log("key is exists")
    }
    else {
        console.log("key not exists")
    }
}

// 44. javascript program to clone a js object 

{
    const person = {
        name: "hello",
        age: 22,
        hobbies: "coding"
    }

    const clone = Object.assign({}, person);
    console.log(clone)

    clone.name = "peru";

    console.log(clone.name)
    console.log(person)
}

// 45. Javascript program to loop through an object 

{
    const person = {
        name: "hello",
        age: 22,
        hobbies: "coding"
    }

    for (let key in person) {
        let value;
        value = person[key]
        console.log(key + " " + value)
    }
}

// 46. Javscript program to merge peroperty of two object 

{
    const person = {
        name: "hello",
    }
    const person2 = {
        gender: 'male'
    }

    const merge = Object.assign(person, person2);
    console.log(merge)
}

// 47. Javascript program to count the Number of keys properies in an object

{
    const person = {
        name: "hello",
        age: 22,
        hobbies: "coding",
        gender: "male"
    }

    let count = 0;

    for (let key in person) {
        count++;
    }
    console.log(count)
}

// 48. javascript program to Add key/value pair to an object 

{
    const person = {
        name: "hello",
        age: 22,
        hobbies: "coding"
    }
    person.height = 3.2;
    console.log(person)
}

// 49. javscript program to Replace All Occurrences of a string 

{
    const string = "This is red house and red car";
    const regex = /red/gi;
    const newtext = string.replace(regex, "blue");
    console.log(newtext)

}

// 50. Javascript program to create Multiline strings 

{
    // example 1 
    const string = `this is 
    string`;
    // example 2 
    const string2 = "this is \n" +
        "string"
    console.log(string)
    console.log(string2)
}

// 51. JavaScript Program to Format Numbers as Currency Strings

{
    const number = 5648.1258;

    const result = '$' + number.toFixed(2);
    console.log(result)
}

// 52. JavaScript Program to Generate Random String

{
    const randomString = Math.random().toString(36).substring(2, 7);
    console.log(randomString)
}

// 53. JavaScript Program to Check if a String Starts With Another String

{
    const string = 'This is javascript';
    const start = "This"

    if (string.startsWith(start)) {
        console.log("true")
    }
    else {
        console.log("false")
    }
}

// 54. JavaScript Program to Trim a String

{
    const string = '                  This is apple                ';
    console.log(string)
    const trim = string.trim();
    console.log(trim)
}

// 55. JavaScript Program to Convert Objects to Strings

{
    const person = {
        name: 'Jack',
        age: 27
    }

    const str = JSON.stringify(person);
    console.log(str)
}

// 56. JavaScript Program to Check Whether a String Contains a Substring

{
    let string = "this is apple";
    let addStr = "banana";

    if (string.includes(addStr)) {
        console.log("The string contain")
    }
    else {
        console.log("the string does not contain")
    }
}

// 57. JavaScript Program to Compare Two Strings

{
    let string1 = "kiwi";
    let string2 = "apple";

    if (string1 === string2) {
        console.log("string are equal")
    }
    else {
        console.log("String are not equal")
    }
}

// 58. JavaScript Program to Encode a String to Base64
// btoa() method is used to convert the string to Base64.
// atob() method is used to convert the Base64 to a string
{
    const str = "This is string method ";

    const result = window.btoa(str);
    console.log(result)

    const result1 = window.atob(result);
    console.log(result1)
}

// 59. JavaScript Program to Replace all Instances of a Character in a String

{
    let string = "this is apple and that is apple";

    console.log(string.replaceAll("apple", "kiwi"))
}

// 60. JavaScript Program to Replace All Line Breaks with

{
    let str = `this is 
    line break 
    string `
    let result = str.split("\n").join("<br/>");
    console.log(result)
}

// 61. JavaScript Program to Display Date and Time

{
    let date = new Date();
    let getdate = date.getDate();
    console.log(getdate)
    let gettime = date.getTime();
    console.log(gettime)
}


// 62. JavaScript Program to Check Leap Year

{
    let year = 2000;

    if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        console.log("is leap year")
    } else {
        console.log("is not leap year")
    }
}

// 63. JavaScript Program to Format the Date

{
    let currentDate = new Date();
    let getyear = currentDate.getFullYear();
    let getdate = currentDate.getDate();
    let getmonth = currentDate.getMonth() + 1;
    console.log(currentDate)

    console.log(`${getdate}-${getmonth}-${getyear}`)
    console.log(`${getdate}/${getmonth}/${getyear}`)
}

// 64. Javascript Program to Display Current Date

{
    let currentDate = new Date();
    let date = currentDate.toDateString();
    console.log(date)
}

// 65. JavaScript Program to Compare The Value of Two Dates

{
    let date1 = new Date();
    let date2 = new Date();

    let compare1 = date1 < date2
    let compare2 = date1 <= date2
    let compare3 = date1 > date2
    let compare4 = date1 >= date2

    console.log(compare1)
    console.log(compare2)
    console.log(compare3)
    console.log(compare4)
}

// 66. JavaScript Program to Create Countdown Timer

{

}

// 67. JavaScript Program to Remove Specific Item From an Array

{
    let arr = ["apple", "mango", "kiwi"];

    let remove = arr.pop();
    console.log(arr)
}

// 68. JavaScript Program to Check if An Array Contains a Specified Value

{
    let arr = ["apple", "mango", "kiwi"];

    let value = arr.includes("mango")

    if (value) {
        console.log("Array contain value")
    } else {
        console.log("Array not contain value")
    }
}

// 69. JavaScript Program to Insert Item in an Array

{
    let arr = ["apple", "mango", "kiwi"];

    let add = arr.unshift("Banana");
    console.log(arr)
}


// 70. JavaScript Program to Append an Object to an Array

{
    let arr = [1, 2, 3];

    let obj = { x: 10, y: 16 };

    console.log(arr.push(obj), "Array is - ", arr)
}

// 71. JavaScript Program to Check if An Object is An Array

{
    let arr = [1, 2, 3];

    const result = Array.isArray(arr);
    if (result) {
        console.log("is an array")
    } else {
        console.log("is not an array")
    }
}

// 72. JavaScript Program to Empty an Array

{
    let arr = [1, 2, 3, 4, 5];
    arr = [];
    console.log(arr);

}

// 73. JavaScript Program to Add Element to Start of an Array

{
    let arr = [1, 2, 3, 4, 5];

    let add = arr.unshift(10);
    console.log(arr)

}

// 74. JavaScript Program to Remove Duplicates From Array

{
    let arr = [1,5,6,9,5];
    let arr1 = [];

    for(let i of arr){
        if(arr1.indexOf(i) == -1){
            arr1.push(i)
        }
    }

}

