import { createContext } from "react";
// importo useTasks
import useTasks from "../hooks/useTasks";

// creo un "contenitore" globale
const GlobalContext = createContext();

// la funzione Global reupera i dati da useTask (a sua volta ritorna l'oggetto con i tasks e le altre fuznioni)
export function GlobalProvider({ children }) {
    const taskData = useTasks();

    return (
        <GlobalContext.Provider value={{ ...taskData }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;