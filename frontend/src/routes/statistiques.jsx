import { createFileRoute } from '@tanstack/react-router';
import Graphique from '../components/Graphique';
import { useTasks } from '../hooks/useTasks';

function RouteComponent() {
  const { tasks } = useTasks();
  return (
    <div>
      <section className=" flex justify-center my-30">
        <Graphique tasks={tasks} />
      </section>
    </div>
  );
}

export const Route = createFileRoute('/statistiques')({
  component: RouteComponent,
});