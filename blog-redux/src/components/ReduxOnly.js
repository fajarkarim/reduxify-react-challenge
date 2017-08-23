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
    this.state.post = ''
  }

  handleChange (e) {
    this.updatePost(e)
  }

  updatePost (e) {
    this.setState({
      post: e.target.value
    })
  }

  pressEnter (e) {
    if (e.key == 'Enter') {
      this.newPost()
      e.target.value = null
    }
  }

  render () {
    store.subscribe(() => {
      this.setState(store.getState())
    })
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="form-group col-12">
            <label htmlFor="exampleFormControlTextarea1">Post Something</label>
            <textarea onChange={(e) => this.handleChange(e)} onKeyPress={(e) => this.pressEnter(e)} className="form-control" rows="5"></textarea>
            <button onClick={() => this.newPost()} className="btn btn-primary mt-2 float-right">Post</button>
          </div>
          <div>
            {this.state.posts.map((post, idx) => {
              return (
                <div className="col" key={idx}>
                  <p>Your write: </p>
                  <p>{ post }</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Blog
