//hook es una funcionalidad que permite cambiar estados sin requerir declarar clases. Siempre deben de colocar arriba, antes del return (que es como el body en javascript)

import { useState, useEffect } from "react";

//used state estado de algun componente de mi proyecto. Puede ser de cada componente o pueden compartir estado entre uno y otro.
function Formulario (){
  const [mascota, setMascota]=useState('');
  const [propietario, setPropietario]=useState('');
  const [telefono, setTelefono]=useState('');
  const [email, setEmail]=useState('');
  const [fechacita, setFechacita]=useState('');
  const [hora, setHora]=useState('');
  const [alta, setAlta]=useState('');

  const validacionFormulario=(e)=>{
    e.preventDefault;
    if([mascota,propietario,telefono,email,fechacita,hora,alta].includes('')){
      console.log('Hay al menos un campo vacío')
    }
  }

  return (
    <div className="md:w-1/2 mx-5 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="mt-5 text-center text-lg mb-10">Agregar Nuevos Pacientes<br/>
        <span className="text-indigo-400 font-bold">Administrarlos</span></p>

        <form className="bg-slate-50 rounded-lg py-10 px-5 mb-10 shadow-md" 
        onSubmit={validacionFormulario}>
          
        <div>
          <label htmlFor="mascota" className="block uppercase font-bold text-gray-700">Nombre Paciente</label>
          <input
          id="mascota"
          type="text"
          placeholder="Nombre de mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setMascota(e.target.value)}
          />
          
        </div>

        <div>
          <label htmlFor="propietario" className="block uppercase font-bold text-gray-700 ">Propietario</label>
         <input
          id="propietario"
          type="text"
          placeholder="Nombre del propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setPropietario(e.target.value)}/>
          
        </div>

        <div>
          <label htmlFor="telefono" className="block uppercase font-bold text-gray-700">Telefono</label>
          <input
          id="telefono"
          type="numero"
          placeholder="10 digitos"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setTelefono(e.target.value)}/>
          
        </div>        
      
        <div>
          <label htmlFor="email" className="block uppercase font-bold text-gray-700">Correo Electronico</label>
          <input
          id="email"
          type="email"
          placeholder="email@hotmail.com"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setEmail(e.target.value)}/>
          
        </div>

        <div>
          <label htmlFor="fechacita" className="block uppercase font-bold text-gray-700 ">Fecha de cita</label>
          <input
          id="fecha"
          type="date"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setFechacita(e.target.value)}/>
          
        </div>
        
        <div>
          <label htmlFor="hora" className="block uppercase font-bold text-gray-700 ">Hora de Cita</label>
          <input
          id="hora"
          name="hora"
          type="time"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setHora(e.target.value)
          }  
          />        
        </div>
        
        <div>
          <label htmlFor="alta" className="block uppercase font-bold text-gray-700 ">Sintomas</label>
          <textarea
          id="sintomas"
          name="sintomas"
          placeholder="Sintomas que presenta la mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setAlta(e.target.value)}/>
          
        </div>
     
        <div>
          <input type="submit" className="bg-indigo-500 text-white font-bold uppercase hover:bc-indigo-700 cursor-pointer transition color"
          name="registraCita"
          value="Registrar Cita"
          />
        </div>
        
      </form>
    </div>
  )
}

export default Formulario;