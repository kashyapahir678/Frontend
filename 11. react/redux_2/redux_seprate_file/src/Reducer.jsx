
const intialstate ={
    Cake : 10,
    Choco : 20
}

 const Reducer  = (state = intialstate, action) => {
    switch(action.type) {
        case "BUY_CAKE" : return {
            ...state, Cake: state.Cake + 1
        }
        case "BUY_CHOCO" : return {
            ...state, Choco: state.Choco + 1
        }
        default: return state
    }

}

export default Reducer