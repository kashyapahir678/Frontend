import { combineReducers } from "redux";
import reducer, {ObjReducer} from "./Reducer";

const RootReducer = combineReducers({
    reducer1 : reducer,
    reducer2 : ObjReducer
})

export default RootReducer