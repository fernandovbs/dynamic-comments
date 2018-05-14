import React from 'react'

const Comment = props => 
    <div className="card card-body bg-light">
        <p>{props.comment.comment}</p>
        <p style={{fontSize: '0.8em', fontStyle: 'italic'}}>User: {props.comment.user}</p>
    </div>
export default Comment