import { Checkbox } from '@ui/components/Checkbox'
import classNames from 'classnames'
import { formatDate } from '../../utils/formatDate'
import { isTodoOverdue } from '../../utils/isTodoOverdue'
import type { ITodoItemProps } from './types'
import './index.scss'

export function TodoItem({
  todo,
  onCheck,
  ...attrs
}: Readonly<ITodoItemProps>) {
  function handleCheck(value: boolean) {
    onCheck?.({
      value,
      todo,
    })
  }

  const dueDateTemplate = todo.dueDate && (() => {
    const formattedDueDate = formatDate(todo.dueDate)

    return (
      <div className="wl-todo-item__due-date">
        {formattedDueDate}
      </div>
    )
  })()

  return (
    <div
      className={classNames('wl-todo-item', {
        'wl-todo-item--completed': todo.isComplete,
        'wl-todo-item--overdue': isTodoOverdue(todo),

      })}
      {...attrs}
    >
      <div className="wl-todo-item__checkbox">
        <Checkbox
          onChange={handleCheck}
          checked={todo.isComplete}
        />
      </div>

      <div className="wl-todo-item__description">
        {todo.description}
      </div>

      {dueDateTemplate}
    </div>
  )
}
