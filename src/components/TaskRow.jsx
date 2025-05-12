export default function TaskRow({ task }) {

    return (
        <tr >
            <td >{task.title}</td>
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