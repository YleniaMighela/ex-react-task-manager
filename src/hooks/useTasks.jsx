
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
    function addTask() {

    };


    // funzione removeTask
    function removeTask() {

    };

    // funzione updateTask
    function updateTask() {

    };

    return { tasks, addTask, removeTask, updateTask };
}
