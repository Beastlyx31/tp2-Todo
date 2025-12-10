import { useTasks } from "../hooks/useTasks";

function BoutonModifier(props) {
    const { editTask, loadTasks } = useTasks();

    return (
        <>
            <button  onClick={(e) => {
                const newTitle = prompt('Nouveau titre:', props.titre);
                const newDate = prompt('Nouvelle date (YYYY-MM-DD):', props.date || '');

                props.onEdit(props.id, newTitle, newDate);
            }} className="mx-5 bg-cyan-600 py-3 px-5 rounded-sm text-white hover:bg-cyan-400 hover:transition">Modifier</button>
        </>
    );
}

export default BoutonModifier;