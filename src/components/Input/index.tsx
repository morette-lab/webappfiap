import styles from './Input.module.css'

interface InputProps {
  id: string
  label: string
  placeholder: string
  type: "email" | "password" | "text"
}

function Input({ id, label, placeholder, type }: InputProps) {
  // TODO: show eye password type

  return (
    <div>
      <label className={styles.label}>
        {label}
        <input
          className={styles.input}
          id={id}
          placeholder={placeholder}
          type={type}
        ></input>
      </label>
    </div>
  )
}

export default Input;
