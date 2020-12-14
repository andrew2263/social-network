import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUtl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/490px-Dmitry_Nagiev_2017_4.jpg',
        followed: false,
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: { city: 'Minsk', country: 'Belarus' }
      },
      {
        id: 2,
        photoUtl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/490px-Dmitry_Nagiev_2017_4.jpg',
        followed: true,
        fullName: 'Nikolay',
        ыtatus: 'I am a boss',
        location: { city: 'Moscow', country: 'Russia' }
      },
      {
        id: 3,
        photoUtl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/490px-Dmitry_Nagiev_2017_4.jpg',
        followed: false,
        fullName: 'Alex',
        status: 'I am a boss',
        location: { city: 'Kiev', country: 'Ukraine' }
      },
      {
        id: 4,
        photoUtl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/490px-Dmitry_Nagiev_2017_4.jpg',
        followed: true,
        fullName: 'Eugen',
        status: 'I am a boss',
        location: { city: 'Chisinau', country: 'Moldova' }
      }
    ]);
  }

  return (
    <div>
      {
        props.users.map( u =>  
          <div key={ u.id }>
            <span>
              <div>
                <img style={{ width:100+'px' }} className={ styles.userPhoto } src={ u.photoUtl } />
              </div>
              <div>
                {
                  u.followed
                  ? 
                  <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button>
                  :
                  <button onClick={ () => { props.follow(u.id) } }>Follow</button>
                }
              </div>
            </span>
            <span>
              <span>
                <div>{ u.fullName }</div>
                <div>{ u.status }</div>
              </span>
              <span>
                <div>{ u.location.country }</div>
                <div>{ u.location.city }</div>
              </span>
            </span>
          </div>
        )
      }
    </div>
  );
}

export default Users;
