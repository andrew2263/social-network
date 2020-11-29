const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'How is your course?' }
  ],
  newMessageText: 'message',
  dialogs: [
    { id: 1, name: 'Nikolay' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Irina' },
    { id: 4, name: 'Yuriy' },
    { id: 5, name: 'Marina' },
    { id: 6, name: 'Victor' }
  ]
};

const dialogsReducer = (state = initialState, action) => {
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
