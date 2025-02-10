import { BUY_ITEM, OBJ_ITEM } from "./Constant"

const intialvalue1 = 20
const intialvalue2 = [{id : 1, name: "kashyap"}]

 const reducer = (state=intialvalue1,action) => {
    switch(action.type){
        case BUY_ITEM : return state + 1
        default : return state
    }
}

export const ObjReducer = (state=intialvalue2,action) => {
    switch(action.type){
        case OBJ_ITEM : return [...state, {id : state.id + 1}]
        default : return state
    }
}

export default reducer

