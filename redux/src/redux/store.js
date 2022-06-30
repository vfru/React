import { legacy_createStore as createStore} from 'redux'
import allReducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'


export default  createStore(allReducer,composeWithDevTools())