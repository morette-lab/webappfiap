import React from 'react';
import styles from './Header.module.css'
import arrow from '../../assets/images/arrow.png'

interface HeaderProps {
  title?: string;
}

function Header({ title }: HeaderProps) {
  return (
    <div className={styles.container}>
      <img src={arrow} width={20} height={20} />
      <h2>{title}</h2>
    </div>
  )
}

export default Header;
