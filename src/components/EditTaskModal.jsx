import { useRef, useState } from "react"
import Modal from "./Modal"

export default function EditTaskModal({ show, onClose, task, onSave }) {

    const [editTask, setEditTask] = useState(task)

    const editFormRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editTask)
    }

    return (

        <Modal
            title="Modifica Task"
            content={
                <form className="form_update" ref={editFormRef} onSubmit={handleSubmit}>

                    <div className="update_task">
                        {/* sezione per inserimento nome task */}
                        <label>
                            Nome:
                            <input
                                type="text"
                                value={editTask.title}
                                onChange={(e) => setEditTask(e.target.value)}
                                placeholder='Inserisci nome del task'
                            />
                        </label>


                        {/* sezione per inserimento descrizione */}
                        <label>
                            Descrizione:
                            <textarea
                                value={editTask.description}
                                onChange={(e) => setEditTask(e.target.value)}
                                placeholder='Inserisci una descrizione'
                            />
                        </label>

                        {/* sezione per inserimento stato */}
                        <label>
                            Seleziona lo stato
                            <select
                                value={editTask.status}
                                onChange={(e) => setNameTitle(e.target.value)}
                            >
                                <option value="To do">To do</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>

                            </select>
                        </label>
                    </div>
                </form>
            }

            confirmText="Salva"
            show={show}
            onClose={onClose}
            onConfirm={() => { editFormRef.current.requestSubmit() }}
        />
    )


};
