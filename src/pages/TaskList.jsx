// importo il GlobalContext
import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import TaskRow from "../components/TaskRow";

export default function TaskList() {
    // destrutturo la prorietà tasks dall'oggeto che ho passata tramite Global
    const { tasks } = useContext(GlobalContext)

    // rappresenta il criterio di ordinmento
    const [sortBy, setSortBy] = useState('createdAt');

    // rappresenta la direzione
    const [sortOrder, setSortOrder] = useState(1);



    // funzione
    const handleSort = (field) => {
        if (field === sortBy) {
            setSortOrder(-sortOrder)
        } else {
            setSortBy(field);
            setSortOrder(1);
        }
    }
    return (
        <>
            <h3>Lista dei task</h3>

            <div className="task-list">
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th onClick={() => handleSort('title')}>Nome</th>
                                <th onClick={() => handleSort('status')}>Stato</th>
                                <th onClick={() => handleSort('createdAt')}>Data di Creazione</th>
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

