function BoutonSupprimer(props) {
    return (
        <>
            <button onClick={(e) => {
                props.onDelete(props.id);
            }} className=" cursor-curseur_custom bg-red-700 p-2 rounded-sm text-white hover:bg-red-900">Supprimer</button>
        </>
    );
}

export default BoutonSupprimer;