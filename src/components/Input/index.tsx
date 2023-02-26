import React from 'react';

interface InputProps {
  
}

function Input({  }: InputProps) {
  

  return (
   <div>
        <form>
            <label className="name">Nome</label>
            <input></input>
            <label>Senha</label>
            <input type="password" className="password"></input>
        </form>
   </div>
  )
}

export default Input;