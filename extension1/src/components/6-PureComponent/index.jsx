import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

       state={car:'奔驰c63'}
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.props,this.state);
    //     console.log(nextProps,nextState);
    //     if(this.state.car === nextState.car ) return false
    //     else return true
    // }

    huanche=()=>{
        this.setState({car:'迈巴赫'})
        // this.setState({})
    }
    render() {
        return (
            
            <div className='Parent' >
                <h3>我是Parent</h3>
                {console.log('render--Parent')}
                <h4>{this.state.car}</h4>
                <button onClick={this.huanche} >点我换车</button>
                <Child car={this.state.car} />
            </div>
        )
    }
}

function Child(props) {
    const { car } = props
    return (
        <div className='Child' >
            {console.log('Child')}
            <h3>我是Child</h3>
            <h4>A组件的车是{car}</h4>
        </div>
    )
}
