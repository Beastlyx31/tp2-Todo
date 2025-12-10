import { useTasks } from "../hooks/useTasks";
import { useState } from "react";



function AjouterTache(props) {
    const [titre, setTitre] = useState('');
    const [date, setDate] = useState('');
    return (
        <>
            <div className="border-4 border-amber-950 py-2 px-2 rounded-4xl flex justify-evenly">
                <form onSubmit={e=>{
                        e.preventDefault();
                        props.onAdd(titre, date);
                        setTitre('');
                    }}>
                    <input value={titre} onChange={e=>{setTitre(e.target.value)}} type="text" className="border-amber-950 border-2" />
                    <input value={date} onChange={e=>{setDate(e.target.value)}}  type="date" className="border-amber-950 border-2" />
                    <button type="submit" className="border-amber-950 border-2">Ajouter</button>
                </form>
            </div>
        </>
    );
}

export default AjouterTache;