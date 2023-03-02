import React from 'react';
import styles from './Header.module.css'
import arrow from '../../assets/images/arrow.png'

interface HeaderProps {
  title?: string;
}

function Header({ title }: HeaderProps) {
  return (
    <div className={styles.container}>
      <div>
        <img src={arrow} width={20} height={20} />
      </div>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Header;
