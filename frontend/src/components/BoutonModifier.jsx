import { useTasks } from "../hooks/useTasks";

function BoutonModifier(props) {
    const { editTask } = useTasks();

    return (
        <>
            <button onClick={editTask}>Modifier</button>
        </>
    );
}

export default BoutonModifier;