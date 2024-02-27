import React, { FC } from 'react'
import styles from "src/components/select/styles.module.css"
type SelectProps = {
  
  options: string[]
  onChange: (value: string) => void
}

const Select: FC<SelectProps> = ({ options, onChange }) => {
  return (
    <select className={styles.select} onChange={e => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option className={styles.option} key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Select
