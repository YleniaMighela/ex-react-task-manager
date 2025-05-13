import { useState, useRef } from 'react'



export default function AddTask() {

    // campo controllato
    const [nameTitle, setNameTitle] = useState("");

    //  campo non controllato
    const descriptionRef = useRef();
    const statusRef = useRef();

    return (
        <>
            <div className='container_add-task'>
                <h1>Aggiungi una task</h1>

                <form>
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
                                <option value="">To do</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>

                            </select>
                        </label>

                    </div>
                </form>

            </div>
        </>


    );
}