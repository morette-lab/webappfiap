import React from 'react';
import styles from './Login.module.css';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div>
      <Header title="Acessar" />
      <h2 className={styles.title}>Acessar</h2>
      <p className={styles.text}>Com o e-mail e senha entrar</p>
      <Form.Check
        type="checkbox"
        id={"checkbox"}
        label={"Lembrar senha"}
      />
      <div>
        <Button secondary text="Cadastrar" />
        <Button text="Entrar" />
      </div>
    </div>
  )
}

export default Login;
