// importo il componente dalla libreria di react-router
import { NavLink } from "react-router-dom"

export default function Header() {


    return (
        <header>
            <nav className="navbar">
                <div className="navbar-left">
                    <NavLink to="/"> <h1>TaskBool</h1></NavLink>

                </div>

                <div className="navbar-right">
                    <NavLink to="/elenco"> Lista dei task</NavLink>
                    <NavLink to="/form"> Aggiungi il tuo task</NavLink>
                </div>
            </nav>
        </header>
    );
}