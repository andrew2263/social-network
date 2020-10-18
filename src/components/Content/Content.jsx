import React from 'react';
import cont from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) => {
  return (
    <div className={ cont.content }>
      <ProfileInfo />
      <MyPosts posts={ props.profilePage.posts } newPostText={ props.profilePage.newPostText } dispatch={ props.dispatch } />
    </div>
  )
}

export default Content;
