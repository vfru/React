import React, { Component } from 'react'
import { AddCount, SubCount, AddWaitCount } from '../../redux/actions/count'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'


class Count extends Component {

    

    toCountSum=(type)=>{
        
        const {value} = this.countValue
        
        
        if(type==='+'){
            this.props.AddCount(value)
            
        }
        if(type === '-'){
            this.props.SubCount(value)
        }
        if(type ==='J+'){
            if(this.props.count%2!==0){
                this.props.AddCount(value)
            }
            
        }
        if(type==='Y+'){
            this.props.AddWaitCount(value,500)
        }
        
    }




    render() {



        return (
            <div>
                <h3>我是Count组件,下方人数为：{this.props.reshu}</h3>
                <h4>现在的总和为:{this.props.count}</h4>
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



//创建并暴露一个
export default connect(
    state => (
        { 
            count: state.he ,
            reshu:state.rens.length
        }
        ),

    //mapDispathToProps的一般写法
    // dispatch => ({
    //     jia: (number) => { dispatch(AddCount(number)) },
    //     jian: (number) => { dispatch(SubCount(number)) },
    //     yibu: (number, time) => { dispatch(AddWaitCount(number, time)) },
    // })

    //mapDispathToProps的一般简写,底层自动调用dispatch
    {
        AddCount:AddCount,
        SubCount,
        AddWaitCount,
    }
)(Count)

