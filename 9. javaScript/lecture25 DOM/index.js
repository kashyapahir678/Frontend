/* Javascript Document Object Model Method [ DOM ] */

/* javascript DOM innerHTML , innerText , textContent */

/* New Content / Element Javascript */

// {

//     let newElement = document.createElement('h1')
//     newElement.innerHTML = "This is Heading Tag"
//     newElement.setAttribute('id' , 'firstHeading')
//     newElement.setAttribute('class' , 'heading')
//     document.body.appendChild(newElement)

//     console.log(newElement);
    
// }


{
   let DOM1 =  document.getElementById('firstHeading').innerHTML

   let DOM2 = document.getElementById('firstHeading').innerText

   let DOM3 = document.getElementById('firstHeading').textContent

    console.log(DOM1);

    console.log(DOM2);

    console.log(DOM3);   
}

{
    function elementStyle1(){
        let dom = document.getElementById('firstHeading')
        dom.classList.add('heading')
    }
    function elementStyle2(){
        let dom = document.getElementById('firstHeading')
        dom.classList.remove('heading')
    }
    function elementStyle3(){
        let dom = document.getElementById('firstHeading')
        dom.classList.toggle('heading')
    }
}

// {
//     let dom = document.getElementById('firstHeading').addEventListener('dblclick' , () => {
//         let dom = document.getElementById('firstHeading')
//         dom.classList.add('heading')
//     } )
// }