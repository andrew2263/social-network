import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReduces";
import profileReducer from "./profileReducer";

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
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarReducer = sidebarReducer(this._state.sidebar, action);
    
    this._callSubscriber(this._state);
  }
}

export default store;

window.store = store;
