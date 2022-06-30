import { combineReducers } from "redux";
import personreducer from './person'

const allReducer = combineReducers({
     personreducer,
})


export default allReducer