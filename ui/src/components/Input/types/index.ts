import type { InputHTMLAttributes } from 'react'

export interface IInputProps extends Omit<InputHTMLAttributes<unknown>, | 'onInput' | 'onChange' > {
  onInput?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
}
