import React, { Component } from 'react'

class NewComment extends Component {

    handleEnter = event => {
        if (event.keyCode===13) {
            event.preventDefault()
            this.props.handleNewComment({comment: this.refs.comment.value})
            this.refs.comment.value = ''
        }
    }

    render(){
        return (
            <div className="row" style={{margin: '10px'}}>
                <textarea ref="comment" placeholder="Write here..." className="form-control" onKeyDown={this.handleEnter}></textarea>
            </div>
        )
    }
}

export default NewComment