import type { ButtonHTMLAttributes } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<unknown> {
  variant?: 'primary'
  isLoading?: boolean
}
