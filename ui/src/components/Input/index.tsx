import { useId } from 'react'
import type { IInputProps } from './types'
import './index.scss'

export function Input({
  onInput,
  onChange,
  label,
  ...inputProps
}: Readonly<IInputProps>) {
  const id = useId()

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    onInput?.(event.target.value.trim(), event)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(event.target.value.trim(), event)
  }

  const labelTemplate = label && (
    <label
      className="wl-input__label"
      htmlFor={id}
    >
      {label}
    </label>
  )

  return (
    <div className="wl-input">
      <div className="wl-input__input-wrap">
        {labelTemplate}

        <input
          className="wl-input__input"
          onInput={handleInput}
          onChange={handleChange}
          id={id}
          {...inputProps}
        />
      </div>
    </div>
  )
}
