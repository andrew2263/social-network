import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      { store => {
          let addMessage = () => {
            store.dispatch(addMessageActionCreator());
          };
        
          let onMessageChange = (text) => {
            store.dispatch(updateNewMessageTextActionCreator(text));
          };

          return <Dialogs addMessage={ addMessage } updateNewMessageText={ onMessageChange } dialogsPage={ store.getState().dialogsPage } />
        }
      }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;
