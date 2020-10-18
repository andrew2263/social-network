const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let store = {
  _state: {
    profilePage: {
      posts : [
        { id: 1, message: 'Hi, how are you?', likesCount: '0' },
        { id: 2, message: 'It\'s my first post', likesCount: '23' },
        { id: 3, message: 'my second post', likesCount: '10' }
      ],
      newPostText: 'sample text'
    },
    dialogsPage: {
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
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('state has been changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _addMessage() {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageText
    };
    this._state.dialogsPage.newMessageText = '';
    this._state.dialogsPage.messages.push(newMessage);
    this._callSubscriber(this._state);
  },
  _updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    if (action.type === 'ADD_POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };  
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    if (action.type === 'UPDATE_NEW_POST_TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    if (action.type === 'ADD_MESSAGE') {
      this._addMessage();
    }
    if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
      this._updateNewMessageText(action.newText)
    }
  }
}

export const addPostActionCreator = () => ( { type: ADD_POST } )

export const updateNewPostTextActionCreator = (newText) =>
  ( { type: UPDATE_NEW_POST_TEXT, newText: newText } )

export const addMessageActionCreator = () => ( { type: ADD_MESSAGE } )

export const updateNewMessageTextActionCreator = (newText) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: newText })

export default store;

window.store = store;
