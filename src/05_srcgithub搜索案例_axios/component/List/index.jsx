import React, { Component } from 'react'

export default class List extends Component {
   

  render() {
    const {users,isFrist,isLoading,err}=this.props
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
