import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'

import { Header, Button, Input } from '../../components';
import { googleIcon, facebookIcon } from '../../assets/images'

import styles from './Login.module.css';

interface LoginLayoutProps {
  email: string;
  password: string;
  onChange: (event: any, type: "email" | "password") => void;
}

function LoginLayout({ email, password, onChange }: LoginLayoutProps) {
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
          onChange={(e) => onChange(e, "email")}
          value={email}
        />
        <Input
          id="password"
          label="Digite sua senha"
          placeholder="Senha..."
          type="password"
          onChange={(e) => onChange(e, "password")}
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

export default LoginLayout;
