// mi salvo in una costantae l'URL
const apiUrl = import.meta.env.VITE_API_URL;
// console.log('API URL:', import.meta.env.VITE_API_URL);


// importo react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";


// importo il Layout
import DefaultLayout from "./layout/DefaultLayout";

// importo le pagine
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import HomePage from "./pages/HomePage";




function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/elenco" element={<TaskList />} />
            <Route path="/form" element={<AddTask />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
