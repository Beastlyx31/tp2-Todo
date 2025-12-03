import { useTasks } from "../hooks/useTasks";

function BoutonModifier(props) {
    const { editTask } = useTasks();

    return (
        <>
            <button onClick={editTask} className="mx-5">Modifier</button>
        </>
    );
}

export default BoutonModifier;