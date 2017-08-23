import React, { Component } from 'react'

import store from '../stores'
import { newPost } from '../actions'

class Blog extends Component {
  constructor () {
    super()
    this.state = {
      post: '',
      posts: [],
      coba: ''
    }
    // store.subscribe(this.updatePosts)
  }

  // updatePosts () {
  //   const storePosts = store.getState().posts
  //   console.log(storePosts)
  //   this.setState({
  //     posts: storePosts.posts
  //   })
  // }


  newPost () {
    store.dispatch(newPost(this.state.post))
  }

  handleChange (e) {
    this.updatePost(e)
  }

  updatePost (e) {
    this.setState({
      post: e.target.value
    })
  }

  render () {
    store.subscribe(() => {
      this.setState(store.getState())
    })
    return (
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="form-group col-5">
            <label htmlFor="exampleFormControlTextarea1">Post Something</label>
            <textarea onChange={(e) => this.handleChange(e)} className="form-control" rows="5"></textarea>
            <button onClick={() => this.newPost()} className="btn btn-primary mt-2 float-right">Post</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Blog
