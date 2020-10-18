const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText
      };
      state.newMessageText = '';
      state.messages.push(newMessage);
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ( { type: ADD_MESSAGE } )

export const updateNewMessageTextActionCreator = (newText) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: newText })

export default dialogsReducer;
