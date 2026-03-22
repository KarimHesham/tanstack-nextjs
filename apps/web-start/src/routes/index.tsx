import { createFileRoute } from '@tanstack/react-router'
import { Demo } from '@repo/ui/demo'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold">Web Start</h1>
      <Demo appName="web-start" />
    </main>
  )
}
