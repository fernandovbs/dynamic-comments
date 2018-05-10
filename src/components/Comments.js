import React, { Component } from 'react'
import Comment from './Comment'

export default class Comments extends Component {
    renderComment = (key, comment) => {
        return (<p key={key}>{comment.comment}</p>)
    }

    render(){
        return (
            <div>
                {Object.keys(this.props.comments).map(key => {
                  return <Comment key={key} comment={this.props.comments[key]} />  
                })}
            </div>
        )
    }
}