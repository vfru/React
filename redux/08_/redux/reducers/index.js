import {combineReducers} from 'redux'
import countReaducer from './count'
import personReaducer from './person'
//汇总Readucer
 const allReaducer = combineReducers({
    he:countReaducer,
    rens:personReaducer
})


export default allReaducer