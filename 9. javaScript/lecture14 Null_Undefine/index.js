// /* Javascript NaN , null  , undefined  */

// {
//     var x;
//     console.log(x);
// }
// {
//     let y;
//     console.log(y);
// }
// {
//     const z;
//     console.log(z);
// }
// {
//   console.log(undefined == undefined);
//   console.log(undefined == null);
//   console.log(null == null);
//   console.log(undefined == NaN);
//   console.log(NaN == NaN);
//   console.log(null == NaN);
//   console.log(Infinity == undefined);
//   console.log(Infinity == null);
//   console.log(Infinity == NaN);
//   console.log(Infinity == Infinity);
//   console.log(-Infinity == Infinity);
// }

// /* Javascript Number Method */

// {
//   let num = Number("10");
//   console.log(num);
//   console.log(typeof num);
// }

// // Number.isFinite(value)

{
  let num1 = 0 / 1;
  console.log(num1);
  let num2 = 1 / 0;
  console.log(num2);
}
{
  let num3 = Number.isFinite(0 / 1);
  console.log(num3);
  let num4 = Number.isFinite(0 / 0);
  console.log(num4);
  let num5 = Number.isFinite(12 / 6);
  console.log(num5);
}

// // Number.isInteger(value)

{
  let num6 = Number.isInteger(10);
  console.log(num6);
  let num7 = Number.isInteger(10.1);
  console.log(num7);
}

// // Number.isNaN(value)

// {
//   let x = 10;
//   let y = "10F";
//   let z = x * y;
//   console.log(z);

//   let num8 = Number.isNaN(z);
//   console.log(num8);
//   let num9 = Number.isNaN(NaN);
//   console.log(num9);
// }

// // Number.isSafeInteger(testValue)

// {
//   let x = 10101010122222n;
//   console.log(x);
//   console.log(typeof x);
//   let num10 = Number.isSafeInteger(x);
//   console.log(num10);
// }

// // Number.parseFloat()

{
  let num11 = Number.parseFloat(10.15);
  let num12 = Number.parseFloat(10.01);
  console.log(num11);
  console.log(num12);
}

// // Number.parseInt()

{
  let num13 = Number.parseInt(10.15);
  let num14 = Number.parseInt(10.51);
  console.log(num13);
  console.log(num14);
}

// // Number.prototype.toExponential()


// // toExponential()
// // toExponential(fractionDigits)

// {
//     let num = 560065

//     console.log(num.toExponential());
//     console.log(num.toExponential(1));
//     console.log(num.toExponential(2));
//     console.log(num.toExponential(3));
// }


//Number.prototype.toFixed()

// {
//     let num = 56.0065
//     console.log(num.toFixed());
//     console.log(num.toFixed(1));
//     console.log(num.toFixed(2));
//     console.log(num.toFixed(3));
//     console.log(num.toFixed(4));
// }

// Number.prototype.toLocaleString()
// Number.prototype.toString()

// {
//     let num = 5600695
//     let num1 = num.toString()
//     console.log(typeof num);
//     console.log(typeof num1);  
// }

// Number.prototype.toPrecision()

// {
//     let num = 56.2365
//     console.log(num.toPrecision())
//     console.log(num.toPrecision(1))
//     console.log(num.toPrecision(2))
//     console.log(num.toPrecision(3))
//     console.log(num.toPrecision(4))
//     console.log(num.toPrecision(5))   
// }