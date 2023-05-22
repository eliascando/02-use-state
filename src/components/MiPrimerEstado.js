import React,{useState} from 'react';

export const MiPrimerEstado = () => {
    
    /*
    Problemática

    let nombre = "Elías Cando";
    const cambiarNombre = e => {
        nombre = "Juan Perez"    
    }
    */
    const [nombre, setNombre] = useState("Elías Cando");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
        console.log(e.target);
    }
  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong className='label'>{nombre}</strong>
        <button onClick={ e => cambiarNombre(e, "Juan Perez")}> Cambiar nombre por Juan Perez</button>
        <input type="text" onChange={e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre'/>
    </div>
  )
}