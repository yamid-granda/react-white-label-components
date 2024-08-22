import type { IFormProps } from './types'

export function Form<T>({
  children,
  onSubmit,
  ...attrs
}: Readonly<IFormProps<T>>) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const values = Object.values(event.target).reduce((acc, element) => {
      if (!element.name)
        return acc

      acc[element.name] = element.value
      return acc
    }, {} as Record<string, string>)
    onSubmit?.(values, event)
  }

  return (
    <form
      {...attrs}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  )
}
