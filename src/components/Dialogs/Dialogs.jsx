import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.
    map( d => (<DialogItem name={ d.name } id={ d.id } />));

  let messagesElements = props.dialogsPage.messages.
    map( m => (<Message message={ m.message } />) );
    
  //let newMessage = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (
    <div className={ style.dialogs }>
      <div className={ style.dialogsItems }>
        { dialogsElements }
      </div>
      <div className={ style.messages }>
        { messagesElements }
        <div>
          <div>
            <textarea value={ props.dialogsPage.newMessageText } onChange={ onMessageChange }></textarea>
          </div>
          <div>
            <button onClick={ addMessage }>Add message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
