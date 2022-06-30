//引入Count的UI组件
import CountUI from '../../components/Count'
import {AddCount,SubCount,AddWaitCount} from '../../redux/count-Action'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

//函数的返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value——状态
function mapStateToProps(state){
    return {count:state}
}
//函数的返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value——操作方法
function mapDispatchToProps(dispatch){
    return {
        jia:(number)=>{dispatch(AddCount(number))},
        jian:(number)=>{dispatch(SubCount(number))},
        yibu:(number,time)=>{dispatch(AddWaitCount(number,time))},
    }
}


//创建并暴露一个
export default  connect(mapStateToProps,mapDispatchToProps)(CountUI)

