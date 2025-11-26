import { useEffect } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskItem from "../components/TaskItem";

// tasks, onToggle, onEdit, onDelete
function TaskList(props) {
    const { tasks } = useTasks();

    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task.id}
                    titre={task.title}
                    date={task.due_date}
                    />
                ))}
            </ul>
        </>
    );
}

export default TaskList;