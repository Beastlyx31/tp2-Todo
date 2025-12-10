import { formatDate } from "../hooks/useTasks";
import BoutonSupprimer from "./BoutonSupprimer";
import BoutonModifier from "./BoutonModifier";

// tasks, onToggle, onEdit, onDelete
function TaskItem(props) {
    return (
        <>
            <div className="flex flex-row border-2 border-black rounded-2xl p-7 m-5 justify-between">
                <div className="flex flex-row">
                    <input onToggle={e=>{
                        props.onToggle(props.id);
                    }} type="checkbox" name="" id="" className="mx-5" />
                    <div className="flex flex-col">
                        <h2 className={`font-bold ${false ? 'line-through' : ''}`}>{props.titre}</h2>
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