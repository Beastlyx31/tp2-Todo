import { useEffect } from "react";
import { useTasks } from "../hooks/useTasks";
import { formatDate } from "../hooks/useTasks";
import BoutonSupprimer from "./BoutonSupprimer";
import BoutonModifier from "./BoutonModifier";

// tasks, onToggle, onEdit, onDelete
function TaskItem(props) {
    return (
        <>
            <div>
                <input type="checkbox" name="" id="" />
                <h2>{props.titre}</h2>
                <p>{formatDate(props.date)}</p>
                <BoutonModifier id={props.id} titre={props.title} date={props.title}/>
                <BoutonSupprimer id={props.id}/>
            </div>
        </>
    );
}

export default TaskItem;