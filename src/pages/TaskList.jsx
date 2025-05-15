// importo il GlobalContext
import { useContext, useState, useMemo } from "react";
import GlobalContext from "../context/GlobalContext";
import TaskRow from "../components/TaskRow";

export default function TaskList() {
    // destrutturo la prorietà tasks dall'oggeto che ho passata tramite Global
    const { tasks } = useContext(GlobalContext)

    // rappresenta il criterio di ordinmento
    const [sortBy, setSortBy] = useState('createdAt');

    // rappresenta la direzione
    const [sortOrder, setSortOrder] = useState(1);



    // funzione che permette di decidere come ordinare 
    const handleSort = (field) => {
        if (field === sortBy) {
            setSortOrder(-sortOrder)
        } else {
            setSortBy(field);
            setSortOrder(1);
        }
    }

    // ordino i gli stati
    const statusOrder = {
        "To do": 0,
        "Doing": 1,
        "Done": 2

    }

    // utilizzo useMemo per calcolare solo quando cambia il valore di tasks, sortBy o sortOrder
    const sortedTasks = useMemo(() => {
        // creo una copia dell'array tasks
        const sorted = [...tasks].sort((a, b) => {
            // inizializzo la variabile result
            let result = 0;

            // in base al valore di sortBy, ordino l'array
            if (sortBy === 'title') {
                // se sortBy è uguale a title, ordino in base al titolo
                result = a.title.localeCompare(b.title);

            } else if (sortBy === 'status') {
                // se sortBy è uguale a status, ordino in base logico, come definito nell'oggetto satusOrder
                result = statusOrder[a.status] - statusOrder[b.status];

            } else if (sortBy === 'createdAt') {
                // se sortBy è uguale a createdAt,converti la data in numeri
                result = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            }

            // moltiplico per 1 o -1 in base al valore di sortOrde e quindi sceglie se è crescente o decrescente
            return result * sortOrder;
        });

        // restituisco l'array ordinato
        return sorted;

    }, [tasks, sortBy, sortOrder]);


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
                            {sortedTasks.map((task) => (

                                <TaskRow key={task.id} task={task} />
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    );
}

