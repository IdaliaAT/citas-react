import Header from "./componentes/header.jsx"
import ListadoPaciente from "./componentes/listadopaciente.jsx"
import Error from "./componentes/error.jsx"
import Formulario from "./componentes/formulario.jsx"
import Paciente from "./componentes/paciente.jsx"

function App() {

  return (
    <>
      <Header />
      <ListadoPaciente/>
      <Error/>
      <Formulario/>
      <Paciente/>
    </>
  )
}
export default App;