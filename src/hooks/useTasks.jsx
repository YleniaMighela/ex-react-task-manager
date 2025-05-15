
import { useState, useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
// console.log(apiUrl);


export default function useTasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/tasks`)
            .then(res => res.json())
            .then((data) => setTasks(data))
            .catch(err => console.error('Errore fetch:', err));
    }, []);


    // funzione addTask
    async function addTask(newTask) {

        const res = await fetch(`${apiUrl}/tasks`, {
            // oggetto di configurazione
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(newTask),
        });

        // destruttuto l'oggetto
        const { success, message, task } = await res.json();

        // se success è falso lancia un messaggio di errore
        if (!success) throw new Error(message);

        // se è vero allora crei un nuovo array con i vecchi task e la nuova task
        setTasks(prevTasks => [...prevTasks, task])
    }




    // funzione removeTask
    async function removeTask(taskId) {

        const res = await fetch(`${apiUrl}/tasks/${taskId}`, {
            // oggetto di configurazione
            method: 'DELETE',
        });

        // destruttuto l'oggetto
        const { success, message } = await res.json();

        // se success è falso lancia un messaggio di errore
        if (!success) throw new Error(message);

        // altrimenti creo un nuovo array che contiene tutte le task tranne quelle con l'id da eliminare
        setTasks(prevTasks => prevTasks.filter(t => t.id !== taskId));
    };

    // funzione updateTask
    async function updateTask(updatedTask) {

        const res = await fetch(`${apiUrl}/tasks/${updatedTask.id}`, {
            // oggetto di configurazione
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(updatedTask),
        });

        // destruttuto l'oggetto
        const { success, message, task } = await res.json();

        // se success è falso lancia un messaggio di errore
        if (!success) throw new Error(message);

        // altrimenti se trova la task con l'id uguale a quella aggiornata, ritornami la versione aggiornata
        setTasks(prevTasks => prevTasks.map(t => t.id === task.id ? task : t));

    };

    return { tasks, addTask, removeTask, updateTask };

};