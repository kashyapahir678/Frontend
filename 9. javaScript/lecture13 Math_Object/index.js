/* Javascript Math.Object Method */

/* Static methods */

// Math.abs()
// Math.ceil()
// Math.floor()
// Math.max()
// Math.min()
// Math.pow()
// Math.random()
// Math.round()                                                                                     
// Math.sin()
// Math.sqrt()
// Math.trunc()
// Math.sign()
// Math.cos()
// Math.log()
// Math.log10()                                                          

// Math.log2()

/* Static properties */

// Math.E
// Math.PI


{
    let meth1 = Math.PI;
    console.log(meth1)
}

{
    let meth = Math.E;
    console.log(meth)
}

{
    let math =Math.abs(-20);
    let math1 =Math.abs(0);
    let math3 =Math.abs(40);
    console.log(math)
    console.log(math1)
    console.log(math3)
}

{
    let math = Math.ceil(20.48);
    let math1 = Math.ceil(15.99);
    console.log(math)
    console.log(math1)
}

{
    let math = Math.floor(21.40);
    let math1 = Math.floor(48.80)
    console.log(math)                    
    console.log(math1);
}

{
    let math = Math.max(20, 50, 9 , 91, 25, 67);
    console.log(math)
}

{
    let math = Math.min(20, 50, 9 , 91, 25, 67);
    console.log(math)
}

{
    let math = Math.pow(2, 5);
    console.log(math)
}

{
    let math = Math.ceil(Math.random()*100)
    console.log(math)
}

{
    let math = Math.round(10.25);
    let math1 = Math.round(16.52);
    console.log(math)
    console.log(math1)
}

{
    let math = Math.sqrt(36);
    let math1 = Math.sqrt(121);
    console.log(math)
    console.log(math1)
}

{
    let math = Math.trunc(10.50)
    console.log(math);
}

{
    let math = Math.sin(30*3.14/180)
    console.log(math);
}


{
    let math21 = Math.sign(56)
    let math22 = Math.sign(-56)
    let math23 = Math.sign(0)
    console.log(math21);
    console.log(math22);
    console.log(math23);
}

{
    let math24 = Math.cos(60*3.14/180)
    console.log(math24);
}

{
    let math = Math.log(10);
    console.log(math)
}