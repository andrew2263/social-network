import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, addMessage, updateNewMessageText, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={ state } addPost={ addPost } addMessage= { addMessage } updateNewPostText={ updateNewPostText } updateNewMessageText={ updateNewMessageText } />    
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

/*
ReactDOM.render(
  <React.StrictMode>
    <App state={ state } addPost={ addPost } addMessage={ addMessage } />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
