import { memo } from 'react';
import { Link } from "react-router-dom"


function TaskRow({ task }) {

    return (
        <tr >


            <td >  <Link to={`/task/${task.id}`}>{task.title}</Link></td>

            <td style={{
                backgroundColor:
                    task.status === 'To do' ? '#f87171' :
                        task.status === 'Doing' ? '#facc15' :
                            task.status === 'Done' ? '#4ade80' : 'white'

            }}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    );
}
export default memo(TaskRow);

