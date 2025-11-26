import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/statistiques')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/statistiques"!</div>
}
