import type { IFormGridProps } from './types'
import './index.scss'

export function FormGrid({ children }: Readonly<IFormGridProps>) {
  return (
    <div className="wl-form-grid">
      {children}
    </div>
  )
}
