import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";


import { useParams } from "react-router-dom";

export default function TaskDetail() {

    const { id } = useParams();
    const { tasks } = useContext(GlobalContext)

    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return <p>Task non trovata.</p>;
    }

    return (

        <div className='container_add-task'>
            <h1>Dettaglio della task</h1>
            <div className="add-task">
                <p><strong className="detail_task">Nome task:</strong>{task.title}</p>
                <p><strong className="detail_task">Descrizione:</strong>{task.description}</p>
                <p><strong className="detail_task">Stato:</strong>{task.status}</p>
                <p><strong className="detail_task">Data di creazione:</strong>{new Date(task.createdAt).toLocaleDateString()}</p>

            </div>


        </div>

    )

}