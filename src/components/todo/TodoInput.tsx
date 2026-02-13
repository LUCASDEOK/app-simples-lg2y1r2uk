import { useState, type FormEvent } from 'react'
import { Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type TodoInputProps = {
  onAdd: (text: string) => void
}

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (taskText.trim()) {
      onAdd(taskText)
      setTaskText('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-3 mb-6"
    >
      <Input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task..."
        className="h-11 flex-grow text-base bg-white border border-border shadow-sm rounded-lg focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-shadow duration-200"
        aria-label="New task input"
      />
      <Button
        type="submit"
        className="h-11 min-w-[120px] w-full sm:w-auto font-semibold rounded-lg transition-all duration-200 ease-out active:translate-y-px active:shadow-none hover:shadow-md"
        aria-label="Add new task"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Task
      </Button>
    </form>
  )
}
