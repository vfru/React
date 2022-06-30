import { legacy_createStore as createStore,applyMiddleware} from "redux";
import countReaducer from './count_Readucer'
import thunk from "redux-thunk";



export default  createStore(countReaducer,applyMiddleware(thunk))