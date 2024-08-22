export interface ICheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void
}
