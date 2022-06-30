import {ADDITION,SUBTRACTION} from '../contant'

export const AddCount=(data)=>({type:ADDITION,data})

export const SubCount=(data)=>({type:SUBTRACTION,data})

export const AddWaitCount=(data,time)=>{
    return(dispatch)=>{
        setTimeout(()=>{
            dispatch(AddCount(data))
        },time)
    }

}
