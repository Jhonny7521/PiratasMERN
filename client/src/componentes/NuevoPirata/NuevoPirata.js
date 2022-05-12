import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from "./NuevoPirata.module.css"

const NuevoPirata = () => {

  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [cofresTesoro, setCofresTesoro] = useState(0);
  const [frase, setFrase] = useState("");
  const [posicion, setPosicion] = useState("");
  const [patadepalo, setPatadepalo] = useState(true);
  const [parcheojo, setParcheojo] = useState(true);
  const [manodegancho, setManodegancho] = useState(true);

  const PosicionesTripulacion = [ 'Capitan', 'Oficial de Intendencia', 'Contramaestre', 'sobrecargo' ]

  const [errors, setErrors] = useState({})
  //usamos history para redireccionar rutas
  const history = useHistory();

  //Funcion para guardar con conexion a backend
  const guardarPirata = e => {
    e.preventDefault();
    // axios.post('http://localhost:8000/api/productos', {name: nombre, price: precio, description: descripcion}) //en caso que en modelo esten declarados con otro nombre
    axios.post('http://localhost:8000/api/pirata', {nombre, imagen, cofresTesoro, frase, posicion, patadepalo, parcheojo, manodegancho})
      .then( res => history.push("/"))
      .catch( err => setErrors(err.response.data.errors));
  }


  return (
    <div>
      <nav className={ styles.navbar}>
        <h2>Agregar Pirata </h2>
        <Link className={ styles.boton} to="/">Tablero de tripulacion</Link>
      </nav>
      <form onSubmit={guardarPirata}>
        <div className={styles.row}>
          <div className={ styles.col1}>
            <div className='form-group'>
              <label htmlFor='nombre'>Nombre:</label>
              <input id='nombre' name='nombre' type="text" className='form-control' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
              { errors.nombre ? <span className='text-danger' >{ errors.nombre.message }</span>: null}
            </div>
            <div className='form-group'>
              <label htmlFor='imagen'> URL Imagen:</label> 
              <input type= "text" id="imagen" name="imagen" value={imagen} onChange={ e=> setImagen(e.target.value)} className='form-control'></input>
              { errors.imagen ? <span className='text-danger' >{ errors.imagen.message }</span>: null}
            </div>
            <div className="col-6">
              <img src={imagen} className="img-fluid" alt=''/>
            </div>
            <div className='form-group'>
              <label htmlFor='cofres'> Numero de cofres de tesoro:</label> 
              <input type="number" id="cofres" name="cofres" min="0" max="100" step="1" value={cofresTesoro} onChange = { e => setCofresTesoro(e.target.value)}/>
              { errors.cofresTesoro ? <span className='text-danger' >{ errors.cofresTesoro.message }</span>: null}
            </div>
            <div className='form-group'>
              <label htmlFor='frase'> Frase del pirata:</label> 
              <input type= "text" id="frase" name="frase" value={frase} onChange={ e=> setFrase(e.target.value)} className='form-control'></input>
              { errors.frase ? <span className='text-danger' >{ errors.frase.message }</span>: null}
            </div>
          </div>

          <div className={ styles.col2}>
            <div className='form-group'>
              <label htmlFor='posicion'> Posicion en la Tripulación:</label> 
              <select name="posicion" value={posicion} onChange={ e => setPosicion(e.target.value)}>
                <option defaultValue>Seleccione una posición</option>
                {PosicionesTripulacion.map( (item, i) => <option key={i} value={item}>{item}</option>)}
              </select>
              { errors.posicion ? <span className='text-danger' >{ errors.posicion.message }</span>: null}
            </div>
            <div className='form-check'>
              <input type="checkbox" className='form-check-input' id="pataPalo" name='pataPalo' checked={patadepalo} onChange={(e) => setPatadepalo(e.target.checked)}/>
              <label className='form-check-label' htmlFor='pataPalo'>Pata de palo</label>
            </div>
            <div className='form-check'>
              <input type="checkbox" className='form-check-input' id="parcheojo" name='parcheojo' checked={parcheojo} onChange={(e) => setParcheojo(e.target.checked)}/>
              <label className='form-check-label' htmlFor='parcheojo'>Parche en el ojo</label>
            </div>
            <div className='form-check'>
              <input type="checkbox" className='form-check-input' id="manodegancho" name='manodegancho' checked={manodegancho} onChange={(e) => setManodegancho(e.target.checked)}/>
              <label className='form-check-label' htmlFor='manodegancho'>Mano de gancho</label>
            </div>
            <input type="submit" className="btn btn-success" value="Crear"/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NuevoPirata;