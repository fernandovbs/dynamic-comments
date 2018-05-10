import React, { Component } from 'react'

export default class Comments extends Component {
    renderComment = (key, comment) => {
        return (<p key={key}>{comment.comment}</p>)
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