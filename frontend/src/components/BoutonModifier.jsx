import { useTasks } from "../hooks/useTasks";

function BoutonModifier(props) {
    const { editTask, loadTasks } = useTasks();

    return (
        <>
            <button  onClick={(e) => {
                const newTitle = prompt('Nouveau titre:', props.titre);
                const newDate = prompt('Nouvelle date (YYYY-MM-DD):', props.date || '');

                editTask(props.id, newTitle, newDate)
            }} className="mx-5 bg-cyan-600 p-2 rounded-sm text-white hover:bg-cyan-800 hover:transition">Modifier</button>
        </>
    );
}

export default BoutonModifier;