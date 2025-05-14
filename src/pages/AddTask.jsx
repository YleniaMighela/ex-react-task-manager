import { useState, useRef, useMemo, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext';

const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

export default function AddTask() {

    const { addTask } = useContext(GlobalContext);
    const navigate = useNavigate();
    // campo controllato
    const [nameTitle, setNameTitle] = useState("");

    //  campo non controllato
    const descriptionRef = useRef();
    const statusRef = useRef();

    const titleError = useMemo(() => {
        if (!nameTitle.trim())
            return "Il campo non può essere vuoto."
        if ([...nameTitle].some(c => symbols.includes(c)))
            return "Il nome non puòcontenere caratteri speciali"
        return ""
    }, [nameTitle]);

    // all'invio del form se è tutto ok
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTask = {
            title: nameTitle.trim(),
            description: descriptionRef.current.value,
            status: statusRef.current.value,

        }
        // console.log(newTask);
        try {
            await addTask(newTask);
            alert("Task creata")
            // reset dei campi del form,setNameTitle, gli altri due campi non controllati
            setNameTitle("");
            descriptionRef.current.value = "";
            statusRef.current.value = "";
            navigate("/elenco");

        } catch (error) {
            alert(error.message);

        }

    }

    return (
        <>
            <div className='container_add-task'>
                <h1>Aggiungi una task</h1>

                <form onSubmit={handleSubmit}>
                    <div className="add-task">
                        {/* sezione per inserimento nome task */}
                        <label>
                            Nome della Task:
                            <input
                                type="text"
                                value={nameTitle}
                                onChange={(e) => setNameTitle(e.target.value)}
                                placeholder='Inserisci nome del task'
                            />
                            {titleError &&
                                <p className='mex_error'>{titleError}</p>
                            }

                        </label>


                        {/* sezione per inserimento descrizione */}
                        <label>
                            Descrizione:
                            <textarea
                                ref={descriptionRef}
                                placeholder='Inserisci una descrizione'
                            />
                        </label>

                        {/* sezione per inserimento stato */}
                        <label>
                            Seleziona lo stato
                            <select
                                ref={statusRef}
                            >
                                <option value="To do">To do</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>

                            </select>
                        </label>

                        <button type='submit'> Aggiungi Task</button>
                    </div>
                </form>

            </div>
        </>


    );
}