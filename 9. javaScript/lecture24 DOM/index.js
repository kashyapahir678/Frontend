
function AddId(){
  let dom = document.getElementsByTagName('h1')[0]
  console.log(dom);
  dom.setAttribute('id' , `firstHeading${parseInt(Math.random()*100)}`)
}

function RemoveId(){
  let dom = document.getElementsByTagName('h1')[0]
  console.log(dom);
  dom.setAttribute('id' , ``)
}

console.log(document.getElementById('firstHeading'));
console.log(document.getElementById('firstHeading').id);
let dom1 = document.getElementById('firstHeading').className
console.log(dom1);
let dom2 = document.getElementById('firstHeading').classList[1]
console.log(dom2);  



/* Javascript Document Object Model Method [ DOM ] */

// document.getElementById()

// {
//     document.getElementById('heading').innerHTML = "Hello , Javascript DOM"
// }

// {
//     const changeContent = () => {
//         console.log( document.getElementById('heading').innerHTML = "Hello , Javascript DOM");

//     }

//     console.log(changeContent());

// }

// {
//   function changeContent() {
//     document.getElementById("heading").innerHTML = "Hello , Javascript DOM";
//     console.log(changeContent);
//     document.getElementById("heading").style.backgroundColor = "purple";
//     document.getElementById("heading").style.color = "white";
//   }

//   function hideContent() {
//     document.getElementById("heading").style.display = "none";
//   }

//   function showContent() {
//     document.getElementById("heading").style.display = "block";
//   }
// }



// console.log(document.getElementById('heading').id)

// console.log(document.getElementsByTagName('h1'))
// console.log(document.getElementsByTagName('h1')[1])
// console.log(document.getElementsByTagName('h1')[0])

// console.log(document.getElementsByTagName('h1')[1].style.backgroundColor = "red");

// console.log(document.getElementsByClassName('box')[0]);
// console.log(document.getElementsByClassName('box')[1]);

// console.log(document.getElementsByClassName('box')[1].style.color = "white");

// console.log(document.getElementsByName('heading Text'));

// console.log(document.getElementsByTagNameNS('http://www.w3.org/1999/xhtml' , 'h1')[3]); 