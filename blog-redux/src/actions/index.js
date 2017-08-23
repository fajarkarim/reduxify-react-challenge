export const newPost = (_post) => {
  return {
    type: 'BLOG_NEW_POST',
    payload: {
      post: _post
    }    
  }
}
