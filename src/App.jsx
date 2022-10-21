import Header from "./componentes/header.jsx"
import ListadoPaciente from "./componentes/listadoPaciente.jsx"
import Formulario from "./componentes/formulario.jsx"
//import Error from "./componentes/error.jsx"
//import Paciente from "./componentes/paciente.jsx"
import { useState } from "react";

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  return (
    <div className="container mx-auto mt-15">
      <Header />
      <div className="md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente} />
        <ListadoPaciente />
      </div>
    </div>
  )
}
export default App;