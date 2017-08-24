import axios from 'axios'

export const addQuotes = (_quotes) => {
  return {
    type: 'ADD_QUOTES',
    payload: {
      quotes: _quotes
    }
  }
}

export const getQuotes = () => {
  return (dispatch, getState) => {
    let quotesAPI = `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=5&callback=`

    axios.get(quotesAPI)
    .then(({data}) => {      
      dispatch(addQuotes(data))
    })
    .catch(err => {
      console.log(err)
    })
  }
}
