import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../stores'

import { newComment } from '../actions/commentActions'

class CommentBox extends Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <p>Apa bumi itu datar ?</p>

          <div className="col-12 form-group">
            <textarea onChange={(e) => this.handleChange(e)} className="form-control" rows="5"></textarea>
            <button  onClick={() => this.props.newComment(this.state.text)} className="btn btn-success">comment</button>
          </div>
          <div className='col-12'>
            {this.props.comments.map((comment, idx) => {
              return <p key={idx}>{ comment }</p>
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(`statenya `, state)
  return {
    comments: state.comments
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    newComment: (text) => dispatch(newComment(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CommentBox)
