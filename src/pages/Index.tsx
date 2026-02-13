import { useTodos } from '@/hooks/use-todos'
import { TodoInput } from '@/components/todo/TodoInput'
import { TodoFilter } from '@/components/todo/TodoFilter'
import { TodoList } from '@/components/todo/TodoList'

const Index = () => {
  const {
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter,
    filteredTodos,
    filter,
    activeCount,
  } = useTodos()

  return (
    <div className="container max-w-3xl mx-auto px-4 sm:px-6">
      <div className="bg-white/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-elevation">
        <TodoInput onAdd={addTodo} />
        <TodoFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          activeCount={activeCount}
        />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  )
}

export default Index
