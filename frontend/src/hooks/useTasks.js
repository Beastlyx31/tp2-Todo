// frontend/src/hooks/useTasks.js
import React from "react";
import { useRouter } from '@tanstack/react-router';

/**
 * Formate une date au format YYYY-MM-DD en format lisible
 * @param {string} dateString - Date au format YYYY-MM-DD
 * @returns {string} Date formatée
 */
export function formatDate(dateString) {
    if (!dateString) return '';

    const date = new Date(dateString + 'T00:00:00'); // Ajouter l'heure pour éviter les problèmes de fuseau horaire
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-CA', options);
}

export function useTasks() {
    const [tasks, setTasks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    // Charger toutes les tâches
    const loadTasks = React.useCallback(async () => {
        try {
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
    const addTask = React.useCallback(async (titre, date) => {
        // 1. Empêcher le rechargement de la page
        // event.preventDefault();

        // 2. Récupérer les valeurs du formulaire
        // const [titre, setTitre] = React.useState("");
        // const [date, setDate] = React.useState("");

        // 3. Valider les données
        if (titre == '') {
            alert('Le titre est requis');
            return
        }

        // 4. Préparer les données à envoyer
        const taskData = {
            title: titre,
            due_date: date || null,
            is_completed: false
        };

        try {
            // 5. Envoyer la requête POST
            const response = await fetch('api/tasks.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(taskData)
            });

            if (!response.ok) {
                throw new Error('Erreur lors de l\'ajout de la tâche');
            }

            // 6. Réinitialiser le formulaire
            // setTitre("");
            // setDate("");

            // 7. Recharger la liste des tâches (appeler la fonction loadTasks)
            loadTasks();
        } catch (error) {
            console.error('Erreur:', error);
            alert('Impossible d\'ajouter la tâche');
        }
    }, []);

    // Modifier le statut d'une tâche
    const toggleTask = React.useCallback(async (taskId) => {
        try {
            // 1. Envoyer la requête PUT
            const response = await fetch(`api/tasks.php?id=${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    is_completed: currentStatus
                })
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la modification');
            }

            // 2. Recharger les tâches (appeler la fonction loadTasks)
            loadTasks();
        } catch (error) {
            console.error('Erreur:', error);
            alert('Impossible de modifier la tâche');
        }
    }, [tasks]);

    // Modifier une tâche
    const editTask = React.useCallback(async (taskId, title, dueDate) => {
        if (title === null || title.trim() === '') {
            return; // L'utilisateur a annulé
        }

        try {
            const response = await fetch(`http://localhost:8888/prog-specialisee/tp2_todo/api/tasks.php?id=${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title.trim(),
                    due_date: dueDate || null
                })
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la modification');
            }

            await loadTasks();
            window.location.reload();
        } catch (error) {
            console.error('Erreur:', error);
            alert('Impossible de modifier la tâche');
        }
    }, []);

    // Supprimer une tâche
    const deleteTask = React.useCallback(async (taskId) => {
        // 1. Demander confirmation avec la fonction JavaScript confirm
        if (confirm('Voulez-vous supprimer la tâche ?')) {
            try {
                // 2. Envoyer la requête DELETE
                const response = await fetch(`http://localhost:8888/prog-specialisee/tp2_todo/api/tasks.php?id=${taskId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: ''
                });

                if (!response.ok) {
                    throw new Error('Erreur lors de la suppression');
                }

                // 3. Recharger les tâches (appeler la fonction loadTasks)
                loadTasks();
                window.location.reload();
            } catch (error) {
                console.error('Erreur:', error);
                alert('Impossible de supprimer la tâche');
            }
        }
    }, []);

    React.useEffect(() => {
        loadTasks();
    }, [loadTasks]);

    return { tasks, loading, error, loadTasks, addTask, toggleTask, editTask, deleteTask };
}