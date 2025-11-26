import { createFileRoute } from '@tanstack/react-router'
import TaskList from '../components/TaskList';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1 className='text-3xl text-center font-mono'>Ma liste de tâches</h1>
      <TaskList message={'Coucou'}/>
    </>
  );
}
