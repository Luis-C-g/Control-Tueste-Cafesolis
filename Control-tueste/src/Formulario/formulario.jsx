import React,{useState} from "react"
import ".//formulario.css"

export default function Formulario() {
    const [fecha, setFecha] = useState()
    const [date, setDate] = useState([])

    function adddate(){
        const informacion={
          fecha
        }
        setDate([...date,informacion])
        setFecha ("")

      }

    return(
        <div>
            <h1>Control De Tueste</h1>
            <label className='titulos' htmlFor="">Fecha</label>
            <input className='espacios' onChange={(e)=>{setFecha(e.target.value)}} value={fecha} type="date"/>
            
            <button className='btn-add' onClick={adddate} type='button'>Agregar</button>
        </div>
    )
}