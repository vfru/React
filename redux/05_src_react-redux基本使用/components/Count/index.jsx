import React, { Component } from 'react'


export default class Count extends Component {

    

    toCountSum=(type)=>{
        
        const {value} = this.countValue
        
        
        if(type==='+'){
            this.props.jia(value)
            
        }
        if(type === '-'){
            this.props.jian(value)
        }
        if(type ==='J+'){
            if(this.props.count%2!==0){
                this.props.jia(value)
            }
            
        }
        if(type==='Y+'){
            this.props.yibu(value,500)
        }
        
    }




    render() {



        return (
            <div>
                <h1>现在的总和为:{this.props.count}</h1>
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
