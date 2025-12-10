import { createFileRoute } from '@tanstack/react-router'
import TaskList from '../components/TaskList';
import AjouterTache from '../components/AjouterTache';
import { useTasks } from '../hooks/useTasks';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { tasks, addTask } = useTasks();
  return (
    <>
      <h1 className='text-3xl text-center font-mono'>Ma liste de tâches</h1>
      <AjouterTache onAdd={addTask} />
      <TaskList tasks={tasks} message={'Coucou'}/>
    </>
  );
}
