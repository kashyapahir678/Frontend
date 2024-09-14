

// javascript strings method 

// length 

{
    let str = "This is string";
    console.log(str)
    console.log(str.length)
}

// string at() method 

// at(index);

{
    let str = "This is at string";
    const result = str.at(5)
    console.log(result)
    let result2 = str.at(-5)
    console.log(result2);
    
}

// string charAt() method 

// charAt(index)

{
    let str = "This is charAt string"
    let result = str.charAt(6)
    console.log(result)
    // let result2 = str.charAt(-5);  -empty 
    // console.log(result2);   
    
}

// /* String charCodeAt() Method */
// charcodeAt return ascii value
// // charCodeAt(index)

{
    let str = "this is charcodeAt string"; 
    let result = str.charCodeAt(8)
    // let result2 = str.charCodeAt(-3)  -null
    // console.log(result)
}

// /* String codePointAt() Method */

// // codePointAt(index)


{
    let str = "a This is charPointAt Method!"
    console.log(str.codePointAt(0));
    // console.log(str.codePointAt(-15));  -undefine
}

// /* String concat() Method */

// // concat()
// // concat(str1)
// // concat(str1, str2)
// // concat(str1, str2, /* …, */ strN)

{
    let str1 = "hello"
    let str2 = " world"
    console.log(str1.concat(str2))
}

/* String StartWith() / EndWith() Method */

// startsWith(searchString)
// startsWith(searchString, position)

// endsWith(searchString)
// endsWith(searchString, endPosition)

{
    let str = "this is string"
    // console.log(str.startsWith("T"))  - false 
    // console.log(str.startsWith("t"))  - true 
    // console.log(str.endsWith("t"))  
    // console.log(str.endsWith("g"))  

}


/* String includes() Method */

// includes(serachStrings)
// includes(serachStrings, position)
// case-sensitive

{
    let str = "this is string"
    console.log(str.includes("is",1))
    console.log(str.includes("is",5))
    console.log(str.includes("is",10))
    // console.log(str.includes(-2));
    
}

/* String indexOf() And lastIndexOf() Method */

// indexOf(searchString)
// indexOf(searchString, position)
// case-sensitive 

{
    let str = "This is dogs is dogs"
    console.log(str.indexOf("is",5))
    console.log(str.indexOf("dogs"))
}