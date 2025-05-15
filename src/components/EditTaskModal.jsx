import { useRef, useState } from "react"
import Modal from "./Modal"
export default function EditTaskModal({ show, onClose, task, onSave }) {

    const [editTask, setEditTask] = useState(task);
    const editFormRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editTask);
    }

    return (
        <Modal
            title="Modifica Task"
            content={
                <form className="form_update" ref={editFormRef} onSubmit={handleSubmit}>
                    <div className="update_task">
                        <label>
                            Nome:
                            <input
                                type="text"
                                value={editTask.title}
                                onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
                                placeholder='Inserisci nome del task'
                            />
                        </label>

                        <label>
                            Descrizione:
                            <textarea
                                value={editTask.description}
                                onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
                                placeholder='Inserisci una descrizione'
                            />
                        </label>

                        <label>
                            Seleziona lo stato
                            <select
                                value={editTask.status}
                                onChange={(e) => setEditTask({ ...editTask, status: e.target.value })}
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