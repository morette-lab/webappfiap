import React from 'react';
import * as RB from 'react-bootstrap';

interface ButtonsProps {
  variant: "primary"
  text: string
}

function Button({ variant, text }: ButtonsProps) {
  return (
    <>
      <RB.Button variant={variant}>{text}</RB.Button>
    </>
  )
}

export default Button;
