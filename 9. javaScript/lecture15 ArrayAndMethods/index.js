
// /* Javascript Array And It's Methods */

{
    let array1 = [10]
    console.log(array1);
    let array2  = new Array(10)
    console.log(array2);
    console.log(array1.length);
    console.log(array2.length);

    let array3 = [];
    array3.length = 20;

    console.log(array3)

    array3.push('10');
    array3.push('20');
    array3.push('30');
    array3.push('40');

    console.log(array3)

    array3.unshift('50')
    array3.unshift('60')
    array3.unshift('70')
    array3.unshift('80')

    console.log(array3)

    array3.pop();
    array3.pop();

    console.log(array3)

    array3.shift();
    array3.shift();

    console.log(array3)
}

// /* Javascript Array.from() method */

// // Array.from(arrayLike)
// // Array.from(arrayLike, mapFn)
// // Array.from(arrayLike, mapFn, thisArg)

// // The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.


// {
//     let array = Array.from('abcdefghijk')
//     console.log(array);
//     array[0] = 20
//     console.log(array)
// }

// {
//     let array = [10 , 20 , 30 , 40 , 50]
//     let array1 = [...array]

//     console.log(array1);

//     array1[0] = 60

//     console.log(array);
//     console.log(array1);
// }

// // The Array.isArray() static method determines whether the passed value is an Array

// // Array.isArray(value)


// {
//     let array = Array.isArray([10 , 20 , 30])
//     console.log(array);
//     let array1 = Array.isArray('[10]')
//     console.log(array1);
// }

// // The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

// // Array.of()
// // Array.of(element1)
// // Array.of(element1, element2)
// // Array.of(element1, element2, /* …, */ elementN)

// {
//     let array = Array.of(10 , 20 , 30 , 40)
//     console.log(array);
// }


// Array method 

/*  Array.prototype.at() */

// The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

// at(index)

{
    let array = [10,20,30,40,50,60];

    let array1 = array.at(5);

    console.log(array1)

    let array2 = array.at(-2);
    console.log(array2)

    console.log(array)
}

/*  Array.prototype.concat() */

// The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// concat()
// concat(value1)
// concat(value1, value2)
// concat(value1, value2, /* …, */ valueN)

{
    let array1 = ['apple' , 'kiwi' , 'mango']
    let array2 = ['maths' , 'english' , 'chemistry',  'physics']
    let array3 = ['walking' , 'running', 'talking' , 'dancing' , 'sleeping']

    let arr1 = array1.concat(array2);
    console.log(arr1)

    let arr2 = array1.concat(arr1);

    console.log(arr2)

    let arr3 = array1.concat(array2, array3);
    console.log(arr3)
}
