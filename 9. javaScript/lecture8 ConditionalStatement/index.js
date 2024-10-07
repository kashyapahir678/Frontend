

// For of Loop in javascript 

// let array = [10]
// if value is single and integer so print is value 
// let array1 = new Array(20); 

// console.log(array)
// console.log(array1.length)

// console.log(typeof array)
// console.log(typeof array1);

// let newArray = ['kiwi', 'apple', 'mango','orange','graps'];

// console.log(newArray);

// --------------access ARRAY 
// console.log(newArray[0])
// console.log(newArray['1'])

// console.log(newArray[0])
// console.log(newArray[1])
// console.log(newArray[2])
// console.log(newArray[3])
// console.log(newArray[4])

// console.log(newArray.length)

// for(let value of newArray){
//     console.log(value)
// }



// For in loop in javascript 

let obj = {1: '11', 2: "22"}
let obj2 = new Object({1: "111", 2: '222'})

// console.log(obj)
// console.log(obj2)

// console.log(obj === obj);   - false
// console.log(array === array);   - false
// console.log(str === str1);   - true

// ---------access OBJECT 
// console.log(obj2[1])
// console.log(obj[2])
// console.log(obj2['2'])
// console.log(obj['1'])

for(let key in obj){
    console.log(`${key} = ${obj[key]}`)
}
