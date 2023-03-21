import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpLayout, { SignUpForm } from './../../layouts/SignUp'
import { Api } from './../../services/api'

function SignUp() {
  const [form, setForm] = useState<SignUpForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    cpf: "",
    acceptTerms: false
  });

  const navigate = useNavigate();

  const onChange = (event: any) => {
    if (event.target.id === "acceptTerms") {
      setForm(form => {
        return {
          ...form,
          acceptTerms: !form.acceptTerms
        }
      })

      return
    }

    setForm(form => {
      return {
        ...form,
        [event.target.id]: event.target.value
      }
    })
  }

  const onPress = (_event: any) => {
    validateFormThen(form, async () => {
      const result = await Api.signUp({
        name: form.name,
        email: form.email,
        password: form.password,
        phone: form.phone,
        cpf: form.cpf
      })

      if (result.success) {
        navigate("/")
      }
    })
  }

  const validateFormThen = (form: SignUpForm, callback: Function) => {
    if (isPasswordCorrect(form) && isAcceptedTerms(form)) {
      callback()
    }
  }

  const isPasswordCorrect = (form: SignUpForm) => {
    return form.password === form.confirmPassword
  }

  const isAcceptedTerms = (form: SignUpForm) => form.acceptTerms


  return (
    <SignUpLayout
      form={form}
      onChange={onChange}
      onPress={onPress}
    />
  )
}

export default SignUp;
