export interface ITodoForm {
  description: string
  dueDate?: string
}

export interface ITodo {
  id: string
  description: string
  isComplete: boolean
  dueDate?: string
}

export interface ICreateTodoBody {
  description: string
  dueDate?: string
}

export interface IUpdateTodoBody {
  isComplete: boolean
}

export interface ITodoItem extends ITodo {
  index: number
}

export interface ITodosByState {
  completed: ITodoItem[]
  pending: ITodoItem[]
}
