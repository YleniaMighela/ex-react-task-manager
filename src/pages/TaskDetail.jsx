import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";


import { useParams } from "react-router-dom";

export default function TaskDetail() {

    // estrae il parametro id dall'oggetto
    const { id } = useParams();
    const { tasks } = useContext(GlobalContext)

    // cerco con il metodo find il primo elemento che soddisferà la condizione con l'id selezionato
    const task = tasks.find(t => t.id === parseInt(id));

    // se la task non è stata trovata ritornami un "messaggio"
    if (!task) {
        return <p>Task non trovata.</p>;
    }

    // funzione per eliminare la task
    const handleDelete = () => {
        console.log("ELimina task");

    }
    return (

        <div className='container_add-task'>
            <h1>Dettaglio della task</h1>
            <div className="add-task">
                <p><strong className="detail_task">Nome task:</strong>{task.title}</p>
                <p><strong className="detail_task">Descrizione:</strong>{task.description}</p>
                <p><strong className="detail_task">Stato:</strong>{task.status}</p>
                <p><strong className="detail_task">Data di creazione:</strong>{new Date(task.createdAt).toLocaleDateString()}</p>
                <button onClick={handleDelete}>Elimina task</button>
            </div>


        </div>

    )

}