import { useTasks } from "../hooks/useTasks";

function BoutonSupprimer() {
    const { deleteTask } = useTasks();

    return (
        <>
            <button onClick={() => deleteTask(id)}>Supprimer</button>
        </>
    );
}

export default BoutonSupprimer;