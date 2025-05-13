// mi salvo in una costantae l'URL
const apiUrl = import.meta.env.VITE_API_URL;
// console.log('API URL:', import.meta.env.VITE_API_URL);


// importo il GlobalProvider
import { GlobalProvider } from "./context/GlobalContext";

// importo useState e useEffect
import { useState, useEffect } from "react";
// importo react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";


// importo il Layout
import DefaultLayout from "./layout/DefaultLayout";

// importo le pagine
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import HomePage from "./pages/HomePage";





function App() {
  // deifinisco lo useState per memorizzate i task
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/tasks`)
      .then(res => res.json())
      .then((data) => setTasks(data))


      .catch(err => console.error('Errore fetch:', err));
  }, []);

  // console.log(tasks);

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/elenco" element={<TaskList />} />
              <Route path="/form" element={<AddTask />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
