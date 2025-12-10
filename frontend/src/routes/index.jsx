import { createFileRoute } from '@tanstack/react-router'
import TaskList from '../components/TaskList';
import AjouterTache from '../components/AjouterTache';
import { useTasks } from '../hooks/useTasks';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { tasks, addTask, deleteTask, editTask, toggleTask } = useTasks();
  
  return (
    <>
      <h1 className='text-3xl text-center font-sans p-10 bg-slate-900 text-white'>Ma liste de tâches</h1>
      <div className='border-b-2 border-gray-300'>
        <AjouterTache onAdd={addTask} />
      </div>
      <div className='max-w-[70%] mx-auto'>
        <TaskList onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} tasks={tasks} message={'Coucou'} />
      </div>
    </>
  );
}
