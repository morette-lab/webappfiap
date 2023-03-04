import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'

import styles from './Login.module.css';
import { Header, Button, Input } from '../../components';
import { googleIcon, facebookIcon } from '../../assets/images'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const setInputValue = (event: any, callback: Function) => {
    callback(event.target.value)
  }

  return (
    <div>
      <Header title="Acessar" />
      <div className={styles.content}>
        <h2 className={styles.title}>Acessar</h2>
        <p className={styles.text}>Com o e-mail e senha entrar</p>
        <Input
          id="email"
          label="Digite seu e-mail"
          placeholder="Email..."
          type="email"
          onChange={(event) => setInputValue(event, setEmail)}
          value={email}
        />
        <Input
          id="password"
          label="Digite sua senha"
          placeholder="Senha..."
          type="password"
          onChange={(event) => setInputValue(event, setPassword)}
          value={password}
        />
        <div className={styles.passwordContainer}>
          <Form.Check
            type="checkbox"
            id={"checkbox"}
            label={"Lembrar senha"}
          />
          <Link to="/" className={styles.forgotPassword}>Esqueci minha senha</Link>
        </div>
        <div className={styles.buttons}>
          <Button secondary text="Cadastrar" />
          <Button text="Entrar" />
        </div>
        <div className={styles.secondaryAccess}>
          <span>
            Ou acesse com
          </span>
        </div>
        <div className={styles.socialMediaIcons}>
          <img alt="Google Icon" src={googleIcon} />
          <img alt="Facebook Icon" src={facebookIcon} />
        </div>
      </div>
    </div>
  )
}

export default Login;
