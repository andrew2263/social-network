import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import state from './redux/state';
//import { addPost, addMessage } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={ state } addPost={ state.addPost } addMessage= { state.addMessage } updateNewPostText={ state.updateNewPostText } updateNewMessageText={ state.updateNewMessageText } />    
    </BrowserRouter>,
    document.getElementById('root')
  );
};