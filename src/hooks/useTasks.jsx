
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
    function removeTask() {

    };

    // funzione updateTask
    function updateTask() {

    };

    return { tasks, addTask, removeTask, updateTask };

};