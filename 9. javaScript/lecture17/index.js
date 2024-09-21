

// Javascript Array method 

// Array.prototype.findLastIndex()

// The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// findLastIndex(callbackFn)
// findLastIndex(callbackFn, thisArg)

{
    let arr = [10, 20, 30, 40, 50];

    console.log(arr)

    let arr1 = arr.findLastIndex((data) => data < 50);

    console.log(arr1)
}

// Array.prototype.flat()

// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

{
    
}