import { rerenderEntireTree } from '../render';

let state = {
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
  addPost: () => {
    let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
  },
  updateNewPostText: (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
  },
  addMessage: () => {
    let newMessage = {
      id: 4,
      message: state.dialogsPage.newMessageText
    };
  
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
  },
  updateNewMessageText: (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
  }
};
/*
export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

  rerenderEntireTree(state);

  state.profilePage.posts.push(newPost);
};

export let addMessage = (messageText) => {
  let newMessage = {
    id: 4,
    message: messageText
  };

  rerenderEntireTree(state);

  state.dialogsPage.messages.push(newMessage);
}
*/
export default state;
