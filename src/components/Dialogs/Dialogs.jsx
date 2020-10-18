import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.
    map( d => (<DialogItem name={ d.name } id={ d.id } />));

  let messagesElements = props.dialogsPage.messages.
    map( m => (<Message message={ m.message } />) );
    
  let newMessage = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.updateNewMessageText(text);
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
            <textarea ref={ newMessage } value={ props.dialogsPage.newMessageText } onChange={ onMessageChange }></textarea> {/* привязывам ссылку к textarea */}
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
