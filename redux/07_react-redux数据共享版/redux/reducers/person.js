import { ADD_PERSON } from '../contant'


const initState = [{ id: '001', name: 'Tom', age: 20 }]
export default function personreducer (preState = initState, action)  {

    const { type, data } = action

    switch (type) {
        case ADD_PERSON:

            return [data, ...preState]

        default:
            return preState
    }
}