import classNames from 'classnames'
import type { ICardProps } from './types'
import './index.scss'

export function Card({
  children,
  className,
  ...attrs
}: Readonly<ICardProps>) {
  return (
    <div
      {...attrs}
      className={classNames('wl-card', className)}
    >
      {children}
    </div>
  )
}
