import { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'

import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLElement> {
  id: string
  label: string
  placeholder: string
}

function Input({ id, label, placeholder, ...props }: InputProps) {
  // TODO: show eye password type
  const [showInput, setShowInput] = useState(false)

  const isInputType = props.type === "password"
  const shouldShowInput = props.type === "password" && showInput

  const showInputWithProps = shouldShowInput ? { ...props, type: "text" } : { ...props }

  return (
    <div>
      <label className={styles.label}>
        {label}
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            id={id}
            placeholder={placeholder}
            {...showInputWithProps}
          />
          {isInputType && <AiOutlineEye
            style={{ width: 30, height: 30 }}
            onClick={() => setShowInput(!showInput)}
          />}
        </div>
      </label>
    </div>
  )
}

export default Input;
