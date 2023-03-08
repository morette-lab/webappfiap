import Form from 'react-bootstrap/Form';
import { Header, Button, Input } from '../../components';
import styles from './SignUp.module.css'


function SignUpLayout({ }) {
  return (
    <div>
      <Header title="Criar conta" />
      <div className={styles.content}>
        <h2 className={styles.title}>Dados</h2>
        <p className={styles.text}>Preencha os dados para cadastro</p>
        <Input
          id="fullname"
          label="Digite seu nome"
          placeholder="Nome..."
          type="text"
          value={""}
        />
        <Input
          id="email"
          label="Digite seu email"
          placeholder="E-mail..."
          type="email"
          value={""}
        />
        <Input
          id="password"
          label="Digite sua senha"
          placeholder="Senha..."
          type="password"
          value={""}
        />
        <Input
          id="confirm-password"
          label="Confirme sua senha"
          placeholder="Senha..."
          type="password"
          value={""}
        />
        <div className={styles.continueAndTerms}>
          <Button text="Continuar" />
          <Form.Check
            type="checkbox"
            id={"checkbox"}
            label={"aceito termos e condições"}
          />
        </div>
      </div>
    </div>
  )
}

export default SignUpLayout;
