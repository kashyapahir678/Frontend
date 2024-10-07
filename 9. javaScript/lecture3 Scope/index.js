

/* Javascript Scope */

/* var keyword */

var item1 = "car"

console.log(item1);

var item1 = "hello"

console.log(item1);

{
    var item2 = "javascript"
}

console.log(item2);


/* let keyword */

let x = 20

console.log(x);

x = 50

console.log(x);

{
    let  y = 50
    console.log(y);
}

console.log(x);

// console.log(y);

// console.log(item3);

// let item3 = "helloworld"

{
    let i1 , i2 , i3;
    i1 = 10
    i2 = 20
    i3 = 30

    console.log(i1);
    console.log(i2);
    console.log(i3);

}

{
    let x1 , y1 , z1;
    x1 = 100
    y1 = 200
    z1 = 300

    console.log(x1);
    console.log(y1);
    console.log(z1);

}

{
    let x2 , y2 , z2;
    x2 = 1000
    y2 = 2000
    z2 = 3000

    console.log(x2);
    console.log(y2);
    console.log(z2);
}

/* const Keyword */

const item5 = "HTML"


{
    const item5 = "CSS"
    console.log(item5);
}

{
    console.log(item5);
}

// Scope of variables
// Redeclaration and reassignment
// Hoisting

/* Hoisting */

{
    var a , b , c;
    
    a = 50;
    b = 70;
    c = 90;
    
    console.log(a);
    console.log(b);
    console.log(c);
}

{
    let x2 , y2 , z2;
    x2 = 1 
    y2 = 2
    z2 = 3

    console.log(x2);
    console.log(y2);
    console.log(z2);
}

{

// const a1 , a2 , a3

}
















 