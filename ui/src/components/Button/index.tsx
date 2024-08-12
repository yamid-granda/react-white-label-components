import classNames from 'classnames'
import type { IButtonProps } from './types'
import './index.scss'

export function Button({
  children,
  variant,
  ...attrs
}: Readonly<IButtonProps>) {
  return (
    <div className={classNames('wl-button', {
      'wl-button--primary': variant === 'primary',
    })}
    >
      <button
        className="wl-button__button"
        type="button"
        {...attrs}
      >
        <div className="wl-button__content">
          {children}
        </div>
      </button>
    </div>
  )
}
