import { TodoItem } from '@/components/todo/TodoItem'
import { TodoEmpty } from '@/components/todo/TodoEmpty'
import type { Todo } from '@/types'

type TodoListProps = {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  if (todos.length === 0) {
    return <TodoEmpty />
  }

  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
