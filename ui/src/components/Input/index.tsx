import type { IInputProps } from './types'

export function Input({
  onInput,
  onChange,
  ...inputProps
}: Readonly<IInputProps>) {
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    onInput?.(event.target.value.trim(), event)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(event.target.value.trim(), event)
  }

  return (
    <div className="wl-input">
      <div className="wl-input__input-wrap">
        <input
          className="wl-input__input"
          onInput={handleInput}
          onChange={handleChange}
          {...inputProps}
        />
      </div>
    </div>
  )
}
