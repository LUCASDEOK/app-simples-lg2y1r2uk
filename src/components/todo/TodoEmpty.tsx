import { ListX } from 'lucide-react'

export const TodoEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8 text-slate-400 animate-fade-in">
      <ListX className="h-12 w-12 mb-4" />
      <p className="text-lg">No tasks yet!</p>
      <p className="text-sm">Add one above to get started.</p>
    </div>
  )
}
