import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <header className="fixed top-0 left-0 right-0 h-16 sm:h-16 bg-white shadow-sm flex items-center justify-center z-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
          My Simple Todo List
        </h1>
      </header>

      <main className="flex-grow pt-24 pb-12">
        <Outlet />
      </main>

      <footer className="h-12 bg-white border-t border-border flex items-center justify-center">
        <p className="text-xs text-slate-500">© 2023 Simple Todo App</p>
      </footer>
    </div>
  )
}
