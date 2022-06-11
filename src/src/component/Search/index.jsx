import React, { Component, createRef } from 'react'
import axios from 'axios'

export default class Search extends Component {

    inputRef = createRef();
    getSearchInput=()=>{
        const{inputRef:{current:{value:keyword}}}=this;
        //console.log(keyword);
        //console.log(this.inputRef.current.value);
        
       axios.get(`/api/search/users?q=${keyword}`).then(
           response =>{
               console('成功了',response.data.items);

        },
           error =>{console('失败了',error)}
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
