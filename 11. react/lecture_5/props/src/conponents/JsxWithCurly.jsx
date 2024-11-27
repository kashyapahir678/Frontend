import React from 'react'

const JsxWithCurly = () => {

    const string = "Hello world!"

    // with object 

    const person = {
        name : "John wick",
        age : 44,
        gender : "male"
    }


    {/* with Array  */}

    const arr = ["raju",50, "rakesh"]

  return (
    <>
    <div>{string}</div>

    <ul>
        <li>{person.name}</li>
        <li>{person.age}</li>
        <li>{person.gender}</li>
    </ul>


    {/* using Array  */}

    {/* <ul>
        <li>{arr[0]}</li>
        <li>{arr[1]}</li>
        <li>{arr[2]}</li>
    </ul> */}

    <ul>
            {
                arr.map((item) => {
                   return <li>{item}</li>
                })
            }
    </ul>


    </>
  )
}

export default JsxWithCurly