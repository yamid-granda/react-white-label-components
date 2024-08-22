import classNames from 'classnames'
import { Loader } from '../Loader'
import type { IButtonProps } from './types'
import './index.scss'

export function Button({
  children,
  variant,
  isLoading,
  ...attrs
}: Readonly<IButtonProps>) {
  const childrenTemplate = (
    <>
      {isLoading && (
        <div className="wl-button__loader">
          <Loader />
        </div>
      ) }
      {children}
    </>
  )

  return (
    <div className={classNames('wl-button', {
      'wl-button--loading': isLoading,
      'wl-button--primary': variant === 'primary',
    })}
    >
      <button
        className="wl-button__button"
        type="submit"
        disabled={isLoading}
        {...attrs}
      >
        <div className="wl-button__content">
          {childrenTemplate}
        </div>
      </button>
    </div>
  )
}
