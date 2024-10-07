/* Constructor Function In Javascript */

{
    let demo = function () {
      return console.log("Function Body");
    };
  
    demo();
  
    // new Function(functionBody);
    // new Function(arg1, functionBody);
    // new Function(arg1, arg2, functionBody);
    // new Function(arg1, arg2, /* …, */ argN, functionBody);
  
    // Function(functionBody);
    // Function(arg1, functionBody);
    // Function(arg1, arg2, functionBody);
    // Function(arg1, arg2, /* …, */ argN, functionBody);
  
    // let con = new Function('a' , 'b' , `return console.log("Constructor Function")`)
  
    // console.log(con());
    
  }
  
  /* Javascript Reguler Expression */
  
  {
    // let regEx = /[y]/
    // let regEx = /[0-9]{2 , 4}/gm
    // let regEx = /ma+n/
    // let regEx = /2$/
  
    // let result = regEx.test('hi ,  how are you')
    // let result = regEx.test('00123')
    // let result = regEx.test('man')
    // let result = regEx.test(212)
  
    // console.log(result);
    
  }

  // Task 1 
{
  const name = /^[a-z ,.'-]+$/i;

  let result = name.test("kashyap ahir");
  console.log(result)
}

// Task 2 

{
  const number = /^[7-9][0-9]{9}$/;

  let result = number.test("9771673568");
  console.log(result)
}