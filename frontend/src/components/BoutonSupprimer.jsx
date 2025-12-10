import { useTasks } from "../hooks/useTasks";

function BoutonSupprimer(props) {
    const { deleteTask } = useTasks();

    return (
        <>
            <button onClick={(e) => {
                deleteTask(props.id);
            }}>Supprimer</button>
        </>
    );
}

export default BoutonSupprimer;