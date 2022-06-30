

//引入createStore，专门用于创建redux中最为核心的store对象
import { legacy_createStore } from "redux";
//引入为count组件服务的reducer
import countReducer from './count_reducer'

export default legacy_createStore(countReducer)

