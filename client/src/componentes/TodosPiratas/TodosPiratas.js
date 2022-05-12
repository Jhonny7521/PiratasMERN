import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./TodosPiratas.module.css"

const TodosPiratas = () => {

  const [piratas, setPiratas] = useState([]);

  useEffect( () => {
    
  axios.get('http://localhost:8000/api/piratas')
    .then( res => setPiratas(res.data))
    .catch( err => console.log(err));
  }, [])

  const borrarPirata = idPirata => {

  axios.delete("http://localhost:8000/api/pirata/"+idPirata)
    .then( res => {
      //Actualizan lista
      let nuevaListaPiratas = piratas.filter(pirata => pirata._id !== idPirata)
      setPiratas(nuevaListaPiratas);
    })
  }

  return (
    <div>
      <nav className={ styles.navbar}>
        <h2>Tripulación Pirata </h2>
        <Link className={ styles.boton} to="/nuevo">Nuevo Pirata</Link>
      </nav>
      <div className={ styles.cont }>
        <div >
          {piratas.map( (pirata, index) => (
            <section key={index} className={ styles.detpirata}>
              <div className={styles.bloque}>
                <div className='col-3'>
                  <img className='img-fluid' src={pirata.imagen} alt=''/>
                </div>
                <div className='col-6'>
                  <div className={styles.nombreP}>
                    <h1>{pirata.nombre}</h1>
                  </div>
                  <div className={styles.btns}>
                    <Link className="btn btn-warning" to={`/pirata/${pirata._id}`}>Ver Pirata</Link>
                    <button className="btn btn-danger" onClick={ () =>  borrarPirata(pirata._id)}>Caminar por la plancha</button> 
                  </div>
                </div>
              </div>
            </section>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TodosPiratas;