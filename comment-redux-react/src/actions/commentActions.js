export const newComment = (_text) => (
  {
    type: 'NEW_COMMENT',
    payload: {
      text: _text
    }
  }
)
