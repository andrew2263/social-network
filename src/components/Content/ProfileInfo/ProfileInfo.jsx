import React from 'react';
import cont from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
        <div>
          <img src="https://image.winudf.com/v2/image1/Y29tLndhbGxwYXBlcnMuYWhkcGlfc2NyZWVuXzE0XzE1NjcwOTU1ODZfMDMz/screen-14.jpg?fakeurl=1&type=.jpg" />
        </div>
        <div className={ cont.descriptionBlock }>
          ava + description
        </div>
      </div>
  )
}

export default ProfileInfo;
