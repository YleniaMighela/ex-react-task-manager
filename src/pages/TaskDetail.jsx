import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";


import { useParams, useNavigate } from "react-router-dom";

export default function TaskDetail() {

    // estrae il parametro id dall'oggetto
    const { id } = useParams();
    const { tasks, removeTask } = useContext(GlobalContext)
    const navigate = useNavigate();

    // cerco con il metodo find il primo elemento che soddisferà la condizione con l'id selezionato
    const task = tasks.find(t => t.id === parseInt(id));

    // se la task non è stata trovata ritornami un "messaggio"
    if (!task) {
        return <p>Task non trovata.</p>;
    }

    // funzione per eliminare la task
    const handleDelete = async (e) => {
        // console.log("ELimina task");
        e.preventDefault();

        try {
            await removeTask(task.id);
            alert("Task eliminata!")
            navigate("/elenco")
        } catch (error) {
            console.log(error);
            alert(error.message);

        }

        // Al click su "Elimina Task", chiamare removeTask passando l'id del task.
        // Se la funzione esegue correttamente l'operazione:
        // Mostrare un alert di conferma dell’avvenuta eliminazione.
        // Reindirizzare l’utente alla lista dei task (/).
        // Se la funzione lancia un errore:
        // Mostrare un alert con il messaggio di errore ricevuto.
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