import type { InputHTMLAttributes } from 'react'

export interface IInputProps extends Omit<InputHTMLAttributes<unknown>, | 'onInput' | 'onChange' > {
  label?: string
  onInput?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
}
