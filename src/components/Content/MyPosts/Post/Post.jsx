import React from 'react';
import cont from './Post.module.css';

const Post = (props) => {
  return (
    <div className={ cont.item }>
      <img src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" />
      { props.message }
      <div>
        { props.likesCount }
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;
