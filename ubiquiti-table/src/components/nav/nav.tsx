import React from 'react';
import './styles.scss';
import { NavProps } from '../../interfaces/interfaces';

const Nav: React.FC<NavProps> = ({title, author}) => {
  return (
    <div className='nav'>
      <div className='logo' />
      <div className='title'>{title}</div>
      <div className='author'>{author}</div>
    </div>
  )
};

export default Nav;
