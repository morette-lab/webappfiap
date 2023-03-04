import React from 'react';
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  text: string | any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  secondary?: boolean;
}

function Button({ text, onClick, secondary, ...props }: ButtonProps) {
  const style = secondary ? styles.secondary : styles.primary

  return (
    <button className={style} onClick={onClick} {...props}>
      {text}
    </button>
  )
}

export default Button;
