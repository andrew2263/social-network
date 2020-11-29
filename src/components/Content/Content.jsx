import React from 'react';
import cont from './Content.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) => {
  return (
    <div className={ cont.content }>
      <ProfileInfo />
      <MyPostsContainer store={ props.store } />
    </div>
  )
}

export default Content;
