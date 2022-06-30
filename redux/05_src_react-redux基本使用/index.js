import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <App/>
)

store.subscribe(()=>{
    //每次发生变化就调用render刷新页面
    root.render(
        <App/>
    )
})