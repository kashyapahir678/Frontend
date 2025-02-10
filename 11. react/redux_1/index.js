const redux = require("redux");

// store 

const createStore = redux.createStore

// redux action 

const general_item = () => {
    return {
        type: 'GENRAL_ITEM',
        info: 'first redux action'
    }
}

const electric_item = () => {
    return {
        type: 'ElECTRIC_ITEM',
        info: 'second redux action'
    }
}

const profle = () => {
    return{
        type : "PROFILE",
        info: 'profile action'
    }
}


// intialstate 

// let intialstate = 5;

const intialstate = ['book',5000,undefined]
    // {
    //     name: "hello world",
    //     age: "infinity"
    // }


// reducer 

const ItemReducer = (state = intialstate, action) => {
    switch (action.type) {
        // case "GENRAL_ITEM": return state * 2
        // case "ElECTRIC_ITEM": return intialstate * 5
        case "PROFILE" : return intialstate
        default: return state
    }

}

// create store 

const store = createStore(ItemReducer);


console.log("store", store)

console.log("intialstate", store.getState())

store.subscribe(() => console.log('updated state', store.getState(), intialstate))
// store,subscribe(() => console.log("update elctric state", store.getState()))

store.dispatch(general_item())
store.dispatch(electric_item())
store.dispatch(general_item())
store.dispatch(electric_item())
store.dispatch(profle())




// create store
// store = create store  -  { dispatch(), subscribe(), getState(), replaceReducer()}
