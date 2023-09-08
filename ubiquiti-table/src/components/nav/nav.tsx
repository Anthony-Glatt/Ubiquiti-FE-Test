import React from 'react';
import './styles.scss';

const Nav = ({title, author}: {title: string, author: string }) => {
  return (
    <div className='nav'>
      <img src="/u-default.png" alt='icon' />
      <div className='title'>{title}</div>
      <div className='author'>{author}</div>
    </div>
  )
};

export default Nav;