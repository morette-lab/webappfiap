import React from 'react';
import styles from './Button.module.css'

interface ButtonProps {
  text: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  secondary?: boolean;
}

function Button({ text, onClick, secondary }: ButtonProps) {
  const style = secondary ? styles.secondary : styles.primary

  return (
    <button className={style} onClick={onClick}>{text}</button>
  )
}

export default Button;
