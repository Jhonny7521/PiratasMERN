import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import styles from "../VerPirata/VerPirata.module.css";

const VerPirata = () => {

  const {id} = useParams();

  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [cofresTesoro, setCofresTesoro] = useState(0);
  const [frase, setFrase] = useState("");
  const [posicion, setPosicion] = useState("");
  const [patadepalo, setPatadepalo] = useState(true);
  const [parcheojo, setParcheojo] = useState(true);
  const [manodegancho, setManodegancho] = useState(true);

  const history = useHistory();

  useEffect( () => {
    axios.get('http://localhost:8000/api/pirata/'+ id)
    .then( res => {
      setNombre(res.data.nombre);
      setImagen(res.data.imagen);
      setCofresTesoro(res.data.cofresTesoro);
      setFrase(res.data.frase);
      setPosicion(res.data.posicion);
      setPatadepalo(res.data.patadepalo);
      setParcheojo(res.data.parcheojo);
      setManodegancho(res.data.manodegancho);
    })
    .catch( err => {
      console.log(err);
      // history.push("/error")
    });
  }, [id])

  return (
    <div>
      <nav className={ styles.navbar}>
        <h2> {nombre} </h2>
        <Link className={ styles.boton} to="/">Tablero de tripulacion</Link>
      </nav>
      <div className='row'>
        <div className='col-6'>
          <div className={ styles.img }>
            <img className='img-fluid' src={imagen} alt=''/>
          </div>
          <div className={ styles.frase }>
            <h1>" {frase} "</h1>
          </div>
        </div>
        <div className='col-4'>
            <h2>Acerca del Pirata</h2>
          <div>
            <div className={ styles.datos }>
              <h3>Posición: {posicion}</h3>
            </div>
            <div className={ styles.datos }>
              <h3>Tesoros: {cofresTesoro}</h3>
            </div>
            <div className={ styles.datos }>
              { patadepalo ? <h3>Pata de palo: Si </h3> : <h3>Pata de palo: No </h3> }
              { patadepalo ? <button className={styles.btns1} onClick={ () => setPatadepalo( !patadepalo )}>No</button> : <button className={styles.btns2} onClick={ () => setPatadepalo( !patadepalo )}>Si</button> }            
            </div>
            <div className={ styles.datos }>
              { parcheojo ? <h3>Parche en Ojo: Si </h3> : <h3>Parche en Ojo: No </h3> }
              { parcheojo ? <button className={styles.btns1} onClick={ () => setParcheojo( !parcheojo )}>No</button> : <button className={styles.btns2} onClick={ () => setParcheojo( !parcheojo )}>Si</button> }            
            </div>       
            <div className={ styles.datos }>
              { manodegancho ? <h3>Mano de Gancho: Si </h3> : <h3>Mano de Gancho: No </h3> }
              { manodegancho ? <button className={styles.btns1} onClick={ () => setManodegancho( !manodegancho )}>No</button> : <button className={styles.btns2} onClick={ () => setManodegancho( !manodegancho )}>Si</button> }            
            </div>       
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerPirata