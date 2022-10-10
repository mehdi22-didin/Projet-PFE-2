import React, { useRef, useState} from 'react';
import './Creatindic.css';
import '../../components/Login/signup.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../Indicateur/Indicateur.css';
import {DataGrid ,GridToolbar} from '@mui/x-data-grid';
import {indicRows} from '../../Data';
import {indicColumns} from '../../Data';

function CréerIndicateur() {
    const [name, setName] = useState("")
    const [enregistreur, setEnregi] = useState("")
    const [valeur, setVal] = useState(0.0)
    const history = useNavigate();
  
    const AddIndicInfos = async() => {
       let formField = new FormData()
  
       formField.append('name', name)
       formField.append('valeur', valeur)
       formField.append('enregistreur', enregistreur) 
  
       
      const response = axios.create({
        baseURL: "http://127.0.0.1:8000/GazIndic/generic/article/",
        withCredentials: true,
        xsrfHeaderName: 'X-CSRFToken',
        xsrfCookieName: 'csrftoken',
      })
      await response({
        method: 'POST',
        url: "http://127.0.0.1:8000/GazIndic/generic/article/",
        data: formField,
      }) 
      .then((res) => {
        console.log(res.data)
        history('/Indicateur')
      }) 
    }
  return (
    <div>
         <div className="forme">
            <h1 className="creatTitelIndic">Saisie des mesures des indicateurs</h1>
            <form className='newindic'>
            <div className='utilisateur_name'>
              <label className='Label'> Nom d'indicateur</label>
              <input className='input' type='text' name="name" value={name} placeholder="Entrer le nom d'indicateur" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='utilisateur_name'>
              <label className='Label'> Enregistreur </label>
              <input className='input' type='text' name="enregistreur" value={enregistreur} placeholder="Entrer le nom d'enregistreur" onChange={(e) => setEnregi(e.target.value)}/>
            </div>
            <div className='utilisateur_name'>
              <label className='Label'> Valeur Mesurer </label>
              <input className='input' type='text' name="valeur" value={valeur} placeholder="Entrer la valeur d'indicateur" onChange={(e) => setVal(e.target.value)}/>
            </div>
            </form>
            <button  className='buttonCreat' onClick={AddIndicInfos}>Valider Infos</button>   
        </div>
    </div>
  )
}

export default CréerIndicateur