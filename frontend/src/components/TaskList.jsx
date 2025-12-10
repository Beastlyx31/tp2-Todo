import TaskItem from "../components/TaskItem";

// tasks, onToggle, onEdit, onDelete
function TaskList(props) {
    return (
        <>
            <ul>
                {props.tasks.map((task) => (
                    <TaskItem key={task.id}
                    id={task.id}
                    titre={task.title}
                    date={task.due_date}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit}
                    onToggle={props.onToggle}
                    />
                ))}
            </ul>
        </>
    );
}

export default TaskList;