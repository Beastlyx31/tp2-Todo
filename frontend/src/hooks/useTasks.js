// frontend/src/hooks/useTasks.js
import React from "react";

export function useTasks() {
    const [tasks, setTasks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    // Charger toutes les tâches
    const loadTasks = React.useCallback(async () => {
        try {
            // TODO: Faire la requête GET pour récupérer le message
            const response = await fetch(`http://localhost:8888/prog-specialisee/tp2_todo/api/tasks.php`)

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('NOT_FOUND')
                }
                throw new Error('Erreur lors de la récupération des tâches')
            }

            const data = await response.json()
            setTasks(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }, []);

    // Ajouter une tâche
    const addTask = React.useCallback(async (title, dueDate) => {
        // TODO: Valider les données
        // TODO: Appeler l'API POST
        // TODO: Rafraîchir la liste
    }, []);

    // Modifier le statut d'une tâche
    const toggleTask = React.useCallback(async (taskId) => {
        // TODO: Trouver la tâche actuelle
        // TODO: Appeler l'API PUT avec le nouveau statut
        // TODO: Mettre à jour le state
    }, [tasks]);

    // Modifier une tâche
    const editTask = React.useCallback(async (taskId, title, dueDate) => {
        // TODO: Appeler l'API PUT
        // TODO: Mettre à jour le state
    }, []);

    // Supprimer une tâche
    const deleteTask = React.useCallback(async (taskId) => {
        // TODO: Demander confirmation
        // TODO: Appeler l'API DELETE
        // TODO: Mettre à jour le state
    }, []);

    React.useEffect(() => {
        loadTasks();
    }, [loadTasks]);

    return { tasks, loading, error, loadTasks, addTask, toggleTask, editTask, deleteTask };
}