import { legacy_createStore as createStore,applyMiddleware,combineReducers} from "redux";
import countReaducer from './reducers/count'
import personReaducer from './reducers/person'
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
//汇总Readucer
const allReaducer = combineReducers({
    he:countReaducer,
    rens:personReaducer
})

export default  createStore(allReaducer,composeWithDevTools(applyMiddleware(thunk)))