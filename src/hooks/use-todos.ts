import { useState, useMemo } from 'react'
import type { Todo, Filter } from '@/types'

const initialTodos: Todo[] = [
  { id: '1', text: 'Learn React and TypeScript', completed: true },
  { id: '2', text: 'Build a beautiful Todo App', completed: false },
  { id: '3', text: 'Deploy the app to production', completed: false },
]

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [filter, setFilter] = useState<Filter>('all')

  const addTodo = (text: string) => {
    if (text.trim() === '') return
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    }
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed)
      case 'completed':
        return todos.filter((todo) => todo.completed)
      case 'all':
      default:
        return todos
    }
  }, [todos, filter])

  const activeCount = useMemo(() => {
    return todos.filter((todo) => !todo.completed).length
  }, [todos])

  return {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    filteredTodos,
    activeCount,
  }
}
