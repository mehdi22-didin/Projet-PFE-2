import React, { useRef, useState} from 'react';
import './Creatindic.css';
import '../../components/Login/signup.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../Indicateur/Indicateur.css';
import {DataGrid ,GridToolbar} from '@mui/x-data-grid';
import {indicRows} from '../../Data';
import {indicColumns} from '../../Data';


function Creatindic() {
  /* const [indic, setIndic] = useState(props.indic)

  const submit = (e) =>{
    e.preventDefault()
    fetch('http://127.0.0.1:8000/GazIndic/generic/article/', {method:'POST', body: JSON.stringify({indic}), headers: {'Content-Type':'application/json'}})
    .then(res => res.json())
    .then(json => setIndic(json.indic))
  } */

  // Reset a File Input’s Value in React
  const ref = useRef();

  const reset = () => {
    ref.current.value = "";
  };
  

  // Importation d'un fichier
  const[csvfile , setCsvFile] = useState();
  const[csvArray, setCsvArray] = useState([]);
  const processCsv = (str, delim=',') => {
    const headers = str.slice(0, str.indexOf('\n')).split(delim);
    const rows_file = str.slice(str.indexOf('\n')+1).split('\n');
    const newArray = rows_file.map(
      rows_file => {
        const values = rows_file.split(delim);
        const eachObject = headers.reduce((obj, header, i) =>{
          obj[header] = values[i];
          return obj;
        },{})
        return eachObject;
      })
      setCsvArray(newArray);
  }
  const submit = () =>{
    const file = csvfile;
    const reader = new FileReader();
    reader.onload = function(e){
      const text = e.target.result;
      console.log(text);
      processCsv(text);
    }
    reader.readAsText(file);
  }
  // Récupération des données dans models à partir de création-forme

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

  // la fonctionne de création
  return (
    <div className='création_indic'>
        <div className="forme">
            <h1 className="creatTitelIndic">Création d'un nouveau Indicateur</h1>
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
        <h1 className='indicTitel5'>Importer un fichier CSV</h1>
        <DataGrid
        rows={csvArray}
        columns={indicColumns}
        pageSize={7}
        getRowId={(row)=>row.ID}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar}}
        className='indic_table'/> 
        <form id='csv-form' className='button'>
          <input
          type={'file'}
          accept='.csv'
          id='csvfile'
          onChange={(e) =>{setCsvFile(e.target.files[0])}}
          className='buttonIndic'
          ref={ref}>
          </input>
          <button onClick={reset}>reset</button>
          
          <button
          onClick={(e) =>{e.preventDefault()
          if(csvfile)submit()}}
          className='buttonIndic'>Valider Importation </button>

        </form>

    </div>
  )
}

export default Creatindic