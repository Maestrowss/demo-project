import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img alt='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRAu-CcbbB4r5jpYaEIFFdgUzcpWW6zydIQ&usqp=CAU' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;