const Formulario =() =>{
  return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="mt-5 text-center text-lg">
        Añade Pacientes<br/>
        <span className="text-indigo-600 font-bold">Administrarlos</span></p>

        <form className="bg-slate-50 rounded-lg py-10 px-5 mb-10 shadow-md" onSubmit={ev => { ev.preventDefault(); }}>

      <label htmlFor="mascota" className="block uppercase font-bold text-gray-700 ">Nombre Paciente</label>
      <input
        id="mascota"
        type="text"
        placeholder="nombre mascota"
className="border-2 w-full p-2 w-full p-2 placeholder-gray-600 rounded-md"

/>
      
      <label htmlFor="email" className="block uppercase font-bold text-gray-700">Correo Electronico</label>
      <input
        id="name"
        name="email"
        type="email"
        placeholder="Correo electrónico"
                
        />

      <label htmlFor="fechacita" className="block uppercase font-bold text-gray-700 ">Fecha de cita</label>
        <input
          id="fecha"
          name="fecha"
          type="date"
        
      />

      <label htmlFor="hora" className="block uppercase font-bold text-gray-700 ">Hora de Cita</label><br />
      <input
        id="hora"
        name="hora"
        type="time"
        
      />

      <label htmlFor="alta" className="block uppercase font-bold text-gray-700 ">Alta</label><br />
      <textarea
        id="sintomas"
        name="sintomas"
        placeholder="Sintomas que presenta.."
        
         />
      <input
        name="registraCita"
        type="submit"
        value="Registrar Cita" />
    </form></div>
  )
}

export default Formulario;