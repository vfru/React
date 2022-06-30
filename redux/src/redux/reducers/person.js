import { ADDPERSON } from '../contant'


const initState = [
    { id: '001', name: 'Tom',  age: '18' },
    { id: '002', name: 'jeff', age: '17' }
]

export default function personReducer(preState=initState, action) {
    const{type,data}=action
    switch (type) {
        case ADDPERSON:
            
            return[data,...preState]
    
        default:
            return preState
    }
}