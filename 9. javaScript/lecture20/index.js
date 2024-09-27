
/* ES5 - ES6 */
{
console.log("first element")

console.log("second element")


 function print() {
     return console.log("third element");
};

setTimeout(() => {
  print();
}, 2000);

let interId = setInterval(() => {
  print();
}, 2000)

clearInterval(interId)
}

/* Javascript Callback Function */

{
  function callback(){
    return console.log('callback function');
  }
  
  function sum(a , b) {
    callback()
    return a + b
  }
}
console.log(sum(10 , 10));


// IIFE Function [immidiately invoked Function Expression]

{
  (
    function sum() {
      return console.log('LIFE Function')
    }
  )()
}

{
  const sum = (() => {return console.log("2 LIFE Function");})()
}