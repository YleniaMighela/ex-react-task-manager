import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { useParams, useNavigate } from "react-router-dom";

// importo le modali
import Modal from "../components/Modal"
import EditTaskModal from "../components/EditTaskModal";

export default function TaskDetail() {

    // estrae il parametro id dall'oggetto
    const { id } = useParams();
    const navigate = useNavigate();
    const { tasks, removeTask, updateTask } = useContext(GlobalContext)

    // cerco con il metodo find il primo elemento che soddisferà la condizione con l'id selezionato
    const task = tasks.find(t => t.id === parseInt(id));

    // creo la variabile di stato per gestire l'apertuta o no della modale con eliminazione della task
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // creo la variabile di stato per gestire l'apertuta o no della modale con modifica della task
    const [showEditModal, setShowEditModal] = useState(false);

    // se la task non è stata trovata ritornami un "messaggio"
    if (!task) {
        return <p>Task non trovata.</p>;
    }



    // funzione per ELIMINARE la task
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

    }

    // funzione per MODIFICARE la task
    const handleEdit = async () => {
        try {
            await updateTask(updateTask);
            setShowEditModal(false)
        } catch (error) {
            console.log(error);
            alert(error.message);

        }

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
                <button onClick={() => setShowDeleteModal(true)}>Elimina task</button>
                <button onClick={() => setShowEditModal(true)}>Modifica task</button>


                {/* MODALE PER ELIMINAZIONE DEL TASK */}
                <Modal
                    title="Conferma di eliminare"
                    content={<span>Confermi di eliminare?</span>}
                    show={showDeleteModal}
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={handleDelete}
                    confirmText="Elimina"
                />

                {/* MODALE PER MODIFICA DEL TASK */}

                <EditTaskModal
                    task={task}
                    show={showEditModal}
                    onClose={() => setShowEditModal(false)}
                    onSave={handleEdit}
                />
            </div>


        </div>

    )

}