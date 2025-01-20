import React, { useReducer } from 'react'

const intialvalue = [{cake:25}]
// const intialvalue = {cake:20}

const reducer = (state,action) => {
    switch(action.type){
        case "INCREMENT":
            return [{...state[0], cake: state[0].cake + 1}]
        case "DECREMENT":
            return [{...state[0], cake: state[0].cake - 1}]
        default : return state
    }
}

const UseReducer = () => {

    const [state,dispatch] = useReducer(reducer, intialvalue)
    console.log(state,"state")

  return (
    <div>
        <h2>{state[0].cake}</h2>
        <button onClick={() => dispatch({type : "INCREMENT"})}>Increment</button>
        <button onClick={() => dispatch({type : "DECREMENT"})}>Decrement</button>
    </div>
  )
}

export default UseReducer