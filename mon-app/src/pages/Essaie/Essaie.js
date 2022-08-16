import React,{useEffect, useState} from 'react';
import './Essaie.css';
import ListeEssaie from '../../components/Essaie/ListeEssaie/ListeEssaie';
import NouveauEssaie from '../../components/Essaie/NouveauEssaie/NouveauEssaie';
import {DataGrid ,GridToolbar} from '@mui/x-data-grid';
import {essaieColumns} from '../../Data';
import { essaieRows} from '../../Data';

function Essaie() {
  const [tableEssaie, setTableEssaie] = useState([]);
  useEffect(() =>{getEssaie();})
  const getEssaie = async() =>{
    await fetch("http://127.0.0.1:8000/GazIndic/generic/essaie")
    .then((data) => data.json())
    .then((data) => setTableEssaie(data))  
  }
  return (
    <div className='essaie'>
      <h1 className='essaieTitel'>Liste des essaies </h1>
      <DataGrid
        rows={tableEssaie}
        columns={essaieColumns}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar}}
        className='essaieTable'/>
        <NouveauEssaie />
    </div>
  )
}

export default Essaie