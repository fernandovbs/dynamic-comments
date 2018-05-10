import React, { Component } from 'react'

export default class Comments extends Component {
    render(){
        return (
            <div>
                {JSON.stringify(this.props.comments)}
            </div>
        )
    }
}