import type { ITodo } from '../../types'

export function isTodoOverdue(todo: ITodo): boolean {
  return Boolean(!todo.isComplete && todo.dueDate && new Date(todo.dueDate) < new Date())
}
