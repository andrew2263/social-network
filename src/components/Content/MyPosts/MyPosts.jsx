import React from 'react';
import cont from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {
  
  let postsElements = props.posts.map( p => (<Post message={ p.message } likesCount={ p.likesCount } />) );

  let newPostElement = React.createRef(); /* создаём ссылку на элемент */

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
