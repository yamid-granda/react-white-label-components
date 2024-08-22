import type { ITodoItem } from '@ui/examples/TodosApp/types'

export interface ITodoItemProps extends React.HTMLAttributes<HTMLDivElement> {
  todo: ITodoItem
  onCheck?: (event: ITodoItemOnCheckEvent) => void
}

export interface ITodoItemOnCheckEvent {
  value: boolean
  todo: ITodoItem
}