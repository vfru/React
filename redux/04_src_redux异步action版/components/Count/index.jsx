import React, { Component } from 'react'
import store from '../../redux/store'
import {AddCount,SubCount,AddWaitCount} from '../../redux/count-Action'

export default class Count extends Component {

    

    toCountSum=(type)=>{
        
        const {value} = this.countValue
        
        if(type==='+'){
            store.dispatch(AddCount(value))
            
        }
        if(type === '-'){
            store.dispatch(SubCount(value))
        }
        if(type ==='J+'){
            if(store.getState() % 2 !== 0){
                
                store.dispatch(AddCount(value))
            }
            
        }
        if(type==='Y+'){
            // setTimeout(()=>{
                store.dispatch(AddWaitCount(value,500))
            // },500)
            
        }
        
    }




    render() {



        return (
            <div>
                <h1>现在的总和为:{store.getState()}</h1>
                <select ref={c => this.countValue = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <button onClick={() => this.toCountSum('+')}>+</button>&nbsp;
                <button onClick={() => this.toCountSum('-')}>-</button>&nbsp;
                <button onClick={() => this.toCountSum('J+')}>总数为奇数时加</button>&nbsp;
                <button onClick={() => this.toCountSum('Y+')}>异步加</button>&nbsp;


            </div>


        )
    }
}
