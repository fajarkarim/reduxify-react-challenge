import React, { Component } from 'react'
import { connect } from 'react-redux'

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
            <p>{ this.props.comments }</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: 'aku comment rduce hardcode'
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    newComment: (text) => dispatch(newComment(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CommentBox)
