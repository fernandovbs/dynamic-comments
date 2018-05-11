import React, { Component } from 'react'
import Comment from './Comment'

export default class Comments extends Component {
    renderComment = (key, comment) => {
        return <Comment key={key} comment={comment.comment} />
    }

    render(){
        return (
            <div>
                {Object.keys(this.props.comments).map(key => {
                  return this.renderComment(key, this.props.comments[key])  
                })}
            </div>
        )
    }
}