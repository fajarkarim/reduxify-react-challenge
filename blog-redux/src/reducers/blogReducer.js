const initialState = {
  posts: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'BLOG_NEW_POST':
      console.log('masuk blog reducer')
      console.log(`payloadnya `, action.payload)
      console.log(`statenya `, state)
      const newPost = [action.payload.post]
      return {...state, posts: state.posts.concat(newPost)}
      break;
    default:
      console.log('masuk default <_-')
  }
}
