import { useTasks } from "../hooks/useTasks";



function AjouterTache() {
    const { addTask } = useTasks();
    return (
        <>
            <div className="border-4 border-amber-950 py-2 px-2 rounded-4xl flex justify-evenly">
                <input type="text" className="border-amber-950 border-2"></input>
                <input type="date" className="border-amber-950 border-2" />
                <button onClick={addTask} className="border-amber-950 border-2">Ajouter</button>
            </div>
        </>
    );
}

export default AjouterTache;