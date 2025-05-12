// importo il componente dalla libreria di react-router
import { NavLink } from "react-router-dom"

export default function Header() {


    return (
        <header>
            <nav>

                <NavLink to="/"> <h1>EX  - Task Manager Avanzato</h1></NavLink>

                <NavLink to="/elenco"> elenco dei task</NavLink>
                <NavLink to="/form"> aggiungere</NavLink>

            </nav>

        </header>


    );
}