import React from 'react';
import cont from './MyPosts.module.css';
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

const MyPosts = (props) => {
  
  let postsElements = props.posts.map( p => (<Post message={ p.message } likesCount={ p.likesCount } />) );

  let newPostElement = React.createRef(); /* создаём ссылку на элемент */

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={ cont.postsBlock }>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText } /> {/* привязывам ссылку к textarea */}
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={ cont.posts }>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;
