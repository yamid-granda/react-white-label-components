export interface IFormProps<T> extends Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit?: (values: T, event: React.FormEvent<HTMLFormElement>) => void
}
