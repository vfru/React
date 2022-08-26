import React, { useReducer } from 'react'

const initalState = {
    count: 0,
}

const reducer = (preState , action) => {
    const { type } = action
    const newState = {...preState}
    switch (type) {
        case 'add':
            newState.count++
            return newState ;

        case 'sub':
            newState.count--
            return newState ;
        default:
            return preState;
    }
}



export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initalState)
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: 'add'
                })
            }} >+</button>

            {state.count}
            
            <button onClick={() => {
                dispatch({
                    type: 'sub'
                })
            }}>-</button>
        </div>
    )
}
