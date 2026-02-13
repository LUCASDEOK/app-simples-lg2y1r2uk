import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Filter } from '@/types'

type TodoFilterProps = {
  currentFilter: Filter
  onFilterChange: (filter: Filter) => void
  activeCount: number
}

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
]

export const TodoFilter = ({
  currentFilter,
  onFilterChange,
  activeCount,
}: TodoFilterProps) => {
  return (
    <div className="flex justify-between items-center mb-6 py-2 border-b border-border">
      <div>
        <span className="text-sm font-medium text-slate-500">
          {activeCount} active {activeCount === 1 ? 'task' : 'tasks'}
        </span>
      </div>
      <div className="flex gap-1">
        {filters.map(({ label, value }) => (
          <Button
            key={value}
            variant="ghost"
            size="sm"
            onClick={() => onFilterChange(value)}
            className={cn(
              'px-3 py-1.5 h-auto text-sm rounded-md transition-colors duration-150 ease-in-out',
              currentFilter === value
                ? 'bg-primary text-primary-foreground font-semibold hover:bg-primary/90'
                : 'text-slate-500 hover:bg-slate-200/60',
            )}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  )
}
