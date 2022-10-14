import Header from "./componentes/header.jsx"
import ListadoPaciente from "./componentes/listadopaciente.jsx"
import Formulario from "./componentes/formulario.jsx"
import Paciente from "./componentes/paciente.jsx"
import Error from "./componentes/error.jsx"

function App() {

  return (
    <div className="container mx-auto mt-15">
      <Header />
      <ListadoPaciente/>
      <Error/>
      <Formulario/>
      <Paciente/>
    </div>
  )
}
export default App;