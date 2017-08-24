import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuotes } from '../actions/quotesAction'

class RandomQuote extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-body">
              <button onClick={() => this.props.getQuotes()} className="btn btn-warning">get data</button>
              <ul className="list-group list-group-flush">
                {this.props.quotes.map(quote => {
                  return <li className="list-group-item">{quote.content}</li>
                })}
              </ul>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quoteStore.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQuotes: () => dispatch(getQuotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (RandomQuote)
