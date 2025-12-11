import { formatDate } from "../hooks/useTasks";
import BoutonSupprimer from "./BoutonSupprimer";
import BoutonModifier from "./BoutonModifier";
import { useState } from "react";

// tasks, onToggle, onEdit, onDelete
function TaskItem(props) {
    // const [status, setStatus] = useState(props.status)
    const handleChange = (e) => {
        // setStatus(!status);
        props.onToggle(props.id, props.status == 1 ? 0 : 1);
    }
    return (
        <>
            <div className="flex flex-row border-2 border-black rounded-2xl p-7 m-5 justify-between">
                <div className="flex flex-row">
                    <input onChange={handleChange} checked={props.status} type="checkbox" className="mx-5" />
                    <div className="flex flex-col">
                        <h2 className={`font-bold ${props.status ? 'line-through' : ''}`}>{props.titre}</h2>
                        <p>{formatDate(props.date)}</p>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div>
                        <BoutonModifier onEdit={props.onEdit} id={props.id} titre={props.titre} date={props.date} />
                        <BoutonSupprimer onDelete={props.onDelete} id={props.id} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TaskItem;