import {ADDITION,SUBTRACTION} from './contant'


const firstState = 0
export default function countReaducer  (preState = firstState, action)  {
    const { type, data } = action
    switch (type) {
        case ADDITION:

            return (preState + data * 1)
        case SUBTRACTION:

            return (preState - data * 1)


        default:
            return preState
    }
}


