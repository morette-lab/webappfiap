import Form from 'react-bootstrap/Form';
import { Header, Button, Input } from '../../components';
import styles from './SignUp.module.css'

export interface SignUpForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  cpf: string;
  acceptTerms: boolean
}

interface SignUpLayoutProps {
  form: SignUpForm;
  onChange: (event: any) => void;
  onPress: (event: any) => void;
}

function SignUpLayout({ form, onChange, onPress }: SignUpLayoutProps) {
  const {
    name,
    email,
    password,
    confirmPassword,
    phone,
    cpf,
    acceptTerms
  } = form

  return (
    <div>
      <Header title="Criar conta" />
      <div className={styles.content}>
        <h2 className={styles.title}>Dados</h2>
        <p className={styles.text}>Preencha os dados para cadastro</p>
        <Input
          id="name"
          label="Digite seu nome"
          placeholder="Nome..."
          type="text"
          value={name}
          onChange={onChange}
        />
        <Input
          id="email"
          label="Digite seu email"
          placeholder="E-mail..."
          type="email"
          value={email}
          onChange={onChange}
        />
        <Input
          id="password"
          label="Digite sua senha"
          placeholder="Senha..."
          type="password"
          value={password}
          onChange={onChange}
        />
        <Input
          id="confirmPassword"
          label="Confirme sua senha"
          placeholder="Senha..."
          type="password"
          value={confirmPassword}
          onChange={onChange}
        />
        <Input
          id="phone"
          label="Telefone"
          placeholder="Telefone..."
          type="text"
          value={phone}
          onChange={onChange}
        />
        <Input
          id="cpf"
          label="CPF"
          placeholder="CPF..."
          type="text"
          value={cpf}
          onChange={onChange}
        />
        <div className={styles.continueAndTerms}>
          <Button text="Continuar" onClick={onPress} />
          <Form.Check
            type="checkbox"
            id="acceptTerms"
            label={"aceito termos e condições"}
            checked={acceptTerms}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}

export default SignUpLayout;
