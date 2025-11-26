import { createFileRoute } from '@tanstack/react-router'
import TaskList from '../components/TaskList';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1>Ma liste de tâches</h1>
      <TaskList message={'Coucou'}/>
    </>
  );
}
