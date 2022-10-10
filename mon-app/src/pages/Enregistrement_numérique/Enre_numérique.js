import React, { useRef, useState} from 'react';
import './Creatindic.css';
import '../../components/Login/signup.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../Indicateur/Indicateur.css';
import {DataGrid ,GridToolbar} from '@mui/x-data-grid';
import {indicRows} from '../../Data';
import {indicColumns} from '../../Data';

function Enre_numérique() {
    const ref = useRef();

    const reset = () => {
      ref.current.value = "";
    };

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
  return (
    <div className='création_indic'>
        <h1 className='indicTitel5'>Importer un fichier CSV</h1>
        <form id='csv-form' className='button_enreg'>
          <input
          type={'file'}
          accept='.csv'
          id='csvfile'
          onChange={(e) =>{setCsvFile(e.target.files[0])}}
          className='buttonIndic'
          ref={ref}>
          </input>
          
          <button
          onClick={(e) =>{e.preventDefault()
          if(csvfile)submit()}}
          className='buttonIndic'>Visualiser </button>

        </form>
        <DataGrid
        rows={csvArray}
        columns={indicColumns}
        pageSize={7}
        getRowId={(row)=>row.ID}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar}}
        className='indic_table'/> 
        {/* <form id='csv-form' className='button'>
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

        </form> */}
    </div>
  )
}

export default Enre_numérique