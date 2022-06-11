import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {
    state ={
        users:[],//users初始为数组
        isFrist:true,
        isLoading:false,
        err:'',//存储请求相关错误信息
      }
    
    componentDidMount(){
        this.token = PubSub.subscribe('setListState',(_,data)=>{
            this.setState(data);
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
    
  render() {
    const {users,isFrist,isLoading,err}=this.state
    return (
        <div className="row">
            
            { 
                isFrist ?  <h2>欢迎使用,输入关键字，点击搜索</h2> :
                isLoading ? <h2>Loding......</h2>:
                err ?       <h2>{err}</h2>:

                users.map((user)=>{
                    return( 
                        <div key={user.id}  className="card">
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" >
                                <img src={user.avatar_url} alt='NoFoundHeadPhoto' style={{width: '100px'}}/>
                            </a>
                            <p className="card-text">{user.login}</p>
                        </div>
                    )
                })
            }
      </div>
    )
  }
}
