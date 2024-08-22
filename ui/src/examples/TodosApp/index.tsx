import { Button } from '@ui/components/Button'
import { Card } from '@ui/components/Card'
import { Form } from '@ui/components/Form'
import { Input } from '@ui/components/Input'
import { useEffect, useMemo, useState } from 'react'
import { FormGrid } from '@ui/components/FormGrid'
import { Loader } from '@ui/components/Loader'
import type { ICreateTodoBody, ITodo, ITodoForm, ITodoItem, ITodosByState } from './types'
import { getAllTodosFromApi } from './services/http/getAllTodosFromApi'
import { createTodoFromApi } from './services/http/createTodoFromApi'
import { TodoItem } from './components/TodoItem'
import './index.scss'
import { getSortedTodos } from './utils/getSortedTodos'
import type { ITodoItemOnCheckEvent } from './components/TodoItem/types'
import { updateTodoFromApi } from './services/http/updateTodoFromApi'

export function TodosApp() {
  // state
  const [todos, setTodos] = useState<ITodo[]>([])
  const [isLoadingTodos, setIsLoadingTodos] = useState(true)
  const [isAddingTodo, setIsAddingTodo] = useState(false)

  // lifecycle
  useEffect(() => {
    fetchTodos({
      setTodos,
      setIsLoadingTodos,
    })
  }, [])

  // computed
  const todosByType = useMemo<ITodosByState>(() => {
    return todos.reduce((acc, todo, index) => {
      if (todo.isComplete) {
        acc.completed.push({ ...todo, index })
        return acc
      }

      acc.pending.push({ ...todo, index })
      return acc
    }, {
      pending: [],
      completed: [],
    } as ITodosByState)
  }, [todos])

  const sortedTodosByState = useMemo<ITodosByState>(() => {
    return {
      pending: getSortedTodos(todosByType.pending),
      completed: getSortedTodos(todosByType.completed),
    }
  }, [todosByType])

  // events
  async function onSubmit({
    description,
    dueDate,
  }: ITodoForm) {
    const body: ICreateTodoBody = { description }

    if (dueDate)
      body.dueDate = new Date(dueDate).toISOString()

    setIsAddingTodo(true)
    const response = await createTodoFromApi({ body })
    setIsAddingTodo(false)

    if (!response.isOk)
      return

    await fetchTodos({ setTodos })
  }

  async function onCheck(event: ITodoOnCheckEvent) {
    const newTodos = [...todos]
    newTodos[event.todo.index].isComplete = event.value
    setTodos(newTodos)

    await updateTodoFromApi({
      id: event.todo.id,
      body: { isComplete: event.value },
    })
  }

  // templates
  const todosTemplate = isLoadingTodos
    ? <Loader />
    : (
        <>
          <Todos
            onCheck={onCheck}
            todos={sortedTodosByState.pending}
          />

          <Todos
            onCheck={onCheck}
            todos={sortedTodosByState.completed}
          />
        </>
      )

  return (
    <Card>
      <h1>Todos App</h1>

      <Card className="wl-todos-app__create-new">
        <h2>Create New Todo</h2>

        <Form onSubmit={onSubmit}>
          <FormGrid>
            <Input
              label="Name *"
              name="description"
              required
            />

            <Input
              label="Due Date"
              name="dueDate"
              type="date"
            />

            <Button isLoading={isAddingTodo}>Create Todo</Button>
          </FormGrid>
        </Form>
      </Card>

      {todosTemplate}
    </Card>
  )
}

interface IFetchTodosConfig {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
  setIsLoadingTodos?: React.Dispatch<React.SetStateAction<boolean>>
}

// components
interface ITodoOnCheckEvent extends ITodoItemOnCheckEvent {}

interface ITodoItemProps {
  todos: ITodoItem[]
  onCheck?: (event: ITodoOnCheckEvent) => void
}

function Todos({
  todos,
  onCheck,
}: ITodoItemProps) {
  async function handleCheck(event: ITodoItemOnCheckEvent) {
    onCheck?.(event)
  }

  return todos.map((todo, index) => (
    <TodoItem
      key={todo.id ?? index}
      todo={todo}
      onCheck={event => handleCheck(event)}
    />
  ))
}

// utils
async function fetchTodos({
  setTodos,
  setIsLoadingTodos,
}: IFetchTodosConfig) {
  setIsLoadingTodos?.(true)
  const response = await getAllTodosFromApi()
  setIsLoadingTodos?.(false)

  if (!response.isOk)
    return

  setTodos(response.result)
}
