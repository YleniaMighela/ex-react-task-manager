// importo il GlobalContext
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext"

export default function TaskList() {
    // destrutturo la prorietà tasks dall'oggeto che ho passata tramite Global
    const { tasks } = useContext(GlobalContext);

    return (
        <div className="task-list">
            <h3>Lista dei task</h3>

            <div>
                <ul>{tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}</ul>

            </div>


        </div>

    );
}