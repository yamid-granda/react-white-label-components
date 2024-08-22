import type { ICheckboxProps } from './types'
import './index.scss'

export function Checkbox({
  onChange,
  ...attrs
}: ICheckboxProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(event.target.checked, event)
  }

  return (
    <div className="wl-checkbox">
      <label className="wl-checkbox__label">
        <input
          {...attrs}
          type="checkbox"
          onChange={handleChange}
          className="wl-checkbox__input"
        />
        <span className="wl-checkbox__check"></span>
      </label>
    </div>
  )
}
