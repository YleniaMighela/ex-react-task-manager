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

        <div className='container_detail-task'>
            <h1>Dettaglio della task</h1>
            <div className="add-task">
                <p>
                    <strong className="detail_task">Nome task:</strong>
                    <em>{task.title}</em>
                </p>
                <p>
                    <strong className="detail_task">Descrizione:</strong>
                    <em>{task.description}</em>
                </p>
                <p>
                    <strong className="detail_task">Stato:</strong>
                    <em>{task.status}</em></p>
                <p><strong className="detail_task">Data di creazione:</strong>
                    <em>{new Date(task.createdAt).toLocaleDateString()}</em>
                </p>
                <button onClick={handleDelete}>Elimina task</button>
            </div>


        </div>

    )

}