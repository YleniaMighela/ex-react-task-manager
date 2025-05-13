// importo il GlobalContext
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import TaskRow from "../components/TaskRow";

export default function TaskList() {
    // destrutturo la prorietà tasks dall'oggeto che ho passata tramite Global
    const { tasks } = useContext(GlobalContext)

    return (
        <>
            <h3>Lista dei task</h3>

            <div className="task-list">
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Stato</th>
                                <th>Data di Creazione</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tasks.map((task) => (

                                <TaskRow key={task.id} task={task} />
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    );
}

