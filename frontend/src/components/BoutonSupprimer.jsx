function BoutonSupprimer(props) {
    return (
        <>
            <button onClick={(e) => {
                props.onDelete(props.id);
            }} className=" cursor-curseur_custom bg-red-700 py-3 px-5 rounded-sm text-white hover:bg-red-500">Supprimer</button>
        </>
    );
}

export default BoutonSupprimer;