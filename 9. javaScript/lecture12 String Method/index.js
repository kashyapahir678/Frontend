// /* Javascript String Method */


/* String padStart() and padEnd() Method */

// padStart(targetLength)
// padStart(targetLength, padString)

// padEnd(targetLength)
// padEnd(targetLength, padString)

{
    let str = '1000'
    console.log(str.padStart(10, 0))
    console.log(str.padEnd(10, 0))
}

/* String trim() , trimStart() and trimEnd() Method */

// trim()
// trimStart()
// trimLeft()  deprecated
// trimEnd()
// trimRight()  deprecated


{
    let str = "         This is trim method                  ";
    console.log(str.length)
    let trim = str.trim()
    console.log(trim.length)

    let trimstart = str.trimStart();
    console.log(trimstart)
    console.log(trimstart.length)

    let trimend = str.trimStart();
    console.log(trimend)
    console.log(trimend.length)

}

/* String slice() , subString() Method */

// slice(indexStart)
// slice(indexStart, indexEnd)

// substring(indexStart)
// substring(indexStart, indexEnd)

{
    let str = "this is string javascript string method";
    console.log(str.slice(12))
    console.log(str.slice(0, 12))
    console.log(str.substring(12));
    console.log(str.substring(0, 12));


    console.log(str.slice(0, -5), "1")
    console.log(str.substring(0, -5), "2")

    console.log(str.slice(-20, -15));
    console.log(str.substring(-20, -25));

}

/* String Search() Method */

// search(regexp)

{
    let regx1 = /dog/g;
    let regx2 = /Dog/i;

    let str = "This dog is lazy Dog"
    console.log(str.search(regx1))
    console.log(str.search(regx2))
}

/* String toLowercase() and toUppercase Method */

// toUpperCase()
// toLowerCase()

{
    let str = "This dog is lazy Dog"
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());

}

/* String replace() and repalaceAll() Method */

// replace(pattern, replacement)
// replaceAll(pattern, replacement)

{
    let str = "This dog is lazy dog"
    console.log(str.replace("dog", "cat"));
    console.log(str.replaceAll("dog", "cat"));

}

/* String match() and matchAll() Method */

// match(regexp)
// matchAll(regexp)

{
    let str = "This dog is lazy dog"
    let reg1 = /dog/g
    console.log(str.match(reg1))
    console.log([...str.matchAll(reg1)])

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let array1 = [...array]
    let array2 = array1

    console.log(array)
    console.log(array1)
    console.log(array2)

    array[2] = 12;

    console.log(array)
}

/* String split() Method */

// split()

{
    let str = "This dog is lazy dog"

    let str1 = str.split();
    console.log(str1);

    let str2 = str1.reverse();
    console.log(str2)

    let str3 = str2.join();
    console.log(str3);



}

/* String repeat() Method */

{
    // let str = 'a';
    // console.log(str.repeat(20));

}

// String toString and valueOf method 

{
    // let str = 56235;
    // console.log(str.toString())
    // console.log(str.valueOf())
}