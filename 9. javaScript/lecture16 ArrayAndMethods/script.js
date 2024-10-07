
// Array.prototype.copyWithin()

// The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

// copyWithin(target, start)
// copyWithin(target, start, end)

{
    let array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h']

    let array1 = array.copyWithin(2,4)
    console.log(array1)

    let array2 = array.copyWithin(3,2);
    console.log(array2)

    let array3 = array.copyWithin(0 , 2 , 4)
    console.log(array3);
}

// Array.prototype.entries()

// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

// entries()

{
    let array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h']

    let arr1 = array.entries();

    console.log(arr1.next().value);
    console.log(arr1.next().value);
    console.log(arr1.next().value);
    console.log(arr1.next().value);
    console.log(arr1.next().value);
    console.log(arr1.next().value);
    console.log(arr1.next().value);
    console.log(arr1.next().value);
    console.log(arr1.next().value);
}

// Array.prototype.every()

// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// every(callbackFn)
// every(callbackFn, thisArg)

{
    let array = [10 ,20, 30, 40, 50];

    let arr1 = array.every((item) => item >= 10)

    console.log(arr1)
}


// Array.prototype.fill()

// The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

// fill(value)
// fill(value, start)
// fill(value, start, end)
// shallow copy

{
    let array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h']

    let arr1 = array.fill('O');
    console.log(arr1)

    let arr2 = array.fill('50',3);
    console.log(arr2)

    let arr3 = array.fill('10', 0, 2);
    console.log(arr3)

    console.log(array)
}

// Array.prototype.filter()

// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function...

// filter(callbackFn)
// filter(callbackFn, thisArg)

{
    // let num = [10 , 20 , 30 , 40 , 50]

    // let array1 = num.filter((num) => num < 40)

    // console.log(array1);

    // let fruits = ['apple' , 'mango' , 'kiwi' , 'watermelon' , 'orange']

    // let array2 = fruits.filter((char) => char.length >= 5)

    // console.log(array2);

    // let proffesion = [
    //     {
    //         name:'kiran',
    //         occu:'doctor',
    //         type:'orthopedic',
    //         age:20
    //     },
    //     {
    //         name:'karan',
    //         occu:'doctor',
    //         type:'phycological',
    //         age:25
    //     },
    //     {
    //         name:'kirtan',
    //         occu:'gardener',
    //         type:'service',
    //         age:30
    //     },
    //     {
    //         name:'kishan',
    //         occu:'gardener',
    //         type:'cutting',
    //         age:32
    //     },
    //     {
    //         name:'ketan',
    //         occu:'developer',
    //         type:'frontend',
    //         age:18
    //     }
    // ]

    // let array3 = proffesion.filter((data) => data.age <= 30)

    // let array4 = proffesion.filter((data) => data.occu === 'doctor')

    // console.log(array3);

    // console.log(array4);

}

// Array.prototype.find()

// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// find(callbackFn)
// find(callbackFn, thisArg)

{
    let array = [10, 20, 30, 40];

    let arr1 = array.find((data) => data >= 15);

    console.log(arr1)
}

// Array.prototype.findIndex()

// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)

{
    let array = [10, 20, 30, 40];
    
    let arr1 = array.findIndex((data) => data >= 15);
    console.log(arr1)

    let array2 = array.findIndex((data) => data == 8)
    console.log(array2)

    let array3 = array.findIndex((data) => data < 20)
    console.log(array3) 

}

// Array.prototype.findLast()

// The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.


{
    let array = [10, 20, 30, 40];

     let array2  = array.findLast((data) => data > 5)

     console.log(array2)
}