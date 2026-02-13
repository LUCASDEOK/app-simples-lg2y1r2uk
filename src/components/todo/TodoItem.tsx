import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import type { Todo } from '@/types'

type TodoItemProps = {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    setTimeout(() => {
      onDelete(todo.id)
    }, 250) // Match animation duration
  }

  return (
    <div
      className={cn(
        'group flex items-center justify-between py-3 border-b border-gray-200/50 last:border-b-0 transition-all duration-300 ease-in-out',
        isDeleting ? 'animate-fade-out-up' : 'animate-fade-in-up',
      )}
    >
      <div className="flex items-center flex-grow">
        <Checkbox
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="h-5 w-5 rounded-[4px] border-2 border-slate-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary transition-all duration-200 ease-out"
          aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={cn(
            'ml-4 flex-grow text-lg transition-all duration-200 ease-out cursor-pointer',
            todo.completed ? 'text-slate-400 line-through' : 'text-slate-800',
          )}
        >
          {todo.text}
        </label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleDelete}
        className="h-9 w-9 opacity-0 md:group-hover:opacity-100 md:focus:opacity-100 sm:opacity-100 transition-opacity duration-200 ease-in-out text-slate-400 hover:text-destructive hover:bg-destructive/10"
        aria-label={`Delete task "${todo.text}"`}
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  )
}
