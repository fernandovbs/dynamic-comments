import React, { Component } from 'react'
import 'bootstrap-css-only'
import NewComment from './components/NewComment'
import Comments from './components/Comments'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: {
        '1' : {'comment': 'First Comment'},
        '2' : {'comment': 'Second Comment'}
      }
    }
  }

  createNewComment = comment => {
    const comments = {...this.state.comments}
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment

    this.setState({
      comments: { comments }
    })
  }

  render() {
    return (
      <div className="container">
        <NewComment handleNewComment={this.createNewComment} />
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
