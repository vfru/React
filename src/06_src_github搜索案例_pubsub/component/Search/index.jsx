import React, { Component, createRef } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js';

export default class Search extends Component {

    inputRef = createRef();
    getSearchInput=()=>{
            //获取input里的内容
         const{inputRef:{current:{value:keyword}}}=this;
            //向List发布消息
         PubSub.publish('setListState',{isFrist:false,isLoading:true});

         axios.get(`/api1/search/users?q=${keyword}`).then(
           response =>{
               PubSub.publish('setListState',{isLoading:false,users:response.data.items});
        },
           error =>{
               PubSub.publish('setListState',{err:error.message,isLoading:false});
        }
       )
    }


  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">github用户</h3>
            <div>
                <input type="text" ref={this.inputRef} placeholder="输入关键词点击搜索"/>&nbsp;
                <button onClick={this.getSearchInput} >搜索</button>
            </div>
        </section>
    )
  }
}
