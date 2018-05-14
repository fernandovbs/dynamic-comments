import React, { Component } from 'react'
import 'bootstrap-css-only'
import NewComment from './components/NewComment'
import Comments from './components/Comments'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: {
      },
      isLoggedIn: false,
      user: {}
    }
    
    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    this.props.auth.onAuthStateChanged((user) => {
      if(user){
        this.setState({ isLoggedIn: true, user })
        console.log(user)
      }else{
        this.setState({ isLoggedIn: false, user: {}})
      }
    })
  }

  auth(provider){
    this.props.auth.signInWithPopup(this.props.providers[provider])
  }

  createNewComment = comment => {
    const comments = {...this.state.comments}
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment

    this.setState({
      comments: comments 
    })
  }

  render() {
    return (
      <div className="container">
        { this.state.isLoggedIn ? 
          <div>
            <img src={ this.state.user.photoURL } alt={ this.state.user.displayName } /> <span>{ this.state.user.displayName }</span>
            <NewComment handleNewComment={this.createNewComment} /> 
            <div className="text-right" style={{margin: '10px'}}>
              <button type="button" onClick={() => this.props.auth.signOut()} className="btn btn-outline-danger pull-right">Logout</button> 
            </div>
          </div>:
          <div className="alert text-center">
            <button type="button" onClick={() => this.auth('facebook')} className="btn btn-primary">Enter with Facebook to create comments</button>
          </div> }
          <Comments comments={this.state.comments } />
      </div>
    );
  }
}

export default App;
