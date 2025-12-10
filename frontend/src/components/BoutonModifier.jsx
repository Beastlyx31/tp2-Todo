import { useTasks } from "../hooks/useTasks";

function BoutonModifier(props) {
    const { editTask } = useTasks();

    return (
        <>
            <button onClick={editTask} className="mx-5 bg-cyan-600 p-2 rounded-sm text-white hover:bg-cyan-800 hover:transition">Modifier</button>
        </>
    );
}

export default BoutonModifier;