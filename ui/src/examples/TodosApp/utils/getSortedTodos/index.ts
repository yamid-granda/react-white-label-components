import type { ITodoItem } from '../../types'

export function getSortedTodos(todos: ITodoItem[]) {
  return [...todos].sort((a, b) => {
    const aValue = getTodoSortValue(a)
    const bValue = getTodoSortValue(b)
    return aValue - bValue
  })
}

function getTodoSortValue(todo: ITodoItem) {
  return todo.dueDate ? new Date(todo.dueDate).getTime() : Infinity
}
