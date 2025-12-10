import { useTasks } from "../hooks/useTasks";
import { useState } from "react";



function AjouterTache(props) {
    const [titre, setTitre] = useState('');
    const [date, setDate] = useState('');
    return (
        <>
            <div className="p-10 max-w-[70%] mx-auto">
                <form className="flex justify-around" onSubmit={e=>{
                        e.preventDefault();
                        props.onAdd(titre, date);
                        setTitre('');
                        setDate('');
                    }}>
                    <input value={titre} onChange={e=>{setTitre(e.target.value)}} type="text" placeholder="Nouvelle tâche" className="border-amber-950 border-2 w-2/3 p-2 rounded-sm mr-2" />
                    <input value={date} onChange={e=>{setDate(e.target.value)}}  type="date" className="border-amber-950 border-2 p-2 rounded-sm mr-2" />
                    <button type="submit" className="py-3 px-5 rounded-sm bg-green-500 hover:bg-green-300">Ajouter</button>
                </form>
            </div>
        </>
    );
}

export default AjouterTache;