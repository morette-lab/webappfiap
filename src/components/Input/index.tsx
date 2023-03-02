import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLElement> {
  id: string
  label: string
  placeholder: string
}

function Input({ id, label, placeholder, ...props }: InputProps) {
  // TODO: show eye password type

  return (
    <div>
      <label className={styles.label}>
        {label}
        <input
          className={styles.input}
          id={id}
          placeholder={placeholder}
          {...props}
        ></input>
      </label>
    </div>
  )
}

export default Input;
