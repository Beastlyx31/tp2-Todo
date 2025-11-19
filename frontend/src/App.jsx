import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';


const router = createRouter({ routeTree });
function App() {
return (
    <>
        <h1>Ma liste de tâches</h1>
        <RouterProvider router={router} />
        <TaskList />
        <TaskItem/>
    </>
);
}
export default App;