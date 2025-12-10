import { useTasks } from "../hooks/useTasks";

function BoutonSupprimer(props) {
    const { deleteTask } = useTasks();

    return (
        <>
            <button onClick={(e) => {
                deleteTask(props.id);
            }}>Supprimer</button>
            <button onClick={() => deleteTask(id)} className=" cursor-curseur_custom bg-red-700 p-2 rounded-sm text-white hover:bg-red-900" >Supprimer</button>
        </>
    );
}

export default BoutonSupprimer;