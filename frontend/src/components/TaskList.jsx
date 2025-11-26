import { useEffect } from "react";
import { useTasks } from "../hooks/useTasks";

// tasks, onToggle, onEdit, onDelete
function TaskList(props) {
    const { tasks } = useTasks();

    return (
        <>
            <p>{props.message}</p>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </>
    );
}

export default TaskList;