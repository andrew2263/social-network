import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }

  return <Dialogs addMessage={ addMessage } updateNewMessageText={ onMessageChange } dialogsPage={ state.dialogsPage } />;
}

export default DialogsContainer;
